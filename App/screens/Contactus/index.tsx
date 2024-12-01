import { Image, Text, View } from "react-native"
import styles from "./styles"
import ContactUsItems from "./components/ContactUsItems";

const ContactUs = () => {

    const items = [
        { icon: 'location-on', label: 'Webkul \nnoida \nUttar Pradesh \n94134 \nIndia' },
        { icon: 'phone', label: '+1 (650) 555-0111' },
        { icon: 'message', label: 'odootest1@hobbyist.store' },
      ];

    return(
        <View style={styles.parent_container}>
            <Image source={{uri:"https://via.placeholder.com/40"}}
                style={{width:'100%',height:'40%'}}
            />
            <Text style={styles.company_text}> My company </Text>
            <ContactUsItems items={items}/>
        </View>
    )
}

export default ContactUs