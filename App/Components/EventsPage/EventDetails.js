
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import { Tooltip} from 'react-native-elements';
import { Metrics, Colors, Images } from '../../Themes';
import Modal, { ModalFooter, ModalButton, ModalContent } from 'react-native-modals';
import {} from 'native-base';
import { Row, Button} from 'native-base';

const { width, height } = Dimensions.get('window')
export default class Profile extends React.Component {
    joinWorkout () {
        this.setState({visible: false});
        this.props.navigation.navigate('Discover');
        return (
    <Button
        title = 'APPLY'
        titleStyle = {styles.buttonText}
        raised = {true}
        buttonStyle = {styles.applyButton}
        onPress = {() => this.setState({visible: true})}
    />
        )
      }
  render() {
    return ( 
        <View style = {styles.container}>
                <Image style = {styles.image} source = {Images[this.props.content.eventImage]}/> 

                <View style = {styles.heading}>
                    <Text style = {styles.eventTime}>{this.props.content.time}</Text>
                    <Text style = {styles.buddyName}>{this.props.content.name}</Text>
                </View>
                <View style = {styles.subheading}>
                    <Text style = {styles.location}>{this.props.content.location}</Text>
                </View>
                <View>
                <Button
                    title = 'JOIN WORKOUT'
                    // titleStyle = {styles.buttonText}
                    raised = {true}
                    // buttonStyle = {styles.applyButton}
                    onPress = {() => this.setState({visible: true})}
                />  
                </View>
                    
                <View style = {styles.body}>
                  <Text style = {styles.softHeader} >Details</Text>
                  <Text style = {styles.bio} >{this.props.content.details}</Text>
                  <Text style = {styles.softHeader} >People</Text>
                  {/* <ActivityList activities = {this.props.content.eventAttendies}/> */}
                </View> 
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
  applyButton: {
    backgroundColor: Colors.orange,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  }, 
  heading: {
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 30,
  },
    buddyName: {
    fontWeight: '600',
    fontSize: 36,
    color: '#5b5b5b',
  },
  eventTime: {
    fontWeight: '800',
    fontSize: 24,
    color: Colors.orange,
  },
    subheading: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  body: {
    flex: 4,
  },
  location: {
    fontWeight: '600',
    fontSize: 18,
    color: '#5b5b5b',
    marginLeft: 20,
  },
  matchExperience: {
    fontWeight: '400',
    fontSize: 16,
    color: '#5b5b5b',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  softHeader: {
    fontWeight: '500',
    fontSize: 25,
    color: '#5b5b5b',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bio: {
    fontWeight: '400',
    fontSize: 16,
    color: '#5b5b5b',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: 210,
    // aspectRatio: 1,
    // resizeMode: 'contain',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  schedule: {
    flex: 1,
    marginLeft: 20,
    marginTop: 5,
  }
});