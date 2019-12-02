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
        message = {person.message}
        onPressed={onPressed}
    />
);
    return (
      <View style={styles.container}>

    <FlatList
              data={getBuddies()}
              renderItem = { ({ item }) => renderPerson(PeopleData.people[item])}
              keyExtractor={item => item}
           />
      </View>
    );
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
