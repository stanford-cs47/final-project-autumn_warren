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
import profile from '../../Data/MyProfile';
export default class ActivityItem extends React.Component {
    state = {
        activities: profile.profile.activities,
        matches: false,
    }
    componentWillMount() {
        for(i = 0; i < this.state.activities.length; i ++) {
            if(this.state.activities[i] === this.props.activity) {
                this.setState({matches: true});
            }
            console.log(this.state.matches)
        }
    }
    render () {
        return (
            <View style = {styles.container}>
                <View 
                style = {this.state.matches? styles.match : styles.notMatch } >
                    <Text style = {styles.text}>{this.props.activity}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginRight: 10,
    },
    notMatch: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#7a7a7a',
        justifyContent: 'center'
    },
    match: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#86bf96',
        justifyContent: 'center'
    },
    text: {
        fontSize: 17,
        color: 'white',
        alignSelf: 'center',
        fontFamily: "Gill Sans"
    },
  });