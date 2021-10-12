import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from "../slices/navSlice"
import NavFavourites from '../components/NavFavourites';


const HomeScreen = () => {
    const dispatch = useDispatch()
    

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image
            style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
            }}
            source={{uri:"https://links.papareact.com/gzs"}}/>
            <GooglePlacesAutocomplete
            placeholder="Where From?"
            styles={{
                container:{
                    flex:0,
                },
                textInput:{
                    fontSize:18,
                },
                
                
            }}
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language:'en',
            }}
            onPress={(data,details=null)=>{
                dispatch(setOrigin({
                    location: details.geometry.location,
                    description: data.description,
                }))
                dispatch(setDestination(null))

            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            minLength={2}
            returnKeyType={"search"}
            fetchDetails={true}
            debounce={400}
            enablePoweredByContainer={false}
            onFail={error => console.error(error)}
            
            
            />
            <NavOptions/>
            <NavFavourites/>
        </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
