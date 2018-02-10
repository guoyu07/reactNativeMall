/*
* @Author: yongqing
* @Date:   2018-02-09 13:25:34
* @Last Modified by:   yongqing
* @Last Modified time: 2018-02-10 16:14:58
*/

'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import {getList} from '../api'
export default class Home extends Component{
	constructor(props) {
      super(props);
      this._init();
      this.state = {
      	list:[]
      };
  	}
	render(){
		return(
			<View>
				<Text>{this.state.list.title}</Text>
					<Text>{this.state.list.introduction}</Text>
			</View>
			)
	}
    async _init() {
        let params = {
            id: 3270
        }
        let res = await getList(params);
        if (res.code == 0) {
            this.setState({ list: res.data });
        } else {
            Alert.alert(res.msg)
        }
    }
}

const styles = StyleSheet.create({

});