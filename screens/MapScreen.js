import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import RideOptionsCard from '../components/RideOptionsCard'
import NavigateCard from '../components/NavigateCard'
import NavFavourites from '../components/NavFavourites';

const MapScreen = () => {
    const Stack = createStackNavigator();
    return (
        <SafeAreaView>
        <View>
            <View style={tw`h-1/2`}>
                <Map/>
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                <Stack.Screen
                name="NavigateCard"
                component={NavigateCard}
                options={{
                    headerShown: false
                }}
                />
                <Stack.Screen
                name="RideOptionsCard"
                component={RideOptionsCard}
                options={{
                    headerShown: false
                }}
                />
                </Stack.Navigator>
                
            </View>
            <NavFavourites/>
        </View>
        </SafeAreaView>
    )
}

export default MapScreen


