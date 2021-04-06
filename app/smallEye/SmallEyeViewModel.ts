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

import {
    BaseViewModel, emojiPlayerModel, faceParticleModel
} from 'orionos-eve-core';

export class SmallEyeViewModel extends BaseViewModel {

    public constructor() {
        super('SmallEyeViewModel');
    }

    public onStart(): void {
        faceParticleModel.setHide(false);
        emojiPlayerModel.setShow(false);
    }

    public onStop(): void {
        faceParticleModel.setHide(true);
    }

    /**
     * 点击显示
     */
    public onPressShow = (): void => {
        faceParticleModel.setHide(false);
    };

    /**
     * 点击隐藏
     */
    public onPressHide = (): void => {
        faceParticleModel.setHide(true);
    };

    /**
     * 是否隐藏小眼睛
     */
    public isHide = (): boolean => {
        return faceParticleModel.isHide();
    };

    /**
     * 点击小眼睛显示在中间
     */
    public onPressCenter = (): void => {
        faceParticleModel.setShowCenter(true);
    };

    /**
     * 点击小眼睛显示在左边
     */
    public onPressLeft = (): void => {
        faceParticleModel.setShowCenter(false);
    };

    /**
     * 是否显示在中间
     */
    public isShowCenter = (): boolean => {
        return faceParticleModel.isShowCenter();
    };

    /**
     * 嘴动（说话）
     */
    public onPressTalk = (): void => {
        faceParticleModel.setTalk(true);
    };

    /**
     * 停止嘴动
     */
    public onPressStopTalk = (): void => {
        faceParticleModel.setTalk(false);
    };

    /**
     * 是否动嘴
     */
    public isTalk = (): boolean => {
        return faceParticleModel.isTalk();
    };

    /**
     * 设置背景
     */
    public onPressSetBg = (): void => {
        faceParticleModel.setBgSource('https://jiedai.ainirobot.com/media//module_public/module_skill_home/home1.png');
    };

    /**
     * 清除背景(显示默认背景)
     */
    public onPressClearBg = (): void => {
        faceParticleModel.setBgSource('');
    };

    /**
     * 获取背景图片url
     */
    public getBgSource = (): string | undefined => {
        return faceParticleModel.getBgSource();
    };

}