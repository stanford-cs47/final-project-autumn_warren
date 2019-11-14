import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native';
import ListItem from './ListItem'
import { useState } from 'react';
import people from '../../Data/PeopleList';


export default function DiscoverList (props)  {

  onProfilePressed = (name, username) => {
    console.log("requested:"+ username)
    props.onProfileRequested(name, username);
  }
  renderPerson = (person) => (
  <ListItem
      name = {person.name}
      location = {person.location}
      age= {person.age}
      bio = {person.bio}
      username = {person.username}
      onProfilePressed={onProfilePressed}
    />
);
    return (
      <View style={styles.container}>
        <FlatList
            data={people}
            renderItem = { ({ item }) => renderPerson(item)}
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
