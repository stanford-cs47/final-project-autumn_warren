import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native';
import Buddy from './Buddy'
import { useState } from 'react';
import buddies from '../Data/buddylist';


export default function BuddyList(props)  {

    onProfilePressed = (name, username) => {
      console.log("requested:"+ username)
      props.onProfileRequested(name, username);
    }
 // }
renderBuddy = (buddyObject) => (
  <Buddy
    name = {buddyObject.name}
    location = {buddyObject.location}
    age= {buddyObject.age}
    bio = {buddyObject.bio}
    username = {buddyObject.username}
    onProfilePressed={onProfilePressed}
    />
);
    return (
      <View style={styles.container}>
        <FlatList
            data={buddies}
            renderItem = { ({ item }) => renderBuddy(item)}
            keyExtractor={item => item.username}
          />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
  flex: 1,
  width: '100%',
  flexDirection: 'column',
  },
});
