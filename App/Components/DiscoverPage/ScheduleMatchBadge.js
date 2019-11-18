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
                <View style = {styles.match}>
                    <Text style = {styles.text}>{this.props.schedule}</Text>
                </View>
                <View style =  {styles.phraseView}>
                    <Text style = {styles.phrase}>Schedule Match</Text>
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
    match: {
        height: 25,
        width:60,
        borderRadius: 5,
        backgroundColor: '#A2C5AC',
        borderColor: '#8fb59a',
        borderWidth: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center',
    },
    phrase: {
        fontSize: 14,
        color: Colors.heading,
        marginLeft: 5,
        fontWeight: '300',
    },
    phraseView: {
        height: 25,
        justifyContent: 'center'
    },
  });