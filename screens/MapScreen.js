import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from "@env";

const MapScreen = () => {
    return (
        <SafeAreaView>
        <View>
            <Text>This Is Map Screen</Text>
        </View>
        </SafeAreaView>
    )
}

export default MapScreen


