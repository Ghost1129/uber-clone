import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
                <Stack.Screen name="NavigateCard"component={NavigateCard} options={{headerShown: false,}}/>
                <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{headerShown: false,}}/>
        </Stack.Navigator>
    )
}

export default MapNavigation


