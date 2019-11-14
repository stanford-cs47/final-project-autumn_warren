import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { material } from 'react-native-typography';
import FilterList from '../Components/FilterPage/FilterList'
import { Metrics, Colors, Images } from '../Themes';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox, Button } from 'react-native-elements';

export default class FilterScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
   headerTitle: (
        <SafeAreaView style={{justifyContent: 'center', alignContent: 'center'}}>
          <Text style={styles.header}> Filter</Text>
        </SafeAreaView>
      )
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <FilterList filter = {this.filter}/>
        <Button
          title = 'APPLY'
          titleStyle = {styles.buttonText}
          raised = {true}
          buttonStyle = {styles.applyButton}
        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.orange,
  },
  filter: {
    height: 20,
    width: 20,
  },
  applyButton: {
    backgroundColor: Colors.orange,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    }
});
  