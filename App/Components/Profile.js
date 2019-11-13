
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Linking,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  AsyncStorage,
} from 'react-native';

const { width, height } = Dimensions.get('window')
export default class Profile extends React.Component {
  render() {
    return ( 
        <View style = {styles.container}>
                <View style = {styles.heading}>
                    <Text style = {styles.buddyName}>{this.props.content.name}</Text>
                    <Text style = {styles.age}>{this.props.content.age}</Text>
                </View>
                <View style = {styles.subheading}>
                    <Text style = {styles.location}>{this.props.content.location}</Text>
                </View>
                <Text style = {styles.bio} >{this.props.content.bio}</Text>         
            </View>
    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 25,
    width: width,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  heading: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 30,
  },
    buddyName: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#5b5b5b',
  },
  age: {
      flex: 1,
    fontWeight: 'bold',
    color: '#5b5b5b',
    fontSize: 30,
    alignSelf: 'flex-end',
  },
    subheading: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  location: {
    fontWeight: '300',
    fontSize: 16,
    color: '#5b5b5b',
    marginLeft: 20,
  },
  bio: {
    fontWeight: '400',
    fontSize: 16,
    color: '#5b5b5b',
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
});
