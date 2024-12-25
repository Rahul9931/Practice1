import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useFrameProcessor } from 'react-native-vision-camera';
import textRecognition from '@react-native-ml-kit/text-recognition';

interface CameraSearchProps {
    onResultSelect: (result: string) => void;
}

const CameraSearch: React.FC<CameraSearchProps> = ({ onResultSelect }) => {
    const devices = useCameraDevices();
    //const device = devices?.back || devices?.front; // Use front camera if back is unavailable
    const [hasPermission, setHasPermission] = useState(false);
    const [detectedText, setDetectedText] = useState<string[]>([]);

    useEffect(() => {
        const requestPermissions = async () => {
            const status = await Camera.requestCameraPermission();
            console.log('Camera permission status:', status); // Debugging permission status
            //setHasPermission(status === 'authorized');
        };
        requestPermissions();
    }, []);

    useEffect(() => {
        console.log('Available devices:', JSON.stringify(devices)); // Debugging available devices
    }, [devices]);

    const frameProcessor = useFrameProcessor(async (frame) => {
        try {
            // const result = await textRecognition.recognize(frame);
            // const detected = result.blocks.map((block: { text: string }) => block.text);
            // setDetectedText(detected);
        } catch (error) {
            console.error('Text recognition error:', error);
        }
    }, []);

    const handleResultClick = (result: string) => {
        onResultSelect(result);
    };

    // Debugging fallback UI
    // if (!devices || (!devices.back && !devices.front)) {
    //     return <Text>Camera devices are loading...</Text>;
    // }
    // if (!hasPermission) {
    //     return <Text>No camera permission</Text>;
    // }
    // if (!device) {
    //     return <Text>No camera device found</Text>;
    // }

    return (
        <View style={styles.container}>
            {/* <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                frameProcessor={frameProcessor}
            /> */}

            <View style={styles.listContainer}>
                <FlatList
                    data={detectedText}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleResultClick(item)} style={styles.listItem}>
                            <Text style={styles.text}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    listContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        maxHeight: '50%',
    },
    listItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    text: { color: '#fff', fontSize: 16 },
});

export default CameraSearch;
