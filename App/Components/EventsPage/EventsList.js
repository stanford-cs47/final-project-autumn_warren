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

    <FlatList
              data={getMatchingEvents()}
              renderItem = { ({ item }) => renderEvent(EventsData.events[item])}
              keyExtractor={item => item}
              numColumns={2}
           />
      </View>
    );
  }

function getMatchingEvents() {
  console.log("PAGE LOAD, BEGIN EVALUATION");
  var initialList = [];

  var acceptableDayCodes = [];
  if(localStorage.getItem("TODAY") && localStorage.getItem("TODAY") == "true") {
    acceptableDayCodes.push(0);
  }
  if(localStorage.getItem("TOMORROW") && localStorage.getItem("TOMORROW") == "true") {
    acceptableDayCodes.push(1);
  }
  if(localStorage.getItem("THIS WEEKEND") && localStorage.getItem("THIS WEEKEND") == "true") {
    acceptableDayCodes.push(1);
    acceptableDayCodes.push(2);
  }
  if(localStorage.getItem("THIS WEEK") && localStorage.getItem("THIS WEEK") == "true") {
    for(var i = 0; i < 7; i++) {
      acceptableDayCodes.push(i);
    }
  }
  if(localStorage.getItem("NEXT WEEK") && localStorage.getItem("NEXT WEEK") == "true") {
    acceptableDayCodes.push(-1);
  }

  for(var i = 0; i < EventsData.eventIds.length; i++) {
    var eventID = EventsData.eventIds[i];
    console.log("Reviewing:  " + eventID);
    var matches = true;

    if(acceptableDayCodes.length > 0) {
      if(!acceptableDayCodes.includes(EventsData.events[eventID].dayDistance)) {
        console.log("Didn't match.");
        matches = false;
      }
    }

   
    if(localStorage.getItem("onlyShowBuddies") && localStorage.getItem("onlyShowBuddies") == "true") {
      var buddies = localStorage.buddies.split(',');  
      var hasBuddy = false;
      for(var j = 0; j < buddies.length; j++) {
        if(EventsData.events[eventID].eventAttendies.includes(PeopleData.people[buddies[j]].profilePic)) {
          hasBuddy = true;
        }
      }
      if(!hasBuddy) {
        matches = false;
      }
    }

    var distanceFilter = localStorage.getItem("distanceFilter");
    if(distanceFilter) {
      if(EventsData.events[eventID].distance > parseFloat(distanceFilter)) {
        matches = false;
      }
    }

    if(matches) {
      console.log("Added " + i);
      initialList.push(eventID);
    }
    
  }
  return initialList;
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  //width: '100%',
  flexDirection: 'column',
  },
});
