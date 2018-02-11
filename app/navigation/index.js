import {TabNavigator, StackNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {Image} from 'react-native';
import Home from '../pages/home'
import Nearby from '../pages/nearby'
import ShopCart from '../pages/shopcart'
import Message from '../pages/message';

const icon_home = require('../images/tabbar/icon_home.png')
const icon_home_active = require('../images/tabbar/icon_home_active.png')

const icon_nearby = require('../images/tabbar/icon_nearby.png')
const icon_nearby_active = require('../images/tabbar/icon_nearby_active.png')

const icon_message = require('../images/tabbar/icon_message.png')
const icon_message_active = require('../images/tabbar/icon_message_active.png')

const icon_my = require('../images/tabbar/icon_my.png')
const icon_my_active = require('../images/tabbar/icon_my_active.png')

const TabOptions = (tabBarTitle, normalImage, selectedImage, navTitle) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor, focused}) => {
        return (focused
            ? <Image
                    source={selectedImage}
                    style={{
                    height: 23,
                    width: 23
                }}/>
            : <Image
                source={normalImage}
                style={{
                height: 23,
                width: 23
            }}/>)
    });
    let header;
    if (navTitle == null || navTitle == undefined) {
        header=null;
    }
        const headerTitle = navTitle || 'ETC车宝';
    const headerTitleStyle = {
        fontSize: 18,
        color: 'white'
    };
    // header的style
    const headerStyle = {
        backgroundColor: '#f23030'
    };
    return {
        tabBarLabel,
        tabBarIcon,
        headerTitle,
        headerTitleStyle,
        headerStyle,
        header
    };
};

// see here for options: https://reactnavigation.org/docs/navigators/tab
const TabNavigation = TabNavigator({
    HomeTab: {
        screen: Home,
        navigationOptions: TabOptions('首页', icon_home, icon_home_active)
    },
    NearbyTab: {
        screen: Nearby,
        navigationOptions: TabOptions('附近', icon_nearby, icon_nearby_active, '附近')
    },
    MessageTab: {
        screen: Message,
        navigationOptions: TabOptions('消息', icon_message, icon_message_active, '消息')
    },
    ShopCartTab: {
        screen: ShopCart,
        navigationOptions: TabOptions('我的', icon_my, icon_my_active, '我的')
    }
}, {
    animationEnabled: false,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    backBehavior: 'none',
    headerTintColor: '#fff',
    tabBarOptions: {
        activeTintColor: '#f23030', // 文字和图片选中颜色
        inactiveTintColor: '#808080', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0
        }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#fff', // TabBar 背景色

        },
        labelStyle: {
            fontSize: 11, // 文字大小
        }
    }
});

// add your router below
const Navigation = StackNavigator({
    Main: {
        screen: TabNavigation
    },
    ShopCart: {
        screen: ShopCart
    }

});

export default Navigation