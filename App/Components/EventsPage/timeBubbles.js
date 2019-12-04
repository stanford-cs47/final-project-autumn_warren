import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Metrics, Colors, Images } from '../../Themes';
import SwitchToggle from 'react-native-switch-toggle';
import profile from '../../Data/MyProfile';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class TimeBubbles extends React.Component {
    state = {
        selected: false,
    }
    changeColor() {
        this.setState({selected: !this.state.selected}); 
    }
    render () {
        return (
            <View style = {styles.container}>
                <TouchableOpacity onPress = {() => {this.changeColor()}}>
                    <View style = {this.state.selected ? styles.selected:styles.notSelected}>
                        <Text style = {styles.text}>{this.props.badgeText}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row',
    },
    selected: {
        height: 25,
        width:100,
        borderRadius: 5,
        backgroundColor: Colors.orange,
       // borderColor: '#abd1b6',
       // borderWidth: 1,
        justifyContent: 'center'
    },
    notSelected: {
        height: 25,
        width:100,
        borderRadius: 5,
        backgroundColor: 'gray',
       // borderColor: '#abd1b6',
       // borderWidth: 1,
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