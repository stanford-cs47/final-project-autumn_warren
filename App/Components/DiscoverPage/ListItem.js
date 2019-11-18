
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
import { Tooltip} from 'react-native-elements';
import { Metrics, Colors, Images } from '../../Themes';
import ScheduleMatchIcon from './ScheduleMatchIcon'

const { width, height } = Dimensions.get('window')
export default class ListItem extends React.Component {
  profilePressed = () => {
    if (this.props.onProfilePressed) {
      console.log("Username:"+ this.props.username);
      this.props.onProfilePressed(this.props.username);
    }
  }
  render() {
  return ( 
    <View style = {styles.container}>
      <TouchableWithoutFeedback 
         onPress={() => this.profilePressed()}>
        <View style = {styles.person}>
          <Image style = {styles.image}
              source = {Images.placeholder}/>
          <View style = {styles.info}>
            <Text style = {styles.personName}>{this.props.name}</Text>
            <View style = {styles.subheading}>
              <Text style = {styles.location}>{this.props.location}</Text>
              <Text style = {styles.age}>, {this.props.age}</Text>
            </View>
            <View style = {styles.bioBox}>
              <Text style = {styles.bio} >{this.props.bio}</Text>        
            </View> 
          </View>
          <View >
            <ScheduleMatchIcon schedule ={this.props.schedule}></ScheduleMatchIcon>
            </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 25,
    width: width,
    alignItems: 'flex-start',
    shadowColor: 'gray',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.22,
    shadowRadius: 2.32,
    elevation: 4,
  },
  person: {
    backgroundColor: '#f6b26b',
    borderRadius: 10,
    width: '100%',
    height: height * .17,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
    image: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    resizeMode: 'contain',
    borderRadius: 10,
    alignSelf: 'center',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
  },
    personName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#5b5b5b',
    marginLeft: 20,
    marginTop: 10,
  },
    subheading: {
    flexDirection: 'row',
    //paddingVertical: 5,
  },
  location: {
    fontWeight: '300',
    fontSize: 16,
    color: '#5b5b5b',
    marginLeft: 20,
  },
  age: {
    fontWeight: '300',
    color: '#5b5b5b',
  },
  bioBox: {
    width : 215,
  },
  bio: {
    fontWeight: '400',
    fontSize: 16,
    color: '#5b5b5b',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
