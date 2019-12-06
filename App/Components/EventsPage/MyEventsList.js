import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native';
import EventsListItem from './EventsListItem'
import { useState } from 'react';
import EventsData from '../../Data/EventsDataList';
import PeopleData from '../../Data/PeopleList';
import ProfileData from '../../Data/MyProfile';
import { Divider } from 'react-native-elements';

import 'localstorage-polyfill';
import { Colors } from '../../Themes';


export default function EventsList (props)  {
  onEventPressed = (eventId) => {
    // console.log("Event requested:"+ eventId)
    props.onEventRequested(eventId);
  }
  renderEvent = (event) => (
  <EventsListItem
      name = {event.name}
      location = {event.location}
      time = {event.time}
      eventId = {event.eventId}
      eventImage = {event.eventImage}
      onEventPressed={onEventPressed}
    />
);
const events = JSON.parse(localStorage.myEvents || "[]");
    return (
      (events.length > 0)?<View style={styles.container}>
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
        <Text style = {styles.myEvents}>My Events </Text>
        </View>
    <FlatList
              data={JSON.parse(localStorage.myEvents || "[]")}
              renderItem = { ({ item }) => renderEvent(EventsData.events[item])}
              keyExtractor={item => item}
              numColumns={2}
           />
           <Divider style={{ backgroundColor: "#d1d1d1", height: 1}} />
      </View>:null
    );
}


const styles = StyleSheet.create({
  container: {
  flex: 1,
  paddingBottom: 5,
  //width: '100%',
  flexDirection: 'column',
  },
  myEvents: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    color: Colors.heading,
    fontWeight: 'bold'

  }
});
