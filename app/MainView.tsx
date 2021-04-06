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

import { Component } from 'react';
import {
    Button,
    FlatList,
    ListRenderItemInfo,
    StyleSheet,
    View
} from 'react-native';
import * as React from 'react';
import { BigEyeScreen } from './bigEye/BigEyeScreen';
import { SmallEyeScreen } from './smallEye/SmallEyeScreen';

const styles = StyleSheet.create({
    rootView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    rootView2: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoryList: {
        width: '80%',
        height: '100%',
        marginTop: 10
    },
    button: {
        width: '100%',
        marginTop: 10
    },
    titleButton: {
        width: '25%',
        height: '10%',
        alignSelf: 'flex-start'
    },
    subView: {
        flex: 1,
        width: '100%'
    }
});

interface Category {
    name: string;
    view: React.ReactNode;
}

export class MainView extends Component {

    /**
     * 功能目录
     */
    private mCategoryList: Category[] = [
        { name: '大眼睛', view: <BigEyeScreen/> },
        { name: '小眼睛', view: <SmallEyeScreen/> }
    ];
    /**
     * 选中项
     */
    private mSelectIndex: number = 0;

    public state = {
        /**
         * 0-目录
         * >0-具体界面
         */
        viewType: 0
    };

    public render(): React.ReactNode {
        return this.state.viewType === 0 ?
            this.renderCategoryList() : this.renderSubView();
    }

    private renderCategoryList(): React.ReactChild {
        return (
            <View style={styles.rootView}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.categoryList}
                    data={this.mCategoryList}
                    renderItem={this.renderItem}/>
            </View>
        );
    }

    private renderItem = ({ item, index }: ListRenderItemInfo<Category>): React.ReactElement => {
        return (
            <View style={styles.button}>
                <Button
                    title={item.name}
                    onPress={(): void => {
                        this.mSelectIndex = index;
                        this.setState({
                            viewType: 1
                        });
                    }}
                />
            </View>
        );
    };

    private renderSubView(): React.ReactChild {
        let category = this.mCategoryList[this.mSelectIndex];
        return (
            <View style={styles.rootView2}>
                <View style={styles.titleButton}>
                    <Button
                        color={'dodgerblue'}
                        title={'后退'}
                        onPress={(): void => {
                            this.setState({
                                viewType: 0
                            });
                        }}/>
                </View>
                <View style={styles.subView}>
                    {category.view}
                </View>
            </View>
        );
    }
}