/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, Dimensions, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Keyboard } from 'react-native';

const { width, height } = Dimensions.get('window')
export default class Search extends React.Component {
  constructor(props) {
    super(props);
}
state = {
  searchText: '',
  articles: this.props.articles
};

onChangeText = searchText => {
  this.setState( {searchText: searchText} );
  };

  getArticles = () => {
    Keyboard.dismiss();
    var results =  this.props.loadArticles(this.state.searchText);
    this.setState({articles: results});
    this.setState({searchText: ''})
  };

  render() {
    return (
      <View style = {styles.searchBar}>
      <TextInput style = {styles.bar}
        placeholder = 'Search for News'
        onChangeText={searchText => this.onChangeText(searchText)}
        onSubmitEditing = {() => this.getArticles()}
        value = {this.state.searchText}/>
        <TouchableOpacity>
        <FontAwesome.Button
          name =  "search" 
          backgroundColor= 'whitesmoke' 
          color= 'palevioletred'
          onPress = {() => this.getArticles()}
          />
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    width: width * .9,
    flexDirection: 'row',
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  bar: {
    flex: 8,
    padding: 5,
    marginHorizontal: 10, 
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
  }
});
