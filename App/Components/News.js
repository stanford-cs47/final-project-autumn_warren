/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native';
import Buddy from './Buddy'
import { useState } from 'react';


export default function News(props)  {
renderArticle = (newsObject) => (
  <Buddy
    name = {newsObject.title}
    location = {newsObject.byline}
    age= {newsObject.date}
    bio = {newsObject.snippet}
    />
);
    return (
      <View style={styles.container}>
        <FlatList
            data={props.articles}
            renderItem = { ({ item }) => renderArticle(item)}
            keyExtractor={item => item.url}
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
