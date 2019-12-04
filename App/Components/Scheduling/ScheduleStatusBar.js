import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, ActivityIndicator,Dimensions, SafeAreaView, View, Alert, TouchableOpacity, Image} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import PendingWorkout from './PendingWorkout';
import { Colors, Images } from '../../Themes';
import 'localstorage-polyfill';


export default class ScheduleStatusBar extends React.Component {
    state = {
        buddy: this.props.username,
        pending: true,
    }

    render() {
        console.log("accepted: " + this.props.accepted)
    return (
        <View style = {styles.workoutSent}> 
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
            <Text style ={styles.header}>Next Workout</Text>
            </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex:start', flexDirection: 'column'}}>
          <Text style ={styles.boldText}>
                    {localStorage.getItem("Selected-Workout-Day" + this.state.buddy)}</Text>
          <Text style ={styles.text}>{localStorage.getItem("Selected-Workout-Time" + this.state.buddy)}</Text>
          <View style = {{flex: 1, flexDirection: 'row'}}>
            <Text style ={styles.boldText}>At: </Text>
            <Text style ={styles.text}>{localStorage.getItem("ScheduleLocation" + this.state.buddy)} </Text>
          </View>
        </View>
        <View style = {{flex: 1, marginBottom: 15, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
        <PendingWorkout 
        buddy = {this.state.buddy}
        pending = {this.state.pending}
        messages = {this.props.messages}
        accepted = {this.props.accepted}/>
        </View>
      </View>
      </View>
    )
}
}

const styles = StyleSheet.create({
  workoutSent: {
    height: 95, 
    width: '100%', 
   // backgroundColor: 'rgba(230, 230, 230, 0.3)', 
   backgroundColor: '#fcfcfc',
    position: 'absolute',
    paddingHorizontal: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
   // borderRadius: 30,
    borderColor: '#ededed',
    borderBottomWidth: .7,
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: .1,
    shadowRadius: 2.32,
    elevation: 1,
  },
  boldText: {
    fontSize: 15, 
    color: Colors.heading, 
    fontWeight: 'bold', 
    lineHeight: 20,
    fontFamily: 'Helvetica'
  },
  header: {
    fontSize: 17, 
    color: '#F49733', 
    fontWeight: 'bold', 
    lineHeight: 28,
    fontFamily: 'Helvetica'
  },
  text: {
    fontSize: 15, 
    color: Colors.heading, 
    lineHeight: 20,
    fontFamily: 'Helvetica'
  }
})