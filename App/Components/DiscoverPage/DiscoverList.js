import React from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native';
import ListItem from './ListItem'
import PeopleData from '../../Data/PeopleList';
import ProfileData from '../../Data/MyProfile';
import 'localstorage-polyfill';


export default function DiscoverList (props)  {

  onProfilePressed = (username) => {
    props.onProfileRequested(username);
  }
  renderPerson = (person) => (
  <ListItem
      name = {person.name}
      location = {person.location}
      age= {person.age}
      bio = {person.bio}
      username = {person.username}
      schedule = {person.schedule}
      avatar = {person.profileAvatar}
      onProfilePressed={onProfilePressed}
    />
);
    return (
      <View style={styles.container}>

    <FlatList
              data={getMatchingUsers()}
              renderItem = { ({ item }) => renderPerson(PeopleData.people[item])}
              keyExtractor={item => item}
           />
      </View>
    );
  }

function getMatchingUsers() {
  var initialList = [];
  for(var i = 0; i < PeopleData.users.length; i++) {
    var username = PeopleData.users[i];
    var matches = true;
    var location = localStorage.getItem("Location");
    if(username == "bobc") {
      matches = false;
      continue;
    }
    if(localStorage.buddies.includes(username)) {
      matches = false;
    }
    if(location != null && location != "Any") {
        var locationMatch = false;
        for(var j = 0; j < PeopleData.people[username].locations.length; j++) {
          if(PeopleData.people[username].locations[j] == location) {
            locationMatch = true;
          }
        }
        if(!locationMatch) {
          matches = false;
        }
    }
    if(localStorage.getItem(ProfileData.profile.experience) == "true" && PeopleData.people[username].experience != ProfileData.profile.experience) {
      matches = false;
    }
    for(var j = 0; j < ProfileData.profile.activities.length; j++) {
      if(localStorage.getItem(ProfileData.profile.activities[j]) == "true") {
        var activityShared = false;
        for(var k = 0; k < PeopleData.people[username].activities.length; k++) {
          if(PeopleData.people[username].activities[k] == ProfileData.profile.activities[j]) {
            activityShared = true;
          }
        }
        if(!activityShared) {
          matches = false;
        }
        
      }
    }
    if(matches) {
      initialList.push(username);
    }
    
  }
  return initialList;
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  width: '100%',
  flexDirection: 'column',
  },
});
