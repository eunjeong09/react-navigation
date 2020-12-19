import {createAppContainer} from 'react-navigation';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen';
import SettingScreen from './SettingScreen';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home', 
        // tabBarIcon: ({ focused, tintColor }) => (
        //   <Icon focused={focused} name="home" size={25} color={ tintColor }/>
        // )
      }
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        tabBarLabel: 'Calendar', 
        // tabBarIcon: ({ focused, tintColor }) => (
        //   <Icon focused={focused} name="calendar" size={25} color={ tintColor }/>
        // )
      }
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarLabel: 'Setting', 
        // tabBarIcon: ({ focused, tintColor }) => (
        //   <Icon focused={focused} name="cog" size={25} color={ tintColor }/>
        // )
      }
    },
  },
  {
    tabBarOptions: {
        // activeTintColor: 'green', 
        inactiveTintColor: 'grey'
    }
  }
);

export default createAppContainer(TabNavigator);
