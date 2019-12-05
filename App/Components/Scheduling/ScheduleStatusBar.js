import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, ActivityIndicator,Dimensions, SafeAreaView, View, Alert, TouchableOpacity, Image} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import PendingWorkout from './PendingWorkout';
import { Colors, Images } from '../../Themes';
import Modal, { ModalFooter, ModalButton, ModalContent, ModalTitle, SlideAnimation } from 'react-native-modals';
import 'localstorage-polyfill';
var {height, width} = Dimensions.get('window');


export default class ScheduleStatusBar extends React.Component {
    state = {
        buddy: this.props.username,
        pending: true,
        visible: false,
        canceled: localStorage.getItem("Workout-Canceled" + this.props.username),
        modal: true,
    }
cancelWorkout=()=> {
    this.setState({
        visible: true,
    })
}
cancel=()=> {
    this.setState({
        visible:false
    })
}
closeHeader=()=> {
    this.setState({canceled: true})
}
notVisible=()=>{
    this.setState({
visible: false
    })
}
confirm=()=> {
    localStorage.setItem("Schedule-Request" + this.state.buddy, false)
    localStorage.setItem("Workout-Canceled" + this.state.buddy, true)
    this.setState({visible: false})
    this.setState({canceled: true})
    //this.setState({modal: false})
}
    render() {
        console.log("canceled: " + this.state.canceled)
    return (
        <View style = {!this.state.canceled? styles.workoutSent: null}> 
        {!this.state.canceled?<View style = {{flex:1}}>
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
            <Text style ={styles.header}>Next Workout</Text>
            </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 30}}>
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
            messages = {this.props.messages}/>
        </View>
      </View>
      <TouchableOpacity  
        style = {{position: 'absolute', top: 10, right: 10}}
        onPress = {()=>this.cancelWorkout()}>
      <MaterialCommunityIcons
      name = "close"
      color = {Colors.orange}
      size = {20}/>
      </TouchableOpacity>
      </View>:null}
      <Modal
            width = {width * .6}
            visible={this.state.visible}
            footer = {
        <ModalFooter>
          <ModalButton
              text= 'No'
              textStyle={{color: Colors.heading, fontSize: 16}}
              onPress = {()=>this.cancel()}
            />
            <ModalButton
              text= 'Yes'
              textStyle={{color: '#ff9524', fontSize: 16}}
              onPress = {()=> this.confirm()}
            />
        </ModalFooter>
    }>
        <ModalContent style = {{justifyContent:'center', alignContent: 'center'}}>
            <Text style = {{fontSize: 20}}>Are you sure you want to cancel your workout?</Text>
        </ModalContent>
        </Modal> 
        </View>
    );
}
}

const styles = StyleSheet.create({
  workoutSent: {
    height: 95, 
    width: '100%', 
   backgroundColor: '#fcfcfc',
    position: 'absolute',
   // paddingHorizontal: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
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