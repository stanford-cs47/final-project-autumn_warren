import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics, Colors } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import buddies from '../Data/buddylist';

export default class BuddyProfileScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    const name = params.name;

    return {
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.header}>{name}</Text>
        </View>
      )
    };
  };

  state = {
    content: {},
    loading: true,
    user: {},
  }
  componentDidMount() {
    if(!this.props.navigation) return;

    const params = this.props.navigation.state.params || {};
    const name = params.name;
    const username = params.username;
    //var result = this.getBuddyData(username);
   // var name = result.name;
    //console.log(name);
   this.loadUserContent(username);
  }

  loadUserContent = async (username) => {
    var result = buddies.find( ({username}) => username === username);
    console.log(result);
    this.setState({user: result});
    console.log(this.user);
  }

  getUserContent = () => {
    const { user } = this.state;
    if (!user.id) return null;

    return (
      <View style={styles.userContainer}>
        <Text style={material.display1}>{content.name}</Text>
        <Text style={material.body1}>{user.bio || 'No Bio'}</Text>
        <Text style={material.caption}>{user.location || 'No Location'}</Text>
      </View>
    );
    }
    render() {
        const { content } = this.state;
    
        return (
          <View style={styles.container}>
    
    
          </View>
        );
      }

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.snow,
  },
  header: {
    fontSize: 24,
    color: Colors.orange,
  }
});
