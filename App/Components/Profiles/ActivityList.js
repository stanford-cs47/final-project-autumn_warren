import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, View, SectionList, Text, FlatList} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
import profile from '../../Data/MyProfile';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors, Images } from '../../Themes';
import ActivityItem from './ActivityItem';


export default function ActivityList (props)  {

    renderActivity = (item) => (
        console.log(item),
    <ActivityItem
        activity = {item}
      />
  );
      return (
        <View style={styles.container}>
  
      <FlatList
                data={props.activities}
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
        height: 40,
        marginHorizontal: 20,
    },
});
