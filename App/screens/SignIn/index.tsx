import React, { useState, useEffect } from "react";
import { Button, Text, View, Image, Alert } from "react-native";
import styles from "./styles";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const SignInScreen = () => {
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        GoogleSignin.configure({
            //webClientId: '613592515055-htvtpmve5a8vpu6c2kb8bii16u98s3p7.apps.googleusercontent.com',
            webClientId: '643363934199-59ugf4skvjhnrb11h6q6s631bs7qacdo.apps.googleusercontent.com'
        });
    }, []);

    async function onGoogleButtonPress() {
        if (isSigningIn) return; // Prevent multiple sign-in attempts

        setIsSigningIn(true); // Set signing in state

        try {
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

            // Sign in and get the user's information
            const signInResult = await GoogleSignin.signIn();

            if (!signInResult.idToken) {
                throw new Error('No ID token found');
            }

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(signInResult.idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);

            console.log('Signed in with Google!');
            Alert.alert("Success", "Signed in with Google!");

            // Set the user information
            setUserInfo(signInResult.user);
        } catch (error) {
            console.error('Error during Google Sign-In', error);
            Alert.alert("Error", error.message);
        } finally {
            setIsSigningIn(false); // Reset signing in state
        }
    }

    return (
        <View style={styles.parent_container}>
            <Text> SignIn Screen </Text>
            {userInfo ? (
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image
                        source={{ uri: userInfo.photo }}
                        style={{ width: 100, height: 100, borderRadius: 50 }}
                    />
                    <Text style={{ fontSize: 18, marginTop: 10 }}>{userInfo.name}</Text>
                </View>
            ) : (
                <Button
                    title={isSigningIn ? "Signing In..." : "Sign In"}
                    onPress={onGoogleButtonPress}
                    disabled={isSigningIn} // Disable button while signing in
                />
            )}
        </View>
    );
};

export default SignInScreen;
