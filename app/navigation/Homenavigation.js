import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import MapScreen from '../screens/MapScreen'

const Homenavigation = () => {
    const Stack = createStackNavigator();
    return (
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen"component={HomeScreen} options={{headerShown: false,}}/>
                <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown: false,}}/>
            </Stack.Navigator>
    )
}

export default Homenavigation


