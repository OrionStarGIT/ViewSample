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

import * as React from 'react';
import {
    BaseComponent,
    BaseComponentProps,
    BaseVoice
} from 'orionos-eve-core';
import { observer } from 'mobx-react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { BigEyeViewModel } from './BigEyeViewModel';

const styles = StyleSheet.create({
    rootView: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    topView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    bottomView: {
        width: '100%',
        height: '10%',
        paddingBottom: '3%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    bottomText: {
        color: 'white',
        height: '100%',
        textAlignVertical: 'center'
    }
});

@observer
export class BigEyeScreen
    extends BaseComponent<BaseComponentProps, BigEyeViewModel, BaseVoice> {

    public constructor(props: BaseComponentProps) {
        super(props);

        this.setViewModel(new BigEyeViewModel());
    }

    public render(): React.ReactNode {
        if (!this.viewModel) {
            return;
        }
        return (
            <View style={styles.rootView}>
                <View style={styles.topView}>
                    {this.viewModel.isShow() ? (
                        <Button
                            color={'dodgerblue'}
                            title={'隐藏'}
                            onPress={this.viewModel.onPressHide}/>
                    ) : (
                        <Button
                            color={'dodgerblue'}
                            title={'显示'}
                            onPress={this.viewModel.onPressShow}/>
                    )}
                    {this.viewModel.isTalk() ? (
                        <Button
                            color={'dodgerblue'}
                            title={'停止动嘴'}
                            onPress={this.viewModel.onPressStopTalk}/>
                    ) : (
                        <Button
                            color={'dodgerblue'}
                            title={'动嘴'}
                            onPress={this.viewModel.onPressTalk}/>
                    )}
                    {this.viewModel.getBgSource() ? (
                        <Button
                            color={'dodgerblue'}
                            title={'隐藏背景'}
                            onPress={this.viewModel.onPressClearBg}/>
                    ) : (
                        <Button
                            color={'dodgerblue'}
                            title={'设置背景'}
                            onPress={this.viewModel.onPressSetBg}/>
                    )}
                    {this.viewModel.getPlayerResType() ? (
                        <Button
                            color={'dodgerblue'}
                            title={'停止播放'}
                            onPress={this.viewModel.onPressStopEmoji}/>
                    ) : (
                        <Button
                            color={'dodgerblue'}
                            title={'播放表情'}
                            onPress={this.viewModel.onPressShowEmoji}/>
                    )}
                    {this.viewModel.getContentView() ? (
                        <Button
                            color={'dodgerblue'}
                            title={'隐藏控件'}
                            onPress={this.viewModel.onPressClearView}/>
                    ) : (
                        <Button
                            color={'dodgerblue'}
                            title={'显示控件'}
                            onPress={this.viewModel.onPressSetView}/>
                    )}
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.bottomText}>眼睛位置：</Text>
                    <Button
                        color={'dodgerblue'}
                        title={'上'}
                        onPress={this.viewModel.onPressUp}/>
                    <Button
                        color={'dodgerblue'}
                        title={'下'}
                        onPress={this.viewModel.onPressDown}/>
                    <Button
                        color={'dodgerblue'}
                        title={'左'}
                        onPress={this.viewModel.onPressLeft}/>
                    <Button
                        color={'dodgerblue'}
                        title={'右'}
                        onPress={this.viewModel.onPressRight}/>
                    <Button
                        color={'dodgerblue'}
                        title={'中'}
                        onPress={this.viewModel.onPressCenter}/>
                </View>
            </View>
        );
    }
}