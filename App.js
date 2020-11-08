import * as React from 'react';
import 'react-native-gesture-handler';

import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Splash from './src/views/screens/Splash';
import LoginScreen from './src/views/screens/Login';
import RegisterScreen from './src/views/screens/Register';
import AddressScreen from './src/views/screens/Address';
import HomeScreen from './src/views/screens/Home';
import OrderScreen from './src/views/screens/Order';
import ProfileScreen from './src/views/screens/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{showLabel: false, style: {height: 60}}}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused, size}) => (
            <Image
              source={
                focused
                  ? require('./src/assets/icons/ic_home.png')
                  : require('./src/assets/icons/ic_home_normal.png')
              }
              style={{
                width: 36,
                height: 36,
              }}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Order"
        options={{
          tabBarIcon: ({focused, size}) => (
            <Image
              source={
                focused
                  ? require('./src/assets/icons/ic_order.png')
                  : require('./src/assets/icons/ic_order_normal.png')
              }
              style={{
                width: 36,
                height: 36,
              }}
            />
          ),
        }}
        component={OrderScreen}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Image
              source={
                focused
                  ? require('./src/assets/icons/ic_profile.png')
                  : require('./src/assets/icons/ic_profile_normal.png')
              }
              style={{
                width: 36,
                height: 36,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Address"
          component={AddressScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={MainApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
