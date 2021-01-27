// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PoliceMainScreen from './PoliceMainScreen';
import PoliceDetailedScreen from './PoliceDetailedScreen.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Police Home Page" component={PoliceMainScreen} />
        <Stack.Screen name="Police Detailed Page" component={PoliceDetailedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;