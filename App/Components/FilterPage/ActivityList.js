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
  FlatList,
} from 'react-native';
import ActivityItem from './ActivityItem';
import { material } from 'react-native-typography';
import { Metrics, Colors, Images } from '../../Themes';

const { width, height } = Dimensions.get('window')
export default function ActivityList(props) {
  renderActivity = (activity) => (
    <ActivityItem 
    name = {activity}/>
  );
  return (
    <View style={styles.container}>
      <FlatList
          data={props.activity}
          renderItem = { ({ item }) => renderActivity(item)}
          keyExtractor={item => item}
      />
    </View>
  );
}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginBottom: 25,
        alignItems: 'flex-start',
    
      },
    });