
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

// Import third-party components here
import { material } from 'react-native-typography'; //consider using this!
import { Metrics, Colors, Images } from '../Themes';

const { width, height } = Dimensions.get('window')
export default class Buddy extends React.Component {
  static defaultProps = { content: {} }
  componentDidMount = async () => {
    const { content = {} } = this.props;
  }

  profilePressed = () => {
    console.log(this.props.username);
    if (this.props.onProfilePressed) {
      const { content = {} } = this.props;
      const { user = {} } = content;

      this.props.onProfilePressed(this.props.name);
    }
  }
  /*handlePress = () => {
    Linking.openURL(props.url);
  };*/
  render() {
  return ( 
    <View style = {styles.container}>
      <TouchableWithoutFeedback 
         onPress={() => this.profilePressed()}>
        <View style = {styles.buddy}>
          <Image style = {styles.image}
              source = {Images.placeholder}/>
          <View style = {styles.info}>
            <Text style = {styles.buddyName}>{this.props.name}</Text>
            <View style = {styles.subheading}>
              <Text style = {styles.location}>{this.props.location}</Text>
              <Text style = {styles.age}>, {this.props.age}</Text>
            </View>
            <Text style = {styles.bio} >{this.props.bio}</Text>         
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
    paddingHorizontal: 10,
    marginBottom: 25,
    width: width,
    alignItems: 'flex-start',

  },
  buddy: {
    flex: 1,
    backgroundColor: '#f6b26b',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignContent: "flex-start",
    justifyContent: 'center',
  },
    image: {
    width: 130,
    height: 130,
    aspectRatio: 1,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
  },
    buddyName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#5b5b5b',
    marginLeft: 20,
    marginTop: 10,
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
  age: {
    fontWeight: '300',
    color: '#5b5b5b',
  },
  bio: {
    fontWeight: '400',
    fontSize: 16,
    color: '#5b5b5b',
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
});
