import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  View,
  FlatList,
} from 'react-native';
import ToggleItem from './ToggleItem';
export default function ToggleList(props) {
  renderList = (activity) => (
    <ToggleItem 
    item = {activity}/>
  );
  return (
    <View style={styles.container}>
      <FlatList
          data={props.activities}
          renderItem = { ({ item }) => renderList(item)}
          keyExtractor={item => item}
      />
    </View>
  );
}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginBottom: 25,
    
      },
    });