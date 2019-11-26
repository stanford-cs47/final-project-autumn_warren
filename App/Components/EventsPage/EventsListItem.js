
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
import DiscoverListIcon from '../DiscoverPage/DiscoverListIcon'
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
    // image, Event Name, Location, Time
  return ( 
    <View style = {styles.container}>
      <TouchableWithoutFeedback 
         onPress={() => this.profilePressed()}>
        <View style = {styles.eventCard}>
          <Image style = {styles.image}
              source = {Images[this.props.avatar]}/>
          <View style = {styles.info}>
            <Text style = {styles.eventTime}>Sat, Nov 2 - 8pm</Text>
            <Text style = {styles.eventName}>Trail Run</Text>
            <Text style = {styles.location}>The Dish</Text>
            
            <View style = {styles.schedule}>
            {/* <DiscoverListIcon badgeText ={this.props.schedule} type={"Schedule Match"}></DiscoverListIcon>  */}
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
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.22,
    shadowRadius: 1,
    elevation: 6,
    // justifyContent: 'center',
  },
  eventCard: {
    borderColor: 'whitesmoke',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    height: height * .21,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
    image: {
    width: 150,
    height: 100,
    alignSelf: 'center',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
  },
    eventName: {
    fontWeight: '600',
    fontSize: 20,
    color: '#5b5b5b',
  },
  location: {
    fontWeight: '300',
    fontSize: 16,
    color: '#5b5b5b',
  },
  eventTime: {
    fontWeight: '800',
    fontSize: 13,
    color: Colors.orange,
  },
});
