
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
  SafeAreaView,
  Alert, 
  TouchableOpacity
} from 'react-native';
import { Tooltip} from 'react-native-elements';
import { Metrics, Colors, Images } from '../../Themes';
import Modal, { ModalFooter, ModalButton, ModalContent } from 'react-native-modals';
import {} from 'native-base';
import { Row, Button} from 'native-base';
import EventPeopleList from './EventPeopleList';
import EventsDataList from '../../Data/EventsDataList';
import ProfileData from '../../Data/MyProfile';

const { width, height } = Dimensions.get('window')
export default class Profile extends React.Component {
  state = {
    visible: false,
  }
  popUp = () => {
    this.setState({visible: true}) 
  }
  requestSentFunction = () => {
    var newState = "yes";
    var joined = localStorage.getItem(this.props.content.eventId);
    if(joined) {
      if(joined == "yes") {
        newState = "no";
      }
    }
    localStorage.setItem(this.props.content.eventId, newState);
    this.setState({visible: false}) 
    setTimeout(() => (
      this.setState({requestSent: !this.state.requestSent}) 
    ), 200);
  }
  getButtonText = () => {
    var joined = localStorage.getItem(this.props.content.eventId);
    if(joined) {
      if(joined == "yes") {
        return "Leave";
      }
    }
    return "JOIN";
  }
  getPopUpText() {
    return this.state.requestSent ? "Leave Event?": "Join Event?";
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
                {/*<View>
                <Button
                    title = 'JOIN WORKOUT'
                    // titleStyle = {styles.buttonText}
                    raised = {true}
                    // buttonStyle = {styles.applyButton}
                    // onPress = {() => this.setState({visible: true})}
                />  
                </View>*/}
                    
                <View style = {styles.body}>
                  <Text style = {styles.softHeader} >Details</Text>
                  <Text style = {styles.bio} >{this.props.content.details}</Text>
                  <Text style = {styles.softHeader} >People</Text>
                  <EventPeopleList attendiesImages = {getEventAttendees(this.props.content.eventId)}/>
                </View> 
                <TouchableOpacity style = {styles.button}
                  onPress = {()=> this.popUp()}>
                <Text style = {styles.buttonText}>{this.getButtonText()}</Text>      
                </TouchableOpacity>
                <Modal
                  visible={this.state.visible}
                  height = {.15}
                  footer ={
                    <ModalFooter>
                      <ModalButton
                        text="Cancel"
                        textStyle={styles.popUpButton}
                        onPress={() => {this.setState({visible: false})} } />
                      <ModalButton
                        text="OK"
                        textStyle={styles.popUpButton}
                        onPress={() => {this.requestSentFunction()} } />
                    </ModalFooter>
                  }>
                  <ModalContent style = {styles.content}>
                      <Text style = {styles.popup}>{this.getPopUpText()}</Text>
                  </ModalContent>
                </Modal>
            </View>
    );
  };
}

function getEventAttendees(id) {
  console.log("function call");
  var attendees = [];
  for(var i = 0; i < EventsDataList.events[id].eventAttendies.length; i++) {
    attendees.push(EventsDataList.events[id].eventAttendies[i]);
  }
  var amIAttending = localStorage.getItem(id);
  if(amIAttending) {
    if(amIAttending == "yes") {
      console.log("insertion");
      attendees.push(ProfileData.profile.profilePic);
    }
  }
  console.log("Event Attendies:");
  console.log(attendees);
  return attendees;
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
    color: 'white',
    alignSelf: 'center',
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
    fontSize: 18,
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
    fontWeight: '300',
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
    marginTop: 25,
    //paddingVertical: 5,
  },
  bio: {
    fontWeight: '400',
    fontSize: 16,
    color: '#5b5b5b',
    paddingHorizontal: 20,
    paddingVertical: 10,
    lineHeight: 25
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
  popup: {
    fontSize: 20,
  },
  popUpButton: {
    color: Colors.orange
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
  }
});
