// import React, { useEffect, useState } from "react";
// import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native"
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Accordion from "../../component/Accordion";
// // import Example from "../../assets/images/Example";
// // import Collapsible from 'react-native-collapsible';

// const ProductPage = () => {
//     const [productName, setProductName] = useState()
//     const [price, setPrice] = useState()
//     const [rating, setRating] = useState(0)
//     const [review, setReview] = useState()
//     const [image, setImage] = useState()
//     const [details, setDetails] = useState("A customizable desk provides a versatile and tailored workspace by offering adjustable and modular features to meet individual preferences and needs. Key aspects include height adjustment capabilities, which allow users to switch between sitting and standing positions for ergonomic comfort. Modular components such as drawers, shelves, and monitor mounts can be added or removed to suit various tasks and storage requirements. Users also have options for different surface materials and finishes, enabling them to match their desk to personal style or office decor.")
//     // Function to make the POST request
//     const postData = () => {
        
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log('Response Data:', data.name);
//                 setProductName(data.name)
//                 setPrice(data.priceUnit)
//                 setRating(data.avg_rating)
//                 setReview(data.total_review)
//                 setImage(data.images[0])
//                 console.log('Response Data:', data.avg_rating);
//                 console.log('Response Data:', data.total_review);
//                 console.log('Response Data:', data.priceUnit);
//                 console.log('Response Data:', data.images[0]);
//             })
//             .catch(error => {
//                 console.error('Response Error:', error);
//             });
//     };

//     useEffect(() => {
//         postData();
//     }, []);

//     const [counter, setCounter] = useState(1)
//     const [unit, setUnit] = useState("Unit")
//     const [collapsed, setCollapsed] = useState(true)
//     const toggle = () => {
//         setCollapsed(!collapsed)
//     }

//     const decrement = () => {
//         if (counter > 1) {
//             setCounter(counter => counter - 1)
//         }
//     }

//     const increment = () => {
//         setCounter(counter => counter + 1)
//     }

//     const DetailsView = ({data}) => {
//         return (
//             <View style={{ backgroundColor: 'white', padding: 5 }}>
//                 <Text style={{ color: 'black', marginBottom: 10 }}> {data} </Text>
//             </View>
//         )
//     }

//     return (
//         <ScrollView
//             style={{
//                 backgroundColor: '#E5E4E2',
//             }} showsVerticalScrollIndicator={false}>

//             {/* Image View */}
//             <View style={{ backgroundColor: 'white', height: 350 }}>

//                 <Image source={{ uri: image }}
//                     style={{ height: 350, width: '100%' }} />
//             </View>

//             {/* Product Info View */}
//             <View style={{ backgroundColor: 'white', paddingStart: 10 }}>
//                 <Text style={[styles.textStyle, styles.boldStyle]}>{productName}</Text>
//                 <Text style={styles.textStyle}>{price}</Text>
//                 <View style={{ flexDirection: 'row', marginTop: 10, }}>

//                     {rating != 0
//                         ? <View style={styles.ratingBox}>
//                             <Text style={{ color: 'white', fontSize: 10 }}>{rating}</Text>
//                             {/* <Image source={require('../../assets/images/star.png')} style={{width:12, height:12}}/> */}
//                             <Icon name="star" size={12} color="white" />
//                         </View>
//                         : null}

//                     {review != 0
//                         ? <Text style={{ fontSize: 12, marginStart: 10, fontWeight: 'bold', color: 'black' }}>{review} Reviews</Text>
//                         : <View><Text style={{ fontSize: 12 }}>No Review Yet</Text></View>}

//                     <Text style={{ fontSize: 12, marginStart: 10, color: 'skyblue' }}>ADD YOUR REVIEW</Text>
//                 </View>
//                 <View style={{ height: 20 }}></View>
//             </View>

//             {/* WishList and Share View */}
//             <View style={styles.viewStyle}>
//                 <View style={styles.box}>
//                     {/* <Image source={require('../../assets/images/fav.png')} style={{width:20, height:20}} />   */}
//                     <Icon name="favorite-outline" size={20} color="lightgrey" />
//                     <Text style={styles.wishlistText}>WISHLIST</Text>
//                 </View>
//                 <View style={styles.box}>
//                     {/* <Image source={require('../../assets/images/share.png')} style={{width:20, height:20}} />
//          */}
//                     <Icon name="share" size={20} color="lightgrey" />
//                     <Text style={styles.wishlistText}>SHARE</Text>
//                 </View>
//             </View>

//             {/* Quantity View */}
//             <View style={{ padding: 10, marginTop: 10, backgroundColor: 'white' }}>
//                 <Text style={{ fontSize: 15, color: '#C0C0C0' }}>Quantity</Text>
//             </View>

//             {/* Counter View */}
//             <View style={styles.counterView}>
//                 <TouchableOpacity style={styles.counterPadding} onPress={decrement}>
//                     <Text style={{ color: 'white', fontSize: 30 }}>-</Text>
//                 </TouchableOpacity >
//                 <View style={{ flex: 15, justifyContent: 'center', alignItems: 'center' }}>
//                     <Text style={{ fontWeight: 'bold' }}>{counter} Units</Text>
//                 </View>
//                 <TouchableOpacity style={styles.counterPadding} onPress={increment}>
//                     <Text style={{ color: 'white', fontSize: 30 }}>+</Text>
//                 </TouchableOpacity>
//             </View>

//             {/* Add to cart and Buy button View */}
//             <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', padding: 5, marginTop: 7 }}>
//                 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, padding: 10, marginEnd: 5 }}>
//                     <Text style={{ color: 'black', fontWeight: 'bold' }}> ADD TO CART</Text>
//                 </View>
//                 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderRadius: 5, marginStart: 5 }}>
//                     <Text style={{ color: 'white', fontWeight: 'bold' }}>BUY NOW</Text>
//                 </View>
//             </View>

//             {/* Details View */}
//             <Accordion title="Details">
//                 <DetailsView data={details} />
//             </Accordion>
//             {/* <View style={{padding:10, marginTop:7,backgroundColor:'white',flexDirection: 'row', flex:1, justifyContent: 'space-between'}} 
//       onStartShouldSetResponder={toggle}>
//         <Text style={{fontSize:15, color:'#C0C0C0'}}>Details</Text>
//         {collapsed?<Image source={require('../../assets/images/bottom_arrow.png')} style={{width: 30, height: 30}} />:null}
//       </View> */}

//             {/* Collapsible View */}
//             {/* <Collapsible collapsed={collapsed}>
//         <View style={{backgroundColor: 'white', padding: 5}}>
//           <Text style={{color: 'black', marginBottom: 10}}> {details} </Text>
//         </View>
//       </Collapsible> */}

//             {/* Reviews View */}
//             <View style={{ padding: 10, marginTop: 10, backgroundColor: 'white', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}
//                 onStartShouldSetResponder={() => console.log("review")}>
//                 <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Reviews (1)</Text>
//                 {/* <Image source={require('../../assets/images/arrow_right.png')} style={{width: 30, height: 30}} /> */}
//             </View>
//         </ScrollView>
//     )
// };

// const styles = StyleSheet.create({
//     viewStyle: {
//         color: 'white',
//         width: 200,
//         height: 200,
//     },
//     textStyle: {
//         color: 'black',
//         marginTop: 5,
//     },
//     ratingBox: {
//         flexDirection: 'row',
//         backgroundColor: 'green',
//         justifyContent: 'center',
//         width: 40,
//         padding: 2,
//         alignItems: 'center',
//     },
//     box: {
//         flex: 0.5,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         padding: 10
//     },
//     viewStyle: {
//         flex: 1,
//         flexDirection: 'row',
//         backgroundColor: 'white',
//         marginTop: 1
//     },
//     wishlistText: {
//         marginStart: 5,
//         color: 'black'
//     },
//     boldStyle: {
//         fontWeight: "bold"
//     },
//     counterView: {
//         flex: 10,
//         flexDirection: 'row',
//         paddingTop: 10,
//         paddingStart: 5,
//         paddingBottom: 10,
//         paddingEnd: 5,
//         backgroundColor: 'white',
//         marginTop: 1
//     },
//     counterPadding: {
//         flex: 1,
//         paddingTop: 1,
//         paddingStart: 20,
//         paddingBottom: 1,
//         paddingEnd: 20,
//         backgroundColor: 'black',
//         borderRadius: 5,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });

// export default ProductPage;