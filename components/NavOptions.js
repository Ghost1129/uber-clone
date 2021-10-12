import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import "react-native-google-places-autocomplete";
import {GOOGLE_MAPS_APIKEY} from "@env";
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';


const data = [
    {
        id:12,
        title: 'Get A Ride',
        image: "https://links.papareact.com/3pn",
        screen:'MapScreen',
    },
    {
        id:21,
        title: 'Get Food',
        image: "https://links.papareact.com/28w",
        screen:'EatsScreen',
    },
];

const NavOptions = () => {
    const origin = useSelector(selectOrigin);
    const navigation =useNavigation();
    return (
        <FlatList
        data ={data}
        horizontal
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>(
            <TouchableOpacity
            disabled={!origin}
            onPress={()=>navigation.navigate(item.screen)}
             style={tw`p-2 pl-6 pb-8 pt-4 m-2 w-40 bg-gray-100`}>
                <View style={tw`${!origin && "opacity-10"}`}>
                    <Image 
                    style={{width:120,height:120,resizeMode:'contain'}}
                    source={{uri: item.image}}
                    />
                    <Text style={tw`pl-2 mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon style={tw`ml-7 p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright"
                    color="white"
                    type="antdesign"
                    />
                </View>
            </TouchableOpacity>
        )}
        />
    )
}

export default NavOptions

