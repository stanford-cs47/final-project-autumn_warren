import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  SectionList, 
  Text
} from 'react-native';
import BoxItem from './BoxItem';
import { Divider } from 'react-native-elements';
import { FloatingAction } from "react-native-floating-action";
var {height, width} = Dimensions.get('window');

export default class ScheduleInterface extends React.Component {
    state = {
        times: [], 
        date: [],
        daysList: []
    }
    renderList = (day, index)=> {
        return (
            <View style = {{flex:1, alignItems: 'flex-end'}}>
                <View style = {{width: 140, alignItems: 'center', marginBottom: 5}}>
            <Text style = {{fontSize: 20, fontFamily: 'Helvetica', color: '#4a4a4a'}}>{(this.props.start.month() + 1)}/{this.props.start.date() + index}</Text>
            </View>
        <FlatList
            data={day.data}
            scrollEnabled = {false}
            extraData={this.state}
            renderItem = { ({item}) => (
            <BoxItem 
                time= {item}
                setTime = {this.setTime}
                index = {index}
                date = {this.props.start}
                day = {this.props.start.date() + index}
            />)}
            keyExtractor={item => item.time}
            ItemSeparatorComponent = { this.FlatListItemSeparator }
    />
    </View>
        )
    }
      setTime=(time, date, chosen, index) =>{
  // var selected = undefined;
          if(chosen) {
                this.state.times.push(time)
                //console.log(this.state.date)
                this.state.date.push(date)
                this.state.daysList.push(index)
                var selected = {times: this.state.times, date: this.state.date, days: this.state.daysList}
                this.props.onDateRequested(selected)  
                console.log("selected: " + selected) 
          } else {
                const result = this.state.times.filter(item => item !== time)
                const dates = this.state.daysList.filter(item => item !== index)
                console.log("dates: " + dates)
                var selected = {times: result, date: this.state.date, days: dates}
                this.setState({times: result, date: this.state.date, daysList: dates})
                this.props.onDateRequested(selected)  
          }
          //console.log(this.state) 
      }
      FlatListItemSeparator=() =>{
          return (
            <Divider style={{ backgroundColor: '#a3a3a3' }} />
          );
      }
    render() {
        const times = [];
        return (
            <View style={styles.container}>
                   <FlatList
                    horizontal={true}
                    data={this.props.data}
                    renderItem = { ({ item, index }) => this.renderList(item, index)}
                    keyExtractor={( item, index ) => item + index}
                    extraData = {this.state}
                    ItemSeparatorComponent = { this.FlatListItemSeparator }/>
                </View>
    );
     }
}
    const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    header: {
        fontSize: 15,
    }
    });