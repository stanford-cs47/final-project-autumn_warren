import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Linking,
  TouchableWithoutFeedback,
  Image,
  Dimensions
} from 'react-native';

// Import third-party components here
import { material } from 'react-native-typography'; //consider using this!
import { Metrics, Colors, Images } from '../Themes';

const { width, height } = Dimensions.get('window')
export default function Buddy(props) {
  /*handlePress = () => {
    Linking.openURL(props.url);
  };*/
  return ( 
    <View style = {styles.container}>
     <TouchableWithoutFeedback 
         onPress={() => handlePress()}>
      <View style = {styles.buddy}>
      <Image style = {styles.image}
        source = {Images.placeholder}/>
        <View style = {styles.info}>
          <Text style = {styles.buddyName} >Buddy Name</Text>
          <View style = {styles.subheading}>
          <Text style = {styles.location} >Location</Text>
          <Text style = {styles.age} >| Age</Text>
        </View>
        <Text style = {styles.bio} >Hi this is my bio 
          Im making this really long so I can see how it looks</Text>         
      </View>
      </View>
      </TouchableWithoutFeedback>
    </View>
  );

}
const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingHorizontal: 20,
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
    flex: 1,
    fontWeight: '300',
    fontSize: 14,
    color: '#5b5b5b',
    marginLeft: 20,
    },
    age: {
      flex: 1,
      fontWeight: '300',
      color: '#5b5b5b',
      },
    bio: {
      fontWeight: '400',
      fontSize: 14,
      color: '#5b5b5b',
      paddingHorizontal: 20,
      paddingVertical: 10,
      }
});
