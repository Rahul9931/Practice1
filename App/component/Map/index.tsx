
import React from "react";
import { Text, View } from "react-native"
import MapView from 'react-native-maps';

const Map = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text> Map View</Text>
            <MapView
            style={{flex:1}}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

export default Map;