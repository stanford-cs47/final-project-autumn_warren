
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
import PropTypes from 'prop-types';
import { Tooltip} from 'react-native-elements';
import { Metrics, Colors, Images } from '../../Themes';
import DiscoverListIcon from './DiscoverListIcon'
import profile from '../../Data/MyProfile';
const { width, height } = Dimensions.get('window')

export default class ListItem extends React.Component {
  profilePressed = () => {
    if (this.props.onProfilePressed) {
      console.log("Username:"+ this.props.username);
      this.props.onProfilePressed(this.props.username);
    }
  }
  render() {
    console.log(this.props.avatar)
  return ( 
    <View style = {styles.container}>
      <TouchableWithoutFeedback 
         onPress={() => this.profilePressed()}>
        <View style = {styles.person}>
          <Image style = {styles.image}
              source = {Images[this.props.avatar]}/>
          <View style = {styles.info}>
            <Text style = {styles.personName}>{this.props.name}</Text>
            <View style = {styles.subheading}>
              <Text style = {styles.location}>{this.props.location}</Text>
              <Text style = {styles.age}>, {this.props.age}</Text>
            </View>
            <View style = {styles.bioView}>
              <Text style = {styles.bio} >{this.props.bio}</Text>    
              </View> 
              <View style = {styles.schedule}>
            <DiscoverListIcon badgeText ={this.props.schedule} type={"Schedule Match"}></DiscoverListIcon> 
          </View>
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
    shadowOffset: {width: 1, height: 6},
    shadowOpacity: 0.28,
    shadowRadius: 1,
    elevation: 7,
    justifyContent: 'center',
  },
  overallText: {
    justifyContent: 'center',
  
  },
  person: {
    borderColor: 'whitesmoke',
    borderWidth: 1.5,
    //backgroundColor: '#f6b26b',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    height: height * .17,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
    image: {
    width: 110,
    height: 110,
    aspectRatio: 1,
    //resizeMode: 'contain',
    borderRadius: 10,
    alignSelf: 'center',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
  },
    personName: {
      //flex:1,
    fontWeight: '600',
    fontSize: 20,
    color: '#5b5b5b',
    marginLeft: 20,
    //fontFamily: "Gill Sans"
  },
    subheading: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
  },
  location: {
    fontWeight: '300',
    fontSize: 16,
    color: '#5b5b5b',
    //fontFamily: "Gill Sans"
  },
  age: {
    fontWeight: '300',
    color: '#5b5b5b',
    fontSize: 16,
    //fontFamily: "Gill Sans"
  },
  bioView: {
    flex: 3,
    justifyContent: 'center'
  },
  bio: {
    //fontWeight: '400',
    fontSize: 16,
    color: '#5b5b5b',
    marginLeft: 20,
    marginBottom: 8,
   // fontFamily: "Gill Sans"
  },
  schedule: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
    marginLeft: 20,
  }
});
