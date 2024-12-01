import React, { useEffect } from "react";
import { Text, View } from "react-native"
import firestore from '@react-native-firebase/firestore';

const FirebaseStore = ()=>{

    useEffect(()=>{
        getDatabase();
    },[])

    const getDatabase = async () => {
        try{
            const data = await firestore().collection('Users').doc('vBnp7zwbiY86j461jwy8').get();
            console.log(data._data)
        } catch(err){
            console.log(`error = ${err}`)
        }
    }
        return(
        <View>
            <Text> FirebaseStore </Text>
        </View>
    )
}

export default FirebaseStore;