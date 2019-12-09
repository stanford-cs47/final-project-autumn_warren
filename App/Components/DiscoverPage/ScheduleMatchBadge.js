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
export default class ScheduleMatchBadge extends React.Component {
    render () {
        return (
            <View style = {styles.container}>
                <View style = {this.props.badgeText === 'High'?styles.match: styles.notMatch}>
                    <Text style = {styles.text}>{this.props.badgeText}</Text>
                </View>
                <View style =  {styles.phraseView}>
                    <Text style = {styles.phrase}>{this.props.type}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row',
    },
    match: {
        height: 25,
        width:100,
        borderRadius: 5,
        backgroundColor: '#86bf96',
       // borderColor: '#abd1b6',
       // borderWidth: 1,
        justifyContent: 'center'
    },
    notMatch: {
        height: 25,
        width:100,
        borderRadius: 5,
        backgroundColor: '#7a7a7a',
        justifyContent: 'center'
    },
    text: {
        fontSize: 17,
        color: 'white',
        alignSelf: 'center',
        fontFamily: "Gill Sans"
    },
    phrase: {
        fontSize: 16,
        color: Colors.heading,
        marginLeft: 5,
        fontWeight: '300',
        fontFamily: "Gill Sans"
    },
    phraseView: {
        height: 25,
        justifyContent: 'center'
    },
  });