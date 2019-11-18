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
export default class ToggleItem extends React.Component {
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
            <View style = {styles.name}>
                <Text style = {styles.text}>
                {this.props.item}</Text>
            </View>
                <SwitchToggle containerStyle={{
                    marginTop: 16,
                    width: 52,
                    height: 30,
                    borderRadius: 17,
                    backgroundColor: '#ccc',
                    padding: 1,
                }}
                switchOn={this.state.switchOn1}
                onPress={this.onPress1}
                circleColorOff='white'
                circleColorOn='white'
                backgroundColorOn={Colors.orange}
                backgroundColorOff='#e5e1e0'
                type = {1}
                circleStyle={{
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    backgroundColor: 'white',
                }}/>
       </View>
    );
    }
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingRight: 45,
        paddingVertical: 5,
    },
    toggle: {
        flex: 2,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: Colors.heading,
    },
    name: {
        flex: 5,
        justifyContent: 'flex-end',
        padding: 3,
    }
});
