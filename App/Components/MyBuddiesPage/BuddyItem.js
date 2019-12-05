import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Container, Header, Content, 
    List, ListItem, Left, Body, Right, 
    Thumbnail, Text} from 'native-base';
import { useState } from 'react';
import { Metrics, Colors, Images } from '../../Themes';
import PeopleData from '../../Data/PeopleList';


export default class BuddyItem extends React.Component {
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    profilePressed = () => {
        console.log(this.props.username)
        if (this.props.onPressed) {
          console.log("Username:"+ this.props.username);
          this.props.onPressed(this.props.username);
        }
      }
    render() {
        return (
            <View style = {styles.container}>
            <TouchableWithoutFeedback 
            onPress={() => this.profilePressed()}>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={ Images[this.props.username]} />
                  </Left>
                  <Body style = {{justifyContent: 'center'}}>
                    <Text>{this.props.name}</Text>
                    <Text note >{this.props.message} {"\n"}</Text>
                  </Body>
                  <Right>
                    <Text note >{this.props.time}</Text>
                  </Right>
        </ListItem>
        </TouchableWithoutFeedback>
        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
flex: 1,
  },
});
