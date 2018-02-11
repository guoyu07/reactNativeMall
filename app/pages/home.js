/*
* @Author: yongqing
* @Date:   2018-02-09 13:25:34
* @Last Modified by:   yongqing
* @Last Modified time: 2018-02-11 10:47:48
*/

'use strict';
import React, {Component} from 'react';
import {
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window'); //解构赋值 获取屏幕宽度
import {getList} from '../api'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this._init();
        this.state = {
            list: {},
            swiperShow: false
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({swiperShow: true})
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{height:210}}>
                {this._renderSwiper()}
                </View>
               
            </View>
        )
    }

    _renderSwiper = () => {
        if (this.state.swiperShow && this.state.list.good_img) {
            return (
                <Swiper
                    style={styles.wrapper}

                    autoplay
                    dot={< View style = {{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}}/>}
                    activeDot={< View style = {{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}}/>}
                    paginationStyle={{
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
                    loop>
                    {this
                        .state
                        .list
                        .good_img
                        .map((item, index) => {
                            return (
                                <View key={index} style={styles.slide}>
                                    <Image
                                        resizeMode='stretch'
                                        style={styles.image}
                                        source={{
                                        uri: item
                                    }}/>
                                </View>
                            )
                        })}
                </Swiper>

            )
        } else {
            return <View style={{
                height: 100
            }}></View>;
        }

    }
    async _init() {
        let params = {
            id: 3681
        }
        let res = await getList(params);
        if (res.code == 0) {
            this.setState({list: res.data});
        } else {
            Alert.alert(res.msg)
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    image: {
        width: width,
        flex: 1
    }
});