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
    BaseViewModel, emojiPlayerModel, FaceOffset, EMOJI_TYPE
} from 'orionos-eve-core';
import * as React from 'react';
import { Text } from 'react-native';

export class BigEyeViewModel extends BaseViewModel {

    public constructor() {
        super('BigEyeViewModel');
    }

    /**
     * 开始大眼睛演示
     */
    public onStart(): void {
        emojiPlayerModel.setShow(true);
    }

    /**
     * 结束大眼睛演示
     */
    public onStop(): void {
        emojiPlayerModel.setShow(false);
    }

    /**
     * 显示大眼睛
     */
    public onPressShow = (): void => {
        emojiPlayerModel.setShow(true);
    };

    /**
     * 隐藏大眼睛
     */
    public onPressHide = (): void => {
        emojiPlayerModel.setShow(false);
    };

    /**
     * 嘴动（说话）
     */
    public onPressTalk = (): void => {
        emojiPlayerModel.setTalk(true);
    };

    /**
     * 停止嘴动
     */
    public onPressStopTalk = (): void => {
        emojiPlayerModel.setTalk(false);
    };

    /**
     * 设置背景
     */
    public onPressSetBg = (): void => {
        emojiPlayerModel.setBgSource('https://jiedai.ainirobot.com/media//module_public/module_skill_home/home1.png');
    };

    /**
     * 清除背景
     */
    public onPressClearBg = (): void => {
        emojiPlayerModel.setBgSource('');
    };

    /**
     * 显示特定表情
     */
    public onPressShowEmoji = (): void => {
        emojiPlayerModel.setplayerResType(EMOJI_TYPE.COCO);
    };

    /**
     * 停止显示特定表情
     */
    public onPressStopEmoji = (): void => {
        emojiPlayerModel.setplayerResType(undefined);
    };

    /**
     *  插入自定义控件
     */
    public onPressSetView = (): void => {
        emojiPlayerModel.setContentView(
            <Text
                style={{
                    position: 'absolute',
                    color: 'white',
                    width: '100%',
                    height: '10%',
                    backgroundColor: 'dodgerblue',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    bottom: '15%'
                }}>
                {'自定义控件'}
            </Text>
        );
    };

    /**
     *  清除自定义控件
     */
    public onPressClearView = (): void => {
        emojiPlayerModel.setContentView(null);
    };

    /**
     * 移动大眼睛位置-上
     */
    public onPressUp = (): void => {
        emojiPlayerModel.setFaceOffset(new FaceOffset(0, 300, true));
    };

    /**
     * 移动大眼睛位置-下
     */
    public onPressDown = (): void => {
        emojiPlayerModel.setFaceOffset(new FaceOffset(0, -400, true));
    };

    /**
     * 移动大眼睛位置-左
     */
    public onPressLeft = (): void => {
        emojiPlayerModel.setFaceOffset(new FaceOffset(-100, 0, true));
    };

    /**
     * 移动大眼睛位置-右
     */
    public onPressRight = (): void => {
        emojiPlayerModel.setFaceOffset(new FaceOffset(100, 0, true));
    };

    /**
     * 移动大眼睛位置-中
     */
    public onPressCenter = (): void => {
        emojiPlayerModel.setFaceOffset(new FaceOffset(0, 0, true));
    };

    /**
     * 是否显示大眼睛
     */
    public isShow = (): boolean => {
        return emojiPlayerModel.isShow();
    };

    /**
     * 是否动嘴
     */
    public isTalk = (): boolean => {
        return emojiPlayerModel.isTalk();
    };

    /**
     * 获取背景图片url
     */
    public getBgSource = (): string | undefined => {
        return emojiPlayerModel.getBgSource();
    };

    /**
     * 获取播放的表情类型
     */
    public getPlayerResType = (): EMOJI_TYPE | undefined => {
        return emojiPlayerModel.getPlayerResType();
    };

    /**
     * 获取表情上显示的自定义控件
     */
    public getContentView = (): any => {
        return emojiPlayerModel.getContentView();
    };
}