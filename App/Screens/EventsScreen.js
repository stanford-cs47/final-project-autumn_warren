import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, ScrollView} from 'react-native';
import { material } from 'react-native-typography';
import EventsList from '../Components/EventsPage/EventsList'
import { Metrics, Colors, Images } from '../Themes';
import { Entypo, FontAwesome, FontAwesome5, MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import 'localstorage-polyfill'
import MyEventsList from '../Components/EventsPage/MyEventsList'
import test from '../Data/Test.js';

export default class EventsScreen extends React.Component {

  componentDidMount() {
    this.subs = [
      this.props.navigation.addListener("willFocus", () => {
        this.forceUpdate();
      }),
    ];
  }
  add=()=> {
    Alert.alert("Coming Soon!", "Feature not implemented in this app prototype.");
}
  static navigationOptions = ({ navigation }) => {
   const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity style={styles.filter}
          onPress = {() => navigation.navigate('EventFilter')}>
        <Image style= {styles.filterButton}
      source = {Images.filter}/>
    </TouchableOpacity>
      ), 
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
      <ScrollView>
        <MyEventsList onEventRequested = {this.onEventRequested}/>
        <EventsList onEventRequested = {this.onEventRequested}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
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
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.orange,
    borderColor: '#ffb361',
    position: 'absolute',
    shadowColor: 'gray',
    bottom: 20,
    right: 20,
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: .4,
    shadowRadius: 3.32,
    //elevation: 4,
    justifyContent: 'center'
  },
  filterButton: {
    height: 25,
    width: 25,
    tintColor: Colors.orange,
  },
});