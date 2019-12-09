import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native';
import BuddyItem from './BuddyItem'
import { useState } from 'react';
import MyProfile from '../../Data/MyProfile';
import PeopleData from '../../Data/PeopleList';
import 'localstorage-polyfill';


export default function DiscoverList (props)  {

  onPressed = (username) => {
    console.log("requested:"+ username)
    props.onProfileRequested(username);
  }
  renderPerson = (person) => (
    <BuddyItem
        name = {person.name}
        username = {person.username}
        time = {getLastMessageTime(person.username)}
        message = {getLastMessage(person.username)}
        onPressed={onPressed}
    />
);
    return (
    <FlatList
              data={getBuddies()}
              renderItem = { ({ item }) => renderPerson(PeopleData.people[item])}
              keyExtractor={item => item}/>
    );
  }

function getLastMessage(name) {
  var messagesString = localStorage.getItem(name);
  var messagesObject = [];
  if(messagesString) {
    messagesObject = JSON.parse(messagesString); 
  } 
  if(messagesObject.length > 0) {
    return messagesObject[0].text;
  }  
  else 
  {
    if(PeopleData.people[name].message) {
      return PeopleData.people[name].message;
    }
    else {
      return '';
    }
  }
}

function getLastMessageTime(name) {
  var messagesString = localStorage.getItem(name);
  var messagesObject = []
  if(messagesString) {
    messagesObject = JSON.parse(messagesString); 
  } 
  if(messagesObject.length > 0) {
    var date = new Date(messagesObject[0].createdAt);
    return '' + (date.getHours() % 12) + ':' + (date.getMinutes()) + ' pm';
  }  
  else 
  {
    if(PeopleData.people[name].message) {
      return '2:20 pm';
    }
    else {
      return '';
    }
  }
}

function getBuddies() {
  console.log("Buddies: " + localStorage.buddies);
  console.log(PeopleData.people[localStorage.buddies]);
  return localStorage.buddies.split(',');
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
 //width: '100%',
  //flexDirection: 'column',
  },
});
