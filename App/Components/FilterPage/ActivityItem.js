import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
} from 'react-native';
import { material } from 'react-native-typography';
import { Metrics, Colors, Images } from '../../Themes';
import { CheckBox } from 'react-native-elements'
export default class ActivityItem extends React.Component {
state = {
    checked: false,
};
render() {
    return (
        <View style = {styles.container}>
            <CheckBox
                title = {this.props.name}
                textStyle = {styles.text}
                checkedColor = {Colors.heading}
                uncheckedColor = {Colors.heading}
                checked={this.state.checked}
                containerStyle = {styles.box}
                onPress={() => this.setState({checked: !this.state.checked})}/>
        </View>
    )
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
        color: Colors.heading,
        alignSelf: 'center',
    },
    box: {
        backgroundColor: null,
        borderWidth: 0,
    },
});
