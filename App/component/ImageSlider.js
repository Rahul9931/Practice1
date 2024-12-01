import * as React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import { interpolate } from "react-native-reanimated";
import Carousel, { TAnimationStyle } from "react-native-reanimated-carousel";

function ImageSlider() {
    const width = Dimensions.get('window').width;
    const images = [
        require('../../assets/slider1.jpeg'),
        require('../../assets/slider2.jpeg'),
        require('../../assets/slider3.jpeg'),
        require('../../assets/slider4.jpeg'),
        require('../../assets/slider5.jpeg'),
    ]

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={images}
                scrollAnimationDuration={500}
                mode="normal-horizontal"
                // customAnimation={animationStyle}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            margin:5
                        }}
                    >
                        <Image source={index} resizeMode='contain' style={{flex:1, width:300}} />
                        {/* <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text> */}
                    </View>
                )}
            />
        </View>
    );
}

export default ImageSlider;
