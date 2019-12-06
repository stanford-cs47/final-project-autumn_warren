import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  AsyncStorage,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Tooltip} from 'react-native-elements';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Metrics, Colors, Images } from '../Themes';
import ScheduleMatchBadge from './DiscoverPage/ScheduleMatchBadge';
import ExperienceMatchBadge from './DiscoverPage/ExperienceMatchBadge';
import ActivityList from './Profiles/ActivityList';
import Modal, { ModalFooter, ModalButton, ModalContent } from 'react-native-modals';
import {} from 'native-base';
import { Row, Button} from 'native-base';
import { isThisISOWeek } from 'date-fns';

const { width, height } = Dimensions.get('window')
export default class Profile extends React.Component {
  state = {
    visible: false,
    requestSent: false,
    pending: false,
    unmatch: false,
  }
  match = () => {
    if(!this.state.requestSent) {
    this.setState({visible: true}) 
  }
}
  requestSentFunction = () => {
    this.setState({visible: false}) 
    if (!this.state.unmatch) {
      this.setState({pending: true})
      setTimeout(() => (
        this.setState({requestSent: !this.state.requestSent}), 
        this.setState({unmatch: !this.state.unmatch}),
        this.setState({pending: false}),
        localStorage.buddies = localStorage.buddies + "," + this.props.content.username
      ), 600);
    } else {
      setTimeout(() => (
        this.setState({requestSent: !this.state.requestSent}),
        this.setState({unmatch: !this.state.unmatch})
      ), 200);

        // TODO: need to implemnt removal of item from local storage here
    }
  }
  getButtonText = () => {
    if (this.state.pending) {
      return "Pending";
    }
    return this.state.requestSent ? "Unmatch": "MATCH";
  }
  getPopUpText() {
    return this.state.requestSent ? "Unmatch with buddy?": "Match with buddy?";
  }
  render() {
    return ( 
        <View style = {styles.container}>
                  <ScrollView>
                <Image style = {styles.image} source = {Images[this.props.content.profilePic]}/> 
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
                  </View>
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
                <TouchableOpacity style = {styles.button}
                  onPress = {()=> this.match()}>
                  {!this.state.requestSent?<Text style = {styles.buttonText}>{this.getButtonText()}</Text>:
                                   <MaterialCommunityIcons 
                                       name = "check"
                                       size = {50}
                                       color = 'white'
                                       style = {{alignSelf: 'center'}}/>}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    //marginBottom: 25,
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
  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
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
