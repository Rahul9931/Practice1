import { Alert, View } from "react-native"
import SimpleTextItems from "../../component/SimpleTextList"

const LanguageScreen = () => {
    const language = ['Arabic', 'Chinease', 'English','French'];

    const handleItemPress = (selectedItem) => {
        console.log('Item Selected', `You selected: ${selectedItem}`);
        // Perform any other operation here
      };

    return(
        <View>
            <SimpleTextItems data={language} onItemPress={handleItemPress} />
        </View>
    )
}

export default LanguageScreen