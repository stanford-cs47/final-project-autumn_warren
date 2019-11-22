import ScheduleSelector from 'react-schedule-selector';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native';
import { Metrics, Colors } from '../Themes';
 
export default class SchedulingScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
       headerTitle: (
            <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.header}> Select a time</Text>
            </SafeAreaView>
          )
        };
      };
  state = { 
      schedule: [] 
    };
 
  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }
 
  render() {
    return (
      <ScheduleSelector
        selection={this.state.schedule}
        numDays={5}
        minTime={8}
       maxTime={22}
       onChange={this.handleChange}
       u

      />
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    header: {
      fontSize: 24,
      color: Colors.orange,
    }
  });