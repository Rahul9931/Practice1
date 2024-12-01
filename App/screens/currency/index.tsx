import { Alert, View } from "react-native"
import SimpleTextItems from "../../component/SimpleTextList"

const CurrencyScreen = () => {
    const currencies = ['USD', 'EUR', 'INR'];

    const handleItemPress = (selectedItem) => {
        console.log('Item Selected', `You selected: ${selectedItem}`);
        // Perform any other operation here
      };

    return(
        <View>
            <SimpleTextItems data={currencies} onItemPress={handleItemPress} />
        </View>
    )
}

export default CurrencyScreen