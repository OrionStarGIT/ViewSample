/*
 *  Copyright (C) 2017 OrionStar Technology Project
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const pathSep = require("path").sep;
const appid = require("./package").appid;

const fs = require("fs");

const corePath = pathSep + 'node_modules' + pathSep + 'orionos-eve-core' + pathSep;
const injectFiles = [
    corePath + 'src' + pathSep + 'Trigger.ts',
    corePath + 'src' + pathSep + 'BaseViewModel.ts',
    corePath + 'src' + pathSep + 'robot' + pathSep + 'api' + pathSep + 'AppManager.ts',
    corePath + 'src' + pathSep + 'robot' + pathSep + 'api' + pathSep + 'AppUpdateManager.ts',
    corePath + 'src' + pathSep + 'robot' + pathSep + 'api' + pathSep + 'RobotSettingApi.ts'
];

function readFile(filePath) {
    if (fs.existsSync(filePath)) {
        const lines = String(fs.readFileSync(filePath))
            .split("\n")
            .filter((line) => line.length > 0);
        return new Set(lines);
    } else {
        return new Set();
    }
}

let commonModules = null;

function isInManifest(path) {
    const manifestFile = "./common_manifest.txt";

    if (commonModules === null) {
        commonModules = readFile(manifestFile);
    }

    return commonModules.has(path);
}

function createModuleIdFactory() {
    //获取命令行执行的目录，__dirname是nodejs提供的变量
    const projectRootPath = __dirname;
    return (path) => {
        let name = "";
        //针对自己的moudle携带绝对路径的名字 去除工程名字部分。
        if (path.indexOf(projectRootPath) === 0) {
            name = path.substr(projectRootPath.length + 1);
        }

        if (!isInManifest(pathSep + name)) {
            //业务代码增加AppId, 避免重复
            name = appid + pathSep + name;
        } else if (
            name.indexOf("node_modules" + pathSep + "orionos-eve-core" + pathSep) >= 0
        ) {
            name = name.substr(("node_modules" + pathSep).length);
        }

        //最后在将斜杠替换为空串或下划线
        let regExp =
            pathSep === "\\" ? new RegExp("\\\\", "gm") : new RegExp(pathSep, "gm");
        name = name.replace(regExp, "_");
        return name;
    };
}

function processModuleFilterBiz(module) {
    //过滤掉path为__prelude__的一些模块（基础包内已有）
    if (module.path.indexOf("__prelude__") >= 0) {
        return false;
    }

    //过滤掉node_modules内的模块（基础包内已有）
    let index = module.path.indexOf(pathSep + "node_modules" + pathSep);
    if (index > 0) {
        //但输出类型为js/script/virtual的模块不能过滤，一般此类型的文件为核心文件，如InitializeCore.js。每次加载bundle文件时都需要用到。
        if (
            "js" + pathSep + "script" + pathSep + "virtual" ===
            module.output[0].type
        ) {
            return true;
        }

        let path = module.path.substring(index);
        if (isInManifest(path)) {
            return false;
        }

        if (injectFiles.includes(path)) {
            module.output[0].data.code = module.output[0].data.code.replace('appId=null', 'appId=\'' + appid + '\'');
        }
    }

    //修改图片资源的加载路径
    if ("js/module/asset" === module.output[0].type) {
        module.output[0].data.code = module.output[0].data.code.replace("assets", appid + "/assets");
    }

    //其他就是应用代码
    return true;
}

module.exports = {
    transformer: {
        minifierConfig: {
            keep_classnames: true,
            keep_fnames: true,
        },
    },
    serializer: {
        createModuleIdFactory: createModuleIdFactory,
        processModuleFilter: processModuleFilterBiz,
    },
};
