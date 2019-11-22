import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native';
import ListItem from './ListItem'
import { useState } from 'react';
import PeopleData from '../../Data/PeopleList';
import profile from '../../Data/MyProfile';
import 'localstorage-polyfill';


export default function DiscoverList (props)  {

  onProfilePressed = (username) => {
    console.log("requested:"+ username)
    props.onProfileRequested(username);
  }
  renderPerson = (person) => (
  <ListItem
      name = {person.name}
      location = {person.location}
      age= {person.age}
      bio = {person.bio}
      username = {person.username}
      schedule = {person.schedule}
      onProfilePressed={onProfilePressed}
    />
);
    return (
      <View style={styles.container}>

    <FlatList
              data={getMatchingUsers()}
              renderItem = { ({ item }) => renderPerson(PeopleData.people[item])}
              keyExtractor={item => item}
           />
      </View>
    );
  }

function getMatchingUsers() {
  console.log("PAGE LOAD, BEGIN EVALUATION");
  var initialList = [];
  for(var i = 0; i < PeopleData.users.length; i++) {
    var username = PeopleData.users[i];
    console.log("Reviewing:  " + username);
    var matches = true;
    console.log("My activities:");
    console.log(profile.activities);
    var location = localStorage.getItem("Location");
    if(location != null && location != "Any") {
        var locationMatch = false;
        for(var j = 0; j < PeopleData.people[username].locations.length; j++) {
          if(PeopleData.people[username].locations[j] == location) {
            locationMatch = true;
          }
        }
        if(!locationMatch) {
          matches = false;
        }
    }
    if(localStorage.getItem(profile.experience) == "true" && PeopleData.people[username].experience != profile.experience) {
      console.log("Experience is filtered for, and doesn't match.");
      matches = false;
    }
    for(var j = 0; j < profile.activities.length; j++) {
      if(localStorage.getItem(profile.activities[j]) == "true") {
        var activityShared = false;
        for(var k = 0; k < PeopleData.people[username].activities.length; k++) {
          if(PeopleData.people[username].activities[k] == profile.activities[j]) {
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
      initialList.push(username);
    }
    
  }
  return initialList;
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  width: '100%',
  flexDirection: 'column',
  },
});
