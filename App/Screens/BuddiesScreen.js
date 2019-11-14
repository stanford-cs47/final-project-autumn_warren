import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { material } from 'react-native-typography';
import BuddyList from '../Components/DiscoverPage/BuddyList'
import { Metrics, Colors } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class BuddiesScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
         return {
           //title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        headerTitle: (
             <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
               <Text style={styles.header}> BUDDIES</Text>
             </SafeAreaView>
           )
         };
       };
       render() {
         return (
           <SafeAreaView style={styles.container}>
             <BuddyList buddies = {this.buddies}/>
           </SafeAreaView >
         );
       }
     }
     
     const styles = StyleSheet.create({
       container: {
         flex: 1,
         paddingVertical: 30,
       },
       header: {
         fontSize: 24,
         color: Colors.orange,
       }
     });