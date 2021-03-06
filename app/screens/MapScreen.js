import React from 'react'
import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import MapNavigation from '../navigation/MapNavigation';

const MapScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
            onPress={()=> navigation.navigate("HomeScreen")}
             style={tw`bg-gray-200 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
                <Icon name="menu"/>
            </TouchableOpacity>
            <View style={tw`h-1/2`}>
                <Map/>
            </View>
            <View style={tw`h-1/2`}>
                <MapNavigation/>
            </View>
        </View>
    )
}

export default MapScreen


