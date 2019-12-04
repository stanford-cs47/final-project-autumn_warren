import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native';
import EventsListItem from './EventsListItem'
import { useState } from 'react';
import EventsData from '../../Data/EventsDataList';
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
  for(var i = 0; i < EventsData.eventIds.length; i++) {
    var eventID = EventsData.eventIds[i];
    console.log("Reviewing:  " + eventID);
    var matches = true;
    console.log("My activities:");
    var location = localStorage.getItem("Location");
    if(location != null && location != "Any") {
        var locationMatch = false;
        for(var j = 0; j < EventsData.events[eventID].locations.length; j++) {
          if(EventsData.events[eventID].locations[j] == location) {
            locationMatch = true;
          }
        }
        if(!locationMatch) {
          matches = false;
        }
    }
    if(localStorage.getItem(ProfileData.profile.experience) == "true" && EventsData.events[eventID].experience != ProfileData.profile.experience) {
      console.log("Experience is filtered for, and doesn't match.");
      matches = false;
    }
    for(var j = 0; j < ProfileData.profile.activities.length; j++) {
      if(localStorage.getItem(ProfileData.profile.activities[j]) == "true") {
        var activityShared = false;
        for(var k = 0; k < EventsData.events[eventID].activities.length; k++) {
          if(EventsData.events[eventID].activities[k] == ProfileData.profile.activities[j]) {
            activityShared = true;
          }
        }
        if(!activityShared) {
          console.log("An activity is filtered for, and it doesn't match");
          matches = false;
        }     
      }
    }
    if(matches) {
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
