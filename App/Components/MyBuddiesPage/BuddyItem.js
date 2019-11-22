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
        const { search } = this.state;
        return (
            <View style = {styles.container}>
            <TouchableWithoutFeedback 
            onPress={() => this.profilePressed()}>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={ Images[this.props.username]} />
                  </Left>
                  <Body>
                    <Text>{this.props.name}</Text>
                    <Text note numberOfLines={2}>{this.props.message}</Text>
                  </Body>
                  <Right>
                    <Text note >2:20 pm</Text>
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
  //backgroundColor:'gray'
  //width: '100%',
  //flexDirection: 'column',
  },
});
