import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native';
import BuddyItem from './BuddyItem'
import { useState } from 'react';
import MyProfile from '../../Data/MyProfile';


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
              data={MyProfile.buddyUsernames}
              renderItem = { ({ item }) => renderPerson(MyProfile.buddies[item])}
              keyExtractor={item => item}
           />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
  flex: 1,
 //width: '100%',
  //flexDirection: 'column',
  },
});
