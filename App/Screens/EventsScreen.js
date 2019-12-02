import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { material } from 'react-native-typography';
import EventsList from '../Components/EventsPage/EventsList'
import { Metrics, Colors, Images } from '../Themes';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import 'localstorage-polyfill'
import test from '../Data/Test.js';

export default class EventsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
   const params = navigation.state.params || {};
    return {
<<<<<<< HEAD
=======
      headerRight: (
        <TouchableOpacity style={styles.filter}
          onPress = {() => navigation.navigate('EventFilter')}>
        <Image style= {styles.filterButton}
      source = {Images.filter}/>
    </TouchableOpacity>
      ), 
>>>>>>> c134c07dc9a7c480b00f381b160b57e17c46c500
   headerTitle: (
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.header}> EVENTS </Text>
        </SafeAreaView>
      )
    };
  };
  onEventRequested = (eventId) => {
    this.props.navigation.navigate('SingleEvent', { eventId: eventId });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <EventsList onEventRequested = {this.onEventRequested}/>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  header: {
    fontSize: 24,
    color: Colors.orange,
    fontWeight:'bold',
    //fontFamily: "Gill Sans"
  },
  filter: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 15,
  },
  filterButton: {
    height: 25,
    width: 25,
    tintColor: Colors.orange,
  },
});