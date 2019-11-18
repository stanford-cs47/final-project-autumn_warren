import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Metrics, Colors, Images } from '../../Themes';
import SwitchToggle from 'react-native-switch-toggle'
export default class ScheduleMatchIcon extends React.Component {
    state = {
        scheduleMatch: this.props.schedule,
        match: 0,
    }
    render () {
        switch(this.state.scheduleMatch) {
            case "high":
              this.state.match = 3;
              break;
            case "medium":
              this.state.match = 2;
              break;
            case "low":
              this.state.match = 1;
              break;
          }
          const match = this.state.match;
        return (
            <View style = {styles.container}>
                <View style = {styles.icon}>
                    <View style = {[match >2 ?  styles.match: styles.notMatch]}></View>
                </View>
                <View style = {styles.icon}>
                    <View style = {[match >= 2 ?  styles.match: styles.notMatch]}></View>
                </View>
                <View style = {styles.icon}>
                    <View style = {styles.match}></View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    },
    icon: {
        paddingHorizontal: 2,
    },
    match: {
        height: 30,
        width:30,
        borderRadius: 15,
        backgroundColor: '#A2C5AC',
        borderColor: '#8fb59a',
        borderWidth: 1,
        shadowColor: 'gray',
        shadowOffset: {width: 1, height: 5},
        shadowOpacity: 0.22,
        shadowRadius: 2.32,
        elevation: 3,
    },
  });