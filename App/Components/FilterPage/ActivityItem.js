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
import SwitchToggle from 'react-native-switch-toggle'
export default class ActivityItem extends React.Component {
/*state = {
    checked: false,
     <CheckBox
                title = {this.props.name}
                textStyle = {styles.text}
                checkedColor = {Colors.heading}
                uncheckedColor = {Colors.heading}
                checked={this.state.checked}
                containerStyle = {styles.box}
                onPress={() => this.setState({checked: !this.state.checked})}/>
};*/
state = {
    switchOn1: false,
  };
onPress1 = () => {
    this.setState({ switchOn1: !this.state.switchOn1 });
  }
render() {
    return (
        <View style = {styles.container}>
             <SwitchToggle containerStyle={{
                    marginTop: 16,
                    width: 55,
                    height: 30,
                    borderRadius: 17,
                    backgroundColor: '#ccc',
                    padding: 2,
                }}
                switchOn={this.state.switchOn1}
                onPress={this.onPress1}
                circleColorOff='white'
                circleColorOn='white'
                backgroundColorOn={Colors.orange}
                backgroundColorOff='#e5e1e0'
                type = {1}
                circleStyle={{
                    width: 27,
                    height: 27,
                    borderRadius: 15,
                    backgroundColor: 'white',
                }}/>
        </View>
    )
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 5,
        paddingRight: 45,
    },
    text: {
        fontSize: 20,
        color: Colors.heading,
        alignSelf: 'center',
    },
});
