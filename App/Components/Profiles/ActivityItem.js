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
export default class ActivityItem extends React.Component {
    render () {
        console.log(this.props.activity)
        return (
            <View style = {styles.container}>
                <View style = {styles.activity}>
                    <Text style = {styles.text}>{this.props.activity}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 5,
    },
    activity: {
        height: 40,
        width:75,
        borderRadius: 10,
        backgroundColor: '#A2C5AC',
        borderColor: '#abd1b6',
        borderWidth: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 17,
        color: 'white',
        alignSelf: 'center',
        fontFamily: "Gill Sans"
    },
  });