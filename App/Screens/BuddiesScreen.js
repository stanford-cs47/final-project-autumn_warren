import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { material } from 'react-native-typography';
import MyBuddiesList from '../Components/MyBuddiesPage/MyBuddiesList'
import { Metrics, Colors } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import SearchBar from '../Components/SearchBar'
import { FontAwesome } from '@expo/vector-icons';

export default class BuddiesScreen extends React.Component {
    componentDidMount() {
      this.subs = [
        this.props.navigation.addListener("willFocus", () => {
          this.forceUpdate();
        }),
      ];
    }

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
         return {
          headerRight: (
            <SafeAreaView style={styles.newMessage}>
              <Entypo name="new-message"
              size={25}
              color={Colors.orange} />
              </SafeAreaView>
          ), 
        headerTitle: (
             <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
               <Text style={styles.header}> BUDDIES</Text>
             </SafeAreaView>
           )
         };
       };
       onProfileRequested = (username_val) => {
        console.log("Requested: " + username_val);
        this.props.navigation.navigate('Messaging', { username: username_val });
      }
      loadResults = (text) => {
      }
      render() {
        return (
          <SafeAreaView style={styles.container}>
            <View style = {styles.search}>
                <SearchBar loadResults = {this.loadResults}/>
                </View>
            <MyBuddiesList onProfileRequested = {this.onProfileRequested}/>
          </SafeAreaView >
        );
      }
     }
     
     const styles = StyleSheet.create({
       container: {
         flex: 1,
         //marginTop: 30,
       },
       search: {
         padding: 20,
        alignItems: 'center'
       },
       header: {
         fontSize: 24,
         color: Colors.orange,
       }, 
       newMessage: {
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: 15,
       },
     });