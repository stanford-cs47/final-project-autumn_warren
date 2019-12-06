import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native';
import EventsListItem from './EventsListItem'
import { useState } from 'react';
import EventsData from '../../Data/EventsDataList';
import PeopleData from '../../Data/PeopleList';
import ProfileData from '../../Data/MyProfile';
import 'localstorage-polyfill';


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
    return (
      <View style={styles.container}>
        <Text style = {{fontSize: 20}}>My Events: </Text>
    <FlatList
              data={JSON.parse(localStorage.myEvents || "[]")}
              renderItem = { ({ item }) => renderEvent(EventsData.events[item])}
              keyExtractor={item => item}
              numColumns={2}
           />
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
  flex: 1,
  //width: '100%',
  flexDirection: 'column',
  },
});
