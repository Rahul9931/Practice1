import { Text, View } from "react-native"
import styles from "./styles"
import Accordion from "../../component/Accordion"
import MoreItemsView from "./components/MoreItemsView"
import { useState } from "react"
import Children from "../../component/Children"
import HCartItems from "../../component/HorzontalFlatList/HCartItems"
import VerticaleItems from "./components/VerticleItemsList"

const CategoryScreen = () => {
    const [moreItems, setMoreItems] = useState("Chair")
    const [accordion, setAccordion] = useState()
    const [isDataEmpty, setIsDataEmpty] = useState(false)
    // Sample data
    const data = [
        { imageUrl: 'https://via.placeholder.com/40', text: 'Item 1' },
        { imageUrl: 'https://via.placeholder.com/40', text: 'Item 2' },
        { imageUrl: 'https://via.placeholder.com/40', text: 'Item 3' },
        { imageUrl: 'https://via.placeholder.com/40', text: 'Item 4' },
        { imageUrl: 'https://via.placeholder.com/40', text: 'Item 5' },
        { imageUrl: 'https://via.placeholder.com/40', text: 'Item 6' },
        { imageUrl: 'https://via.placeholder.com/40', text: 'Item 7' },
        { imageUrl: 'https://via.placeholder.com/40', text: 'Item 8' },
        { imageUrl: 'https://via.placeholder.com/40', text: 'Item 9' },
        { imageUrl: 'https://via.placeholder.com/40', text: 'Item 10' },
    ];
    return (
        <View style={[styles.parent_container, styles.row]}>
            <View style={styles.verticalListContainer}>
                <VerticaleItems data={data}/>
            </View>
            <View style={styles.contentContainer}>
                {isDataEmpty?
                <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No Products Found</Text>
                </View>
                
                :
                <View>
                {moreItems && <View>
                    <MoreItemsView title="Chair" />
                </View>}

                <View>
                    <Accordion title="Desks">
                        <HCartItems data={data}/>
                    </Accordion>
                </View>
                <View>
                <MoreItemsView title="Products" showButton={true}/>
                </View>
                </View>
                }
            </View>
        </View>
    )
}

export default CategoryScreen