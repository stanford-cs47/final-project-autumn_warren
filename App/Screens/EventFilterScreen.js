import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native';
import Modal, { ModalFooter, ModalButton, ModalContent } from 'react-native-modals';
import { material } from 'react-native-typography';
import FilterList from '../Components/FilterPage/FilterList'
import { Metrics, Colors, Images } from '../Themes';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox, Button, Divider } from 'react-native-elements';
import Dialog, { DialogContent, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import 'localstorage-polyfill'


export default class FilterScreen extends React.Component {
  state = {
    visible: false
  };

  static navigationOptions = ({ navigation }) => {
    return {
   headerTitle: (
        <SafeAreaView style={{justifyContent: 'center', alignContent: 'center'}}>
          <Text style={styles.header}> Events Filter</Text>
        </SafeAreaView>
      )
    };
  };
  confirmFilters () {
    this.setState({visible: false});
    this.props.navigation.navigate('Events');
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <FilterList filter = {this.filter}/>  */}
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
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
    }, 
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      marginHorizontal: 20,
    },
    popup: {
      fontSize: 20,
    },
    button: {
      color: Colors.orange
    }
});
  