import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { material } from 'react-native-typography';
import EventsList from '../Components/EventsPage/EventsList'
import { Metrics, Colors } from '../Themes';
import { Entypo } from '@expo/vector-icons';

export default class EventsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
   const params = navigation.state.params || {};
    return {
      //title: navigation.getParam('otherParam', 'A Nested Details Screen'),
   headerTitle: (
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.header}> EVENTS </Text>
        </SafeAreaView>
      )
    };
  };
  onEventRequested = (eventId) => {
    this.props.navigation.navigate('PeopleProfile', { username: username_val });
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