import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { setDestination } from '../slices/navSlice'
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements/dist/icons/Icon'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation =useNavigation();
    return (
        <SafeAreaView classname={tw`bg-white flex-1`}>
             <Text style={tw`text-center pb-5 text-xl font-bold`}>Good morning!</Text>
            <View style={tw`border-t border-gray-100 flex-shrink relative z-20 bg-white`}>
                <View style={tw`bg-white pb-2`}>
                    <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            })
                            )
                            navigation.navigate('RideOptionsCard')
                        }}
                        minLength={2}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        onFail={error => console.error(error)}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}
                        styles={toInputBoxStyles}
                        enablePoweredByContainer={false}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    textInput: {
        fontSize: 15,
        backgroundColor: '#F4F4F4',
        borderRadius: 5,
        borderEndWidth: 1,
        borderColor: '#ddd'
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})
