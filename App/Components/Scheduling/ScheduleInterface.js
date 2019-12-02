import React, {useState, useEffect} from 'react';
import schedule from '../../Data/ScheduleDates';
import {
  StyleSheet,
  Button,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions
} from 'react-native';
import WeekView from './WeekView';
var {height, width} = Dimensions.get('window');

export default class ScheduleInterface extends React.Component{

    render() {
        const data = [];
        if(this.props.days === 0) {
            data.push({title: (this.props.start.month() + 1) + "/" + this.props.start.date(), data: schedule.day});
        } else {
        for(i = 0; i < this.props.days; i++) {
            data.push({title: (this.props.start.month() + 1) + "/" + (this.props.start.date() + i), data: schedule.day});
        }
    }
    return (
    <View style={styles.container}>
            <ScrollView>
        <WeekView
            days = {this.props.days}
            data = {data}
            start = {this.props.start}
            end = {this.props.end}
            onDateRequested = {this.props.onDateRequested}/>
            </ScrollView>
    </View>
  );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        flexDirection: 'row'
        //width:width,
    },
});