/**
 * Created by hexiaowen on 2017/3/11.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

let TitleCell = require('../Common/TitleAndArrowView');
let NaviBar = require('../Common/NaviBar');
var More = React.createClass({

    render(){
        return(
        <View style={styles.container}>
            <NaviBar
                _titleName = '更多'
                _rightIcon = 'icon_mine_setting'

            />
            <ScrollView >

                <TitleCell
                title='扫一扫'
                isSwitch={false}

            />
               <View style={styles.sectionStyle}>
                   <TitleCell
                       title='省流量'
                       isSwitch={true}
                   />
                   <TitleCell
                       title='消息提醒'
                   />
                   <TitleCell
                       title='邀请好友'
                   />
                   <TitleCell
                       title='清除缓存'
                       rightTitle = '1.10m'
                   />
               </View>
                <View style={styles.sectionStyle}>
                    <TitleCell
                        title='意见反馈'
                    />
                    <TitleCell
                        title='支付帮助'
                    />
                    <TitleCell
                        title='关于我们'
                    />
                    <TitleCell
                        title='精品应用'
                    />
                    <TitleCell
                        title='网络诊断'
                    />
                </View>

            </ScrollView>
            </View>
            )


    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    sectionStyle:{
        marginTop:20,

    }

});

module.exports = More;