import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, View, SectionList, Text, FlatList} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
import profile from '../../Data/MyProfile';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors, Images } from '../../Themes';
import EventPeopleListItem from './EventPeopleListItem';


export default function EventPeopleList (props)  {

    renderActivity = (item, item2) => (
         console.log("person Image: ", item),
         console.log("person name: ", item2),

    <EventPeopleListItem
        person = {item}
      />
  );
      return (
        <View style={styles.container}>
  
      <FlatList
                data={props.attendies}
                renderItem = { ({ item }) => renderActivity(item)}
                keyExtractor={item => item}
                horizontal = {true}
                scrollEnabled = {false}
             />
        </View>
      );
    }
  

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal: 20,
    },
});