import React, { Component } from 'react'
import PropTypes, { nominalTypeHack } from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, SectionList, Text, Linking, Image} from 'react-native';
import profile from '../../Data/MyProfile';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors, Images } from '../../Themes';
import ActivityList from './ActivityList';
import { CheckBox, Button } from 'react-native-elements';

export default class FilterList extends React.Component  {
  state = {
      personalityChecked: false,
      experienceChecked: false,
  };
  render() {
    console.log(this.state.experienceFilter)
  return (
    <ScrollView style = {styles.container}>
      <View style = {styles.filter}>
          <Text style = {styles.header}>
              Fitness Places
          </Text>
          <Text style = {styles.info}>
              Match me with buddies at this fitness place:
          </Text>
          <Text style = {styles.info}>
              Place a location selecter here
          </Text>
      </View>
      <View style = {styles.filter}>
          <Text style = {styles.header}>
              Activity
          </Text>
          <Text style = {styles.info}>
              Show buddies who share these activities:
          </Text>
          <ActivityList 
          activity = {profile.activities}
          />
      </View>
      <View style = {styles.filter}>
        <Text style = {styles.header}>
              Other
        </Text>
        <Text style = {styles.info}>
            Show buddies who share these characteristics:
        </Text>
        <CheckBox
            title = {profile.experience}
            textStyle = {styles.checkboxText}
            containerStyle= {styles.checkbox}
            checkedColor = {Colors.heading}
            uncheckedColor = {Colors.heading}
            checked={this.state.experienceChecked}
            onPress={() => this.setState({experienceChecked: !this.state.experienceChecked})}/>
        <CheckBox
            title = {profile.personality}
            titleStyle = {styles.title}
            textStyle = {styles.checkboxText}
            containerStyle= {styles.checkbox}
            checkedColor = {Colors.heading}
            uncheckedColor = {Colors.heading}
            checked={this.state.personalityChecked}
            onPress={() => this.setState({personalityChecked: !this.state.personailtyChecked})}/>
    </View>
    </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
        flex: 1,
  },
  filter: {
        flex: 1,
        flexDirection: 'column',
  },
  header: {
        color: Colors.heading,
        fontSize: 25,
        fontWeight: '400',
        marginBottom: 15,
  },
  info: {
    color: Colors.heading,
    fontSize: 15,
    marginBottom: 20,
  },
  icon: {
    height: 50,
    width: 50,
  },
  activities: {
    flexDirection: 'row',
  }, 
  checkbox: {
    backgroundColor: null,
    borderWidth: 0,
  },
  checkboxText: {
      fontSize: 20,
      color: Colors.heading,
      alignSelf: 'center',
  },
});
