import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import CustomSwitch from '../../component/CustomSwitch';

const SettingScreen = () => {
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleNotification = useCallback((value) => {
        setIsNotificationEnabled(value); // Update state in parent
        console.log(`Switch is now ${value ? "On" : "Off"}`); // Perform additional actions
    }, [isNotificationEnabled])

    const handleDarkMode = useCallback((value) => {
        setIsDarkMode(value); // Update state in parent
        console.log(`Switch is now ${value ? "On" : "Off"}`); // Perform additional actions
    }, [isDarkMode])

    return (
        <View style={styles.container}>
            {/* Notification */}
            <View>
                <View style={styles.row_container}>
                    <Text style={styles.label}>Notification</Text>
                    <CustomSwitch isEnabled={isNotificationEnabled} onToggle={handleNotification} />
                </View>
                <View style={styles.horizontalLine}></View>
            </View>
            {/* Dark Mode */}
            <View>
                <View style={styles.row_container}>
                    <Text style={styles.label}>Dark Mode</Text>
                    <CustomSwitch isEnabled={isDarkMode} onToggle={handleDarkMode} />
                </View>
                <View style={styles.horizontalLine}></View>
            </View>
            <Pressable>
                <Text style={styles.label}> Privacy Policy </Text>
                <View style={styles.horizontalLine}></View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: 14,
        margin: 10,
        color: 'black'
    },
    status: {
        marginTop: 20,
        fontSize: 16,
    },
    row_container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    horizontalLine: {
        height: 1,
        backgroundColor: 'lightgrey'
    }
});

export default SettingScreen;
