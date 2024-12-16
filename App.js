import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from "react";
import { Text, View } from "react-native"
import ImageSlider from "./App/component/ImageSlider";
import FirebaseStore from './App/component/FirebaseStore';
import Accordion from './App/component/Accordion';
import CategoryScreen from './App/screens/Cart';
import ContactUs from './App/screens/Contactus';
import CurrencyScreen from './App/screens/currency';
import LanguageScreen from './App/screens/Language';
import SettingScreen from './App/screens/setting';
import ProductPage from './App/screens/Product Details';
import SignInScreen from './App/screens/SignIn';


const App = ()=>{
    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{flex:1}}>
            {/* <ImageSlider/> */}
            {/* <FirebaseStore/> */}
            {/* <CategoryScreen/> */}
            {/* <ContactUs/> */}
            {/* <CurrencyScreen/> */}
            {/* <LanguageScreen/> */}
            {/* <SettingScreen/> */}
            {/* <ProductPage/> */}
            <SignInScreen/>
        </View>
        </GestureHandlerRootView>
    )
}

export default App;