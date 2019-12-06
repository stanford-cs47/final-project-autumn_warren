
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
export default class EventsListItem extends React.Component {
  eventPressed = () => {
    if (this.props.onEventPressed) {
      this.props.onEventPressed(this.props.eventId);
    }
  }
  render() {
  return ( 
    <View style = {styles.container}>
      <TouchableWithoutFeedback 
         onPress={() => this.eventPressed()}>
        <View style = {styles.eventCard}>
          <Image style = {styles.image}
              source = {Images[this.props.eventImage]}/>
          <View style = {styles.info}>
            <Text style = {styles.eventTime}>{this.props.time}</Text>
            <Text style = {styles.eventName}>{this.props.name}</Text>
            <Text style = {styles.location}>{this.props.location}</Text>
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
    //width: width,
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
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    //width: width * .3,
    height: height * .22,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'column',
    justifyContent: 'center',
  },
    image: {
    width: 140,
    height: 100,
    alignSelf: 'center',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    //padding: 5,
    marginTop: 10,
  },
    eventName: {
    fontWeight: '600',
    fontSize: 20,
    color: '#5b5b5b',
  },
  location: {
    fontWeight: '300',
    fontSize: 14,
    color: '#5b5b5b',
  },
  eventTime: {
    fontWeight: '800',
    fontSize: 13,
    color: Colors.orange,
  },
});
