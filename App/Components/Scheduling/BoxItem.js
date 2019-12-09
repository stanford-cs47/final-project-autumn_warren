import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { FloatingAction } from "react-native-floating-action";
import { Metrics, Colors, Images } from '../../Themes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import 'localstorage-polyfill';

const highOverlapTimes = [8, 8.5, 9, 9.5, 10, 10.5, 12, 12.5, 13, 17, 17.5, 20, 20.5, 21, 21.5, 22, 22.5]
const highOverlapDates = [3, 10, 17, 24, 19, 27]
const lowOverlapTimes = [8, 12.5, 13, 13.5, 22, 22.5, 23, 23.5]
export default class ActivityItem extends React.Component {
    state = {
        chosen: false,
        text: this.props.index ? "" : this.props.time.time,
        overlap: false
    }
    changeColor() {
        //console.log(this.state.chosen)
        if (!this.state.chosen) {
            this.props.setTime(this.props.time, this.props.date, true, this.props.day);
          } else {
            this.props.setTime(this.props.time, this.props.date, false, this.props.day);
          }
          this.setState({chosen: !this.state.chosen})
         // localStorage.setItem(this.props.time, !this.state.chosen)
    }
    componentWillMount() {
        console.log("before " + this.props.day)
        if(highOverlapDates.includes(this.props.day) && highOverlapTimes.includes(this.props.time.num)) {
            this.setState({overlap: true})
        } else if(lowOverlapTimes.includes(this.props.time.num) && !highOverlapDates.includes(this.props.day)) {
            this.setState({overlap: true})
        }
    }
    render () {
                return (
            <View style = {styles.container}>
                <View style = {this.state.text === this.props.time.time? styles.hours : styles.none}>
                <Text style = {styles.text}>{this.state.text}</Text>
                </View>
                <TouchableOpacity
                onPress = {() => this.changeColor()}>
                    <View style = {this.state.chosen? styles.chosen: (this.state.overlap?  styles.overlap: styles.notChosen)}>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical:2,
        //marginBottom: 10,
        flexDirection: 'row',
    },
   notChosen: {
        width: 140,
        height: 40,
        backgroundColor: '#adadad',
   },
   chosen: {
        width: 140,
        height: 40,
        backgroundColor: Colors.orange,
    },
    overlap: {
        width: 140,
        height: 40,
        backgroundColor: '#FAD4C0',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Helvetica',
        color: '#3b3b3b'
    },
    hours: {
        width: 70,
        justifyContent: 'flex-start', 
        alignItems: 'center' ,
    }, 
    none: {
        width: 5,
    }
  });