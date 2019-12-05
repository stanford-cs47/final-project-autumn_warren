
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  AsyncStorage,
  ScrollView,
  SafeAreaView,
  Alert, 
  TouchableOpacity
} from 'react-native';
import { Tooltip} from 'react-native-elements';
import { Metrics, Colors, Images } from '../Themes';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import ExperienceMatchBadge from './DiscoverPage/ExperienceMatchBadge';
import ActivityList from './Profiles/ActivityList';
import Modal, { ModalFooter, ModalButton, ModalContent } from 'react-native-modals';

const { width, height } = Dimensions.get('window')
export default class Profile extends React.Component {
  render() {
    console.log("activities" + this.props.content.activities)
    return ( 
        <View style = {styles.container}>
                  <ScrollView>
                <Image style = {styles.image} source = {Images[this.props.content.profilePic]}/> 
                <View style = {{flex: 1, justifyContent: 'center', paddingHorizontal: 20, marginTop: 30, alignItems: 'flex-start', flexDirection:'row'}}>
                    <View style = {{flex: 4}}>
                    <Text style = {styles.buddyName}>{this.props.content.name}</Text>
                    </View>
                    <View style = {{flex: 1, alignItems: 'flex-end'}}>
                    <Text style = {styles.age}>{this.props.content.age}</Text>
                    </View>
                </View>
                <View style = {styles.subheading}>
                    <Text style = {styles.location}>{this.props.content.location}</Text>
                </View>
                <Text style = {styles.bio} >{this.props.content.bio}</Text>      
                  <View style = {styles.schedule}>
                  <ExperienceMatchBadge badgeText ={this.props.content.experience} type={"Experience"}></ExperienceMatchBadge>
                </View>
                <View style = {styles.body}>
                  <Text style = {styles.softHeader} >Bio</Text>
                  <Text style = {styles.bio} >{this.props.content.longBio}</Text>
                  <Text style = {styles.softHeader} >Activities</Text>
                  <ActivityList activities = {this.props.content.activities}/>
                </View> 
                </ScrollView>
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
    buddyName: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#5b5b5b',
  },
  age: {
    fontWeight: 'bold',
    color: '#5b5b5b',
    fontSize: 30,
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
    paddingVertical: 15,
  },
  softHeader: {
    fontWeight: '500',
    fontSize: 25,
    color: '#5b5b5b',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  bio: {
    fontWeight: '400',
    fontSize: 16,
    color: '#5b5b5b',
    paddingHorizontal: 20,
    paddingBottom: 20,
    lineHeight: 25,
  },
  image: {
    width: 200,
    height: 200,
    aspectRatio: 1,
    // resizeMode: 'contain',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  schedule: {
    flex: 1,
    marginLeft: 20,
    paddingVertical: 5,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.orange,
    borderColor: '#8bad95',
    position: 'absolute',
    shadowColor: 'gray',
    bottom: 10,
    right: 10,
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: .7,
    shadowRadius: 4.32,
    elevation: 7,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  }, 
});
