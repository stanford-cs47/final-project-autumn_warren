import React from 'react';
import  ScheduleSelector  from 'react-schedule-selector';
import Modal, { ModalFooter, ModalButton, ModalContent, ModalTitle, SlideAnimation } from 'react-native-modals';
import ScheduleInterface from '../Components/Scheduling/ScheduleInterface';
import { Select } from 'react-select'
import styled from 'styled-components'
import { StyleSheet, Text, ActivityIndicator,Dimensions, SafeAreaView, View, Alert, TouchableOpacity, Image} from 'react-native';
import { Metrics, Colors , Images} from '../Themes';
import { FloatingAction } from "react-native-floating-action";
import 'localstorage-polyfill';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

var {height, width} = Dimensions.get('window');

export default class SchedulingScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
       headerTitle: (
            <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.header}> Select a time</Text>
            </SafeAreaView>
          ),
          headerLeft: (
            <TouchableOpacity style={styles.filter}
            onPress = {() => navigation.navigate('Messaging', params.back(true))}>
          <Text style= {styles.text}> Back</Text>
      </TouchableOpacity>
          ),
        };
      };
      state = {
        time: [],
        date: [],
        daysList: [],
        visible: this.props.visible,
        wrong: false,
        sameDay: false
      }
     onDateRequested = (selected) => {
      selected.times.sort(function(a, b) {return a.num - b.num});
      //console.log("sorted: "  + selected.times.num)
       this.setState({time: selected.times})
      this.setState({date: selected.date})
      this.setState({daysList: selected.days})
      }
      checkDate=(curr, index, arr)=> {
        if (index === 0){
          return true;
        } else {
          console.log("arr: " + arr)
          return (curr === arr[index - 1]);
        }
      }
      confirm=() =>{
        if(this.state.time.length !== 0) {
        var max= this.state.time[(this.state.time.length - 1)]
        console.log("max: " + (this.state.time.length - 1))
        var min =this.state.time[0]; 
        var start = min.time;
        var end = max.end;
        if(!this.state.daysList.every(this.checkDate)) {
          this.setState({sameDay: true})
          console.log(this.state.DayList);
          return;
        }
  
        for(i = 0; i < this.state.time.length - 1; i++) {
          var first = this.state.time[i].num;
          var second = this.state.time[i + 1].num;
          if( second - first > .5) {
            this.setState({wrong: true})
            return;
          }
        }
        this.props.navigation.navigate('Messaging')
        this.props.navigation.state.params.confirm(true, start, end, this.state.date[0])
      }
    }
      cancel=()=> {
        this.setState({wrong: false})
        this.setState({sameDay: false})
      }
      render() {
        const params = this.props.navigation.state.params || {};
        return (
          <SafeAreaView style={styles.container}>
               <View style = {{height: 40, width: '100%', backgroundColor: 'white', position: 'absolute'}}>
                 <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
               <View style = {{justifyContent: 'center', padding: 2}}>
                <View style = {{ height: 25, width: 25, backgroundColor: '#FAD4C0'}}/>
                </View>
                <View style = {{justifyContent: 'center', padding: 2}}>
                  <Text style ={{fontSize: 14, color: Colors.heading}}>Schedule Overlap</Text>
                </View>
               </View>
                              </View>
            <ScheduleInterface 
            onDateRequested = {this.onDateRequested}
            days = {params.days}
            start = {params.start}
            end = {params.end}/>
            <TouchableOpacity style = {styles.button}
            onPress = {()=> this.confirm()}>
              <MaterialCommunityIcons 
                  name = "check"
                  size = {50}
                  color = 'white'
                  style = {{alignSelf: 'center'}}/>

            </TouchableOpacity>
            <Modal visible = {this.state.wrong}
            width= {.8}
            footer = {
              <ModalFooter>
                <ModalButton
                    text= 'OK'
                    textStyle={{color: Colors.heading, fontSize: 16}}
                    onPress = {()=> this.cancel()}
                  />
              </ModalFooter>
          }>
             <ModalContent>
             <Text style = {{fontSize: 20}}> Please choose consecutive hour blocks</Text>
             </ModalContent>
             </Modal>     
             <Modal visible = {this.state.sameDay}
            width= {.8}
footer = {
  <ModalFooter>
    <ModalButton
        text= 'OK'
        textStyle={{color: Colors.heading, fontSize: 16}}
        onPress = {()=> this.cancel()}
      />
  </ModalFooter>
}>
 <ModalContent>
 <Text style = {{fontSize: 20}}> Please choose a time block on the same day</Text>
 </ModalContent>
 </Modal>     

          </SafeAreaView >
        );
      }
    }
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      fontSize: 24,
      color: Colors.heading,
    },
    filter: {
      justifyContent: 'center',
      alignContent: 'center',
      marginRight: 15,
    },
    text: {
      fontSize: 20,
      padding: 3,
      color: Colors.orange
    },
    button: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: Colors.orange,
      borderColor: '#ffb361',
      position: 'absolute',
      shadowColor: 'gray',
      bottom: 10,
      right: 10,
      shadowOffset: {width: 1, height: 3},
      shadowOpacity: .4,
      shadowRadius: 3.32,
      elevation: 4,
      justifyContent: 'center'
    }
  });