import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, ActivityIndicator,Dimensions, SafeAreaView, View, Alert, TouchableOpacity, Image} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


export default class PendingWorkout extends React.Component {
    state = {
        pending: this.props.pending
    }

    componentWillMount() {
        setTimeout(() => (
            this.setState((
              { pending: !this.state.pending }
            ))
          ), 3000);
    }
      render() {
       // {this.activityRender}
    return (
    <View style = {styles.activityIndicator}>
    {this.state.pending? <ActivityIndicator
    size = {"large"}/> : null}
    </View>
    )
}
}

const styles = StyleSheet.create({
none: {
    height: 0,
    width: 0
  },
  activityIndicator: {
    flex: 1, 
    justifyContent: 'flex-end', 
    alignItems: 'flex-end'
  }
})