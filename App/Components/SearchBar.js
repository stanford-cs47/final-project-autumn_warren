import React, { Component } from 'react'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, Dimensions, Text, Alert } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Keyboard } from 'react-native';
import { Colors } from '../Themes';

const { width, height } = Dimensions.get('window')
export default class Search extends React.Component {
  constructor(props) {
    super(props);
}
state = {
  searchText: '',
  buddy: this.props.articles
};

onChangeText = searchText => {
  this.setState( {searchText: searchText} );
  };

  getBuddies = () => {
    Keyboard.dismiss();
    Alert.alert("Coming Soon!", "Feature not implemented in this app prototype.");
  };
  render() {
    return (
      <View style = {styles.searchBar}>
      <TextInput style = {styles.bar}
          placeholder = 'Search'
          onChangeText={searchText => this.onChangeText(searchText)}
          onSubmitEditing = {() => this.getBuddies()}
          value = {this.state.searchText}/>
        <TouchableOpacity style = {styles.button}>
        <FontAwesome
            name =  "search" 
            backgroundColor= 'whitesmoke' 
            color= {Colors.orange}
            size = {20}
            onPress = {() => this.getBuddies()}
            />
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    width: width * .9,
    flexDirection: 'row',
    borderRadius: 10,
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
    marginRight: 15,
    backgroundColor: null,
  }
});