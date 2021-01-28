// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PoliceLoginScreen from './PoliceLoginScreen.js';
import PoliceMainScreen from './PoliceMainScreen';
import PoliceDetailedScreen from './PoliceDetailedScreen.js';

const Stack = createStackNavigator();

function LogoTitle() {
    return <Image source={require('./Logo.jpg')} alt="Logo" style={{width: 50, height: 40, margin: 15}}/>;
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Police Login Page" component={PoliceLoginScreen} />
                <Stack.Screen name="Police Home Page" component={PoliceMainScreen} options={{ headerLeft: () => <LogoTitle />}}/>
                <Stack.Screen name="Police Detailed Page" component={PoliceDetailedScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;