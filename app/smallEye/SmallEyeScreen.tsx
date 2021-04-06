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
import { Button, StyleSheet, View } from 'react-native';
import { SmallEyeViewModel } from './SmallEyeViewModel';

const styles = StyleSheet.create({
    rootView: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    rowView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginBottom: 10
    }
});

@observer
export class SmallEyeScreen
    extends BaseComponent<BaseComponentProps, SmallEyeViewModel, BaseVoice> {

    public constructor(props: BaseComponentProps) {
        super(props);

        this.setViewModel(new SmallEyeViewModel());
    }

    public render(): React.ReactNode {
        if (!this.viewModel) {
            return null;
        }
        return (
            <View style = {styles.rootView}>
                <View style = {styles.rowView}>
                    {this.viewModel.isHide() ? (
                        <Button
                            color={'dodgerblue'}
                            title={'显示'}
                            onPress={this.viewModel.onPressShow}/>
                    ) : (
                        <Button
                            color={'dodgerblue'}
                            title={'隐藏'}
                            onPress={this.viewModel.onPressHide}/>
                    )}
                    {this.viewModel.isShowCenter() ? (
                        <Button
                            color={'dodgerblue'}
                            title={'左边'}
                            onPress={this.viewModel.onPressLeft}/>
                    ) : (
                        <Button
                            color={'dodgerblue'}
                            title={'中间'}
                            onPress={this.viewModel.onPressCenter}/>
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
                </View>
            </View>
        );
    }
}