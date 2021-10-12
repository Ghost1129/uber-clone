
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Alert, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin, selectTravelTimeInfo } from '../slices/navSlice'
import 'intl';
import "intl/locale-data/jsonp/en";
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: "Uber-X-123",
        title: "Uber X",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Uber-LUX-123",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    },
];
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const [selected, setSelected] = useState(null)
    const navigation =useNavigation()
    const travelTimeInfo = useSelector(selectTravelTimeInfo)
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
            <TouchableOpacity
                onPress={()=> navigation.navigate("NavigateCard")}
                style={[tw`absolute top-3 left-5 p-3 rounded-full`]}
                >
                <Icon
                        type="fontawesome"
                        name="chevron-left"
                    />
                </TouchableOpacity>
            <Text style={tw`text-center text-xl font-bold py-5`}>Select a ride - {travelTimeInfo?.distance.text}</Text>
            </View>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item:{id,title,multiplier,image},item})=>(
                <TouchableOpacity
                onPress={()=>setSelected(item)}
                 style={tw`flex-row items-center justify-between px-10 ${id===selected?.id && "bg-gray-200"}`}>
                    <Image style={{width:100, height:100, resizeMode:"contain"}}
                    source={{ uri: item.image }}/>
                    <View style={tw`-ml-6`}>
                        <Text style={tw`text-xl font-semibold`}>{title}</Text>
                        <Text>{travelTimeInfo?.duration.text}</Text>
                    </View>
                    <Text style={tw`text-xl`}>
                    
                    {new Intl.NumberFormat("en-IN", {
                                        style: 'currency',
                                        currency: 'INR'
                                    }).format(
                                        (travelTimeInfo?.duration.value*SURGE_CHARGE_RATE*multiplier)/100
                                    )}

                    </Text>
                </TouchableOpacity>
            )}
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity 
                disabled={!selected}
                style={tw`bg-black py-3 m-3 rounded-full ${!selected && "bg-gray-300"}`}>
                    <Text style={tw`text-center text-white text-xl `}>Ride {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
