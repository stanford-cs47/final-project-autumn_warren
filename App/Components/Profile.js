
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
import { Metrics, Colors, Images } from '../Themes';
import ScheduleMatchBadge from '../Components/DiscoverPage/ScheduleMatchBadge'
import ActivityList from './Profiles/ActivityList';
import Modal, { ModalFooter, ModalButton, ModalContent } from 'react-native-modals';
import {} from 'native-base';
import { Row, Button} from 'native-base';

const { width, height } = Dimensions.get('window')
export default class Profile extends React.Component {
  render() {
    console.log("activities" + this.props.content.activities)
    return ( 
        <View style = {styles.container}>
                <Image style = {styles.image} source = {Images.placeholder}/> 
                <View style = {styles.heading}>
                    <Text style = {styles.buddyName}>{this.props.content.name}</Text>
                    <Text style = {styles.age}>{this.props.content.age}</Text>
                </View>
                <View style = {styles.subheading}>
                    <Text style = {styles.location}>{this.props.content.location}</Text>
                </View>
                <Text style = {styles.bio} >{this.props.content.bio}</Text>      
                <View style = {styles.schedule}>
                  <ScheduleMatchBadge badgeText ={this.props.content.schedule} type={"Schedule Match"}></ScheduleMatchBadge> 
                  <ScheduleMatchBadge badgeText ={this.props.content.experience} type={"Experience"}></ScheduleMatchBadge>
                </View>
                <View style = {styles.body}>
                  <Text style = {styles.softHeader} >Bio</Text>
                  <Text style = {styles.bio} >{this.props.content.longBio}</Text>
                  <Text style = {styles.softHeader} >Activities</Text>
                  <ActivityList activities = {this.props.content.activities}/>
                {/* <View >
                  <ScheduleMatchIcon schedule ={this.props.schedule}></ScheduleMatchIcon>
                </View>    */}
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
  body: {
    flex: 4,
  },
  location: {
    fontWeight: '300',
    fontSize: 16,
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
    width: 200,
    height: 200,
    aspectRatio: 1,
    resizeMode: 'contain',
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
