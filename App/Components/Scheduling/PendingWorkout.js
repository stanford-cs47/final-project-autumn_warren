import React, {useState, useEffect} from 'react';
import { Colors, Images } from '../../Themes';
import { StyleSheet, Text, ActivityIndicator,Dimensions, SafeAreaView, View, Alert, TouchableOpacity, Image} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Modal, { ModalFooter, ModalButton, ModalContent, ModalTitle, SlideAnimation } from 'react-native-modals';
var {height, width} = Dimensions.get('window');

export default class PendingWorkout extends React.Component {

    state = {
        added: (localStorage.getItem("Added-to-Calendar" + this.props.buddy) || false),
        accepted: localStorage.getItem("Workout-Accepted" + this.props.buddy),
        messages: this.props.messages,
        icon:  "calendar-plus",
        color: Colors.orange,
        visible: false,
    }

    componentDidMount() {
        if(this.state.added) {
            this.setState({
                icon: "calendar-check",
                color: Colors.green
            })
        }
        if(!this.state.accepted) {
            setTimeout(() => (     
                localStorage.setItem("Workout-Accepted" + this.props.buddy, true),
                this.setState((
                    {
                    accepted: !this.state.accepted }
                ))
            ), 1000)
        }
    }
    addToCalendar=()=> {
        if(!localStorage.getItem("Added-to-Calendar" + this.props.buddy)){
            this.setState({
                visible: true
            })
            localStorage.setItem("Added-to-Calendar" + this.props.buddy, true)
        }
    }
    cancel=()=> {
        this.setState({visible:false})
    }
    confirm=()=> {
        this.setState({
            visible: false
        })
        this.setState({
            icon: "calendar-check",
            color: Colors.green
    })
}
      render() {
    return (
        <View>
            <View style = {styles.activityIndicator}>
                {!this.state.accepted? <ActivityIndicator
                size = {"large"}
                color = {Colors.red}/> :
            <View style = {{alignItems:'center'}}>
                <TouchableOpacity 
                onPress= {this.addToCalendar}>
                <MaterialCommunityIcons 
                    name = {this.state.icon}
                    size = {40}
                    color = {this.state.color}/>
                </TouchableOpacity>
            </View>}
            <Text style = {styles.text}>{!this.state.accepted? "Response Pending": "Workout Confirmed"}</Text>
            </View>
            <Modal
                width = {width * .6}
                visible={this.state.visible}
                footer = {
                    <ModalFooter>
                    <ModalButton
                        text= 'Cancel'
                        textStyle={{color: Colors.heading, fontSize: 16}}
                        onPress = {()=>this.cancel()}/>
                    <ModalButton
                        text= 'Add'
                        textStyle={{color: '#ff9524', fontSize: 18}}
                        onPress = {()=> this.confirm()}/>
                    </ModalFooter>
                }>
                <ModalContent style = {{justifyContent:'center', alignItems: 'center'}}>
                    <Text style = {{fontSize: 20}}>Add to Calendar?</Text>
                </ModalContent>
            </Modal>
        </View>
    )
}
}

const styles = StyleSheet.create({
  status: {
    flex: 1, 
    justifyContent: 'flex-end', 
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  text: {
      fontSize: 14,
      fontFamily: 'Helvetica',
      color: Colors.heading,
      fontWeight: '400'
  }
})