import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { StatusBar } from 'react-native';

import Incidents from './pages/Incidents'
import Detail from './pages/Detail'

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content" // Here is where you change the font-color
            />
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <AppStack.Screen
                    name='Incidents'
                    component={Incidents}
                />
                <AppStack.Screen
                    name='Detail'
                    component={Detail}                    
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}