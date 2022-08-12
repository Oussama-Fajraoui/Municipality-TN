import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import ComplainScreen from '../ComplainScreen/ComplainScreen';
import SuggestionList from '../SuggestionList/SuggestionList';
import SuggesstionScreen from '../SuggestionScreen/Suggestion';
import {colors} from './colorsConfig';
import News from './News';


 //Dummy data
const meditateTypes = [
  {
    title: 'News',
    isActive: false,
    imageUrl: require('../../../assets/images/medicationTypes/all.png'),
  },
  {
    title: 'Events',
    isActive: false,
    imageUrl: require('../../../assets/images/medicationTypes/my.png'),
  },
  {
    title: 'Complain',
    isActive: false,
    imageUrl: require('../../../assets/images/medicationTypes/anxious.png'),
  },
  {
    title: 'Suggestion',
    isActive: false,
    imageUrl: require('../../../assets/images/medicationTypes/sleep.png'),
  },
];

const Categories = [
  {
    imageUrl: require('../../../assets/images/medicationTypes/bg2.png'),
  },
  {
    imageUrl: require('../../../assets/images/medicationTypes/bg2.png'),
  },
  {
    imageUrl: require('../../../assets/images/medicationTypes/bg2.png'),
  },
];

const HomeScreen = (props) => {

  const [Page,SetPage] = useState('Home')

  return (
    <View style={styles.container}>
      {Page === 'Home' ?
      <View>
      <View>
        <ScrollView
          style={styles.meditateItemWrapperContainer}
          showsHorizontalScrollIndicator={true}
          horizontal={true}>
         
              <View style={styles.meditateItemWrapper}>
                <TouchableOpacity onPress={()=> {SetPage('News')}}
                  style={[
                    styles.meditateItem
                  ]}>
                  <Image source={require('../../../assets/images/medicationTypes/all.png')} />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.itemTitle,
                  ]}>
                  News
                </Text>
              </View>
              <View style={styles.meditateItemWrapper}>
                <TouchableOpacity onPress={()=> {SetPage('Events')}}
                  style={[
                    styles.meditateItem
                  ]}>
                  <Image source={require('../../../assets/images/medicationTypes/my.png')} />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.itemTitle,
                  ]}>
                  Events
                </Text>
              </View>
              <View style={styles.meditateItemWrapper}>
                <TouchableOpacity onPress={()=> {SetPage('Complain')}}
                  style={[
                    styles.meditateItem
                  ]}>
                  <Image source={require('../../../assets/images/medicationTypes/anxious.png')} />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.itemTitle,
                  ]}>
                  Complain
                </Text>
              </View>
              <View style={styles.meditateItemWrapper}>
                <TouchableOpacity onPress={()=> {SetPage('Suggestion')}}
                  style={[
                    styles.meditateItem
                  ]}>
                  <Image source={require('../../../assets/images/medicationTypes/sleep.png')} />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.itemTitle,
                  ]}>
                  Suggestion
                </Text>
              </View>
        </ScrollView>
      </View>
      <View style={styles.dailyThoughtsWrapper}>
      <TouchableOpacity>
          <Image source={require('../../../assets/images/player.png')} />
        </TouchableOpacity>
      </View>
        <ScrollView horizontal={true}>
          {
            Categories.map((category, index) => (
              <View key={index}>
                <Image
              source={require('../../../assets/images/medicationTypes/bg2.png')}
             
            />
            
            <Text style={styles.card1Txt}>Stress Removal</Text>
              </View>
            ))
          }
        </ScrollView>
        </View>:Page === 'News' ? (<View><TouchableOpacity style={styles.backbutton} onPress={()=> SetPage('Home')}><Text>Back</Text></TouchableOpacity><News /></View>):Page ==="Events" ?(<View><TouchableOpacity style={styles.backbutton} onPress={()=>SetPage('Home')}><Text>Back</Text></TouchableOpacity><SuggestionList /></View>):Page ==="Complain" ?(<View><TouchableOpacity style={styles.backbutton} onPress={()=>SetPage('Home')}><Text>Back</Text></TouchableOpacity><ComplainScreen /></View>):Page ==="Suggestion" ?(<View><TouchableOpacity style={styles.backbutton} onPress={()=>SetPage('Home')}><Text>Back</Text></TouchableOpacity><SuggesstionScreen /></View>): null}
    </View>
  )
};

export default HomeScreen;


export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
    marginTop: 5
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.heading,
  },
  description: {
    fontSize: 16,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    color: colors.gray,
  },
  meditateItem: {
    backgroundColor: colors.primary,
    padding:15,
    borderRadius:5,
    width: "100%"
  },
  meditateItemWrapper: {
    margin: 8,
    width: "20%",
    paddingLeft: "2%"
  },
  itemTitle: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 16,
    fontFamily: 'HelveticaNeue',
  },
  meditateItemWrapperContainer: {
    marginTop: 1,
  },
  dailyThoughtsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.lightBg,
    alignItems: 'center',
    height: 90,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  bgShape1: {
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: 10,
  },
  bgShape2: {
    position: 'absolute',
    right: 0,
    top: 0,
    borderRadius: 10,
  },
  bgShape3: {
    position: 'absolute',
    right: 0,
    top: 0,
    borderRadius: 10,
  },
  dailyTitle: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    color: colors.heading,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dailySubTitle: {
    color: colors.heading,
    fontSize: 11,
    fontFamily: 'HelveticaNeue',
  },
  medicationTypeCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: 'black',
    fonstSize: 19,
    margin: 10,
  },
  card: {
    marginBottom:1,
  },
  card1Txt: {
    fontFamily: 'HelveticaNeue',
    fontSize: 18,
    color: colors.white,
    position: 'relative',
    bottom: 30,
    left: 12,
    fontWeight: 'bold',
  },
  backbutton:{
    backgroundColor:"#14b8a6",
    width:"30%",
    marginTop:20,
    borderRadius:5,
    alignItems:"center",
    height:30,
    marginLeft:10
},
});
































// import React from "react"
// import { StyleSheet, Text, View, SafeAreaView, ScrollView, Animated, Image, TouchableOpacity } from 'react-native';
// import { colors } from "./colorsConfig";
// // import Articles from "../../../components/Article";
// // import News from "./News";


// const HomeScreen = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.heading}>Good Morning, Afsar</Text>
//                 <Text style={styles.subHeading}>We Wish you have a good day</Text>
//             </View>
//             <View style={styles.sectionWrapper1}>
//             <View style={styles.item1}>
//                 <Image 
//                 style={styles.basicImg}
//                 source={require('../../../assets/basicImg.png')}
//                 />
//                 <View style={styles.cardContent}>
//                 <Text style={[styles.cardTitle, {color: colors.whiteShade}]}>
//               Basic
//             </Text>
//             <Text style={[styles.cardSubTitle, {color: colors.whiteShade}]}>
//               COURSE
//             </Text>
//                 </View>
//                 <View style={styles.cardFooterWrapper}>
//                 <View>
//               <Text style={[styles.footerTitle, {color: colors.whiteShadeBg}]}>
//                 3-10 MIN
//               </Text>
//             </View>
//             <View>
//             <TouchableOpacity
//                 style={[
//                   styles.cardBtn,
//                   {backgroundColor: colors.whiteShadeBg},
//                 ]}>
//                 <Text style={styles.btnLabel}>START</Text>
//               </TouchableOpacity>
//             </View>
//                 </View>
//             </View>
//             <View style={styles.item2}>
//             <Image source={require('../../../assets/relaxationimg.png')} />
//             <View style={styles.cardContent}>
//             <Text style={[styles.cardTitle, {color: colors.heading}]}>
//               Relaxation
//             </Text>
//             <Text style={[styles.cardSubTitle, {color: colors.heading}]}>
//               MUSIC
//             </Text>
//             </View>
//             <View style={styles.cardFooterWrapper}>
//             <View>
//               <Text style={[styles.footerTitle, {color: colors.heading}]}>
//                 3-10 MIN
//               </Text>
//             </View>
//             <View>
//               <TouchableOpacity
//                 style={[styles.cardBtn, {backgroundColor: colors.heading}]}>
//                 <Text style={[styles.btnLabel, {color: colors.whiteShadeBg}]}>
//                   START
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             </View>
//               </View>
//             </View>
//             <View style={styles.dailyThoughtsWrapper}>
//             <Image
//           style={styles.bgShape1}
//           source={require('../../../assets/bgShape1.png')}
//         />
//         <Image
//           style={styles.bgShape2}
//           source={require('../../../assets/bgShape2.png')}
//         />
//         <Image
//           style={styles.bgShape3}
//           source={require('../../../assets/bgShape3.png')}
//         />
//         <View>
//           <Text style={styles.dailyTitle}>Daily Thought</Text>
//           <Text style={styles.dailySubTitle}>MEDITATION - 3-10 MIN</Text>
//         </View>
//         <View>
//           <Image source={require('../../../assets/player.png')} />
//         </View>
//             </View>
//             <View style={styles.recommendWrapper}>
//             <Text style={styles.recommendTitle}>Recomended for you</Text>
//             <ScrollView horizontal={true}>
//           <View style={[styles.recommedCard]}>
//             <View
//               style={[
//                 styles.recommednImgWrapper,
//                 {backgroundColor: '#afdbc5'},
//               ]}>
//               <Image
//                 source={require('../../../assets/recommend1.png')}
//               />
//             </View>
//             <View style={styles.recommendCardContentWrapper}>
//               <Text style={styles.recommentContentTitle}>Focus</Text>
//               <Text style={styles.recommentContentSubTitle}>
//                 MEDITATION - 3-10 MIN
//               </Text>
//             </View>
//           </View>
//           <View style={[styles.recommedCard]}>
//             <View
//               style={[
//                 styles.recommednImgWrapper,
//                 {backgroundColor: '#fcdea5'},
//               ]}>
//               <Image
//                 source={require('../../../assets/recommend2.png')}
//               />
//             </View>
//             <View style={styles.recommendCardContentWrapper}>
//               <Text style={styles.recommentContentTitle}>Happiness</Text>
//               <Text style={styles.recommentContentSubTitle}>
//                 MEDITATION - 3-10 MIN
//               </Text>
//             </View>
//           </View>
//           <View style={[styles.recommedCard]}>
//             <View
//               style={[
//                 styles.recommednImgWrapper,
//                 {backgroundColor: '#afdbc5'},
//               ]}>
//               <Image
//                 source={require('../../../assets/recommend1.png')}
//               />
//             </View>
//             <View style={styles.recommendCardContentWrapper}>
//               <Text style={styles.recommentContentTitle}>Focus</Text>
//               <Text style={styles.recommentContentSubTitle}>
//                 MEDITATION - 3-10 MIN
//               </Text>
//             </View>
//           </View>
//         </ScrollView>
//             </View>
//         </View>
//     )
// }

// export default HomeScreen;

// export const styles = StyleSheet.create({
//     container: {
//         display: 'flex',
//         flex: 1,
//         padding: 20,
//       },
//       logo: {
//         alignSelf: 'center',
//         marginTop: 20,
//       },
//       header: {},
//       heading: {
//         fontFamily: 'HelveticaNeue',
//         fontSize: 28,
//         fontWeight: 'bold',
//         marginTop: 40,
//       },
//       subHeading: {
//         fontFamily: 'HelveticaNeue',
//         fontSize: 20,
//         fontWeight: '300',
//         marginTop: 10,
//       },
//       basicImg: {
//         alignSelf: 'flex-end',
//       },
//       cardContent: {
//         position: 'absolute',
//         top: '35%',
//         padding: 15,
//       },
//       cardTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         fontFamily: 'HelveticaNeue',
//       },
//       cardSubTitle: {
//         marginTop: 10,
//         fontSize: 11,
//       },
//       cardFooterWrapper: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         padding: 15,
//         marginTop: '0%',
//         alignItems: 'center',
//       },
//       footerTitle: {
//         fontSize: 11,
//         fontFamily: 'HelveticaNeue',
//       },
//       cardBtn: {
//         borderRadius: 50,
//       },
//       btnLabel: {
//         fontFamily: 'HelveticaNeue',
//         fontSize: 12,
//         paddingTop: 10,
//         paddingBottom: 10,
//         marginLeft: 15,
//         marginRight: 15,
//         color: colors.heading,
//       },
//       item1: {
//         backgroundColor: '#8E97FD',
//         flex: 1,
//         marginRight: 10,
//         marginBottom: 10,
//         marginTop: 10,
//         borderRadius: 10,
//         justifyContent: 'space-between',
//       },
//       item2: {
//         backgroundColor: '#FFC97E',
//         flex: 1,
//         marginLeft: 10,
//         marginBottom: 10,
//         marginTop: 10,
//         borderRadius: 10,
//       },
//       sectionWrapper1: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 30,
//       },
//       dailyThoughtsWrapper: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         backgroundColor: colors.darkBg,
//         alignItems: 'center',
//         height: 95,
//         borderRadius: 10,
//         marginTop: 10,
//       },
//       bgShape1: {
//         position: 'absolute',
//         left: 0,
//         top: 0,
//       },
//       bgShape2: {
//         position: 'absolute',
//         right: 0,
//         top: 0,
//       },
//       bgShape3: {
//         position: 'absolute',
//         right: '40%',
//         bottom: 0,
//       },
//       dailyTitle: {
//         fontSize: 18,
//         fontFamily: 'HelveticaNeue',
//         color: colors.white,
//         fontWeight: 'bold',
//         marginBottom: 10,
//       },
//       dailySubTitle: {
//         color: colors.white,
//         fontSize: 11,
//         fontFamily: 'HelveticaNeue',
//       },
//       recommendWrapper: {
//         marginTop: 40,
//       },
//       recommendTitle: {
//         fontSize: 24,
//         fontFamily: 'HelveticaNeue',
//         color: colors.heading,
//         fontWeight: 'bold',
//         marginBottom: 20,
//       },
//       recommedCard: {
//         borderRadius: 10,
//         width: 160,
//         marginRight: 20,
//       },
//       recommednImgWrapper: {},
//       recommentContentTitle: {
//         fontSize: 18,
//         fontFamily: 'HelveticaNeue',
//         fontWeight: 'bold',
//         color: colors.heading,
//         paddingTop: 10,
//         paddingBottom: 5,
//       },
//       recommentContentSubTitle: {
//         fontSize: 11,
//         fontFamily: 'HelveticaNeue',
    
//         color: colors.gray,
//       },
//   });



  












// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   StatusBar,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {useTheme} from '@react-navigation/native';

// import Swiper from 'react-native-swiper';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import StarRating from '../../../components/StarRating';

// const HomeScreen = ({navigation}) => {
//   const theme = useTheme();

//   return (
//     <ScrollView style={styles.container}>
//       <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
//       <View style={styles.sliderContainer}>
//         <Swiper
//           autoplay
//           horizontal={false}
//           height={200}
//           activeDotColor="#FF6347">
//           <View style={styles.slide}>
//             <Image
//               source={require('../../../assets/favicon.png')}
//               resizeMode="cover"
//               style={styles.sliderImage}
//             />
//           </View>
//           <View style={styles.slide}>
//             <Image
//               source={require('../../../assets/favicon.png')}
//               resizeMode="cover"
//               style={styles.sliderImage}
//             />
//           </View>
//           <View style={styles.slide}>
//             <Image
//               source={require('../../../assets/favicon.png')}
//               resizeMode="cover"
//               style={styles.sliderImage}
//             />
//           </View>
//         </Swiper>
//       </View>

//       <View style={styles.categoryContainer}>
//         <TouchableOpacity
//           style={styles.categoryBtn}
//           onPress={() =>
//             navigation.navigate('CardListScreen', {title: 'Restaurant'})
//           }>
//           <View style={styles.categoryIcon}>
//             <Ionicons name="ios-restaurant" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Restaurant</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.categoryBtn}
//           onPress={() =>
//             navigation.navigate('CardListScreen', {title: 'Fastfood Center'})
//           }>
//           <View style={styles.categoryIcon}>
//             <MaterialCommunityIcons
//               name="food-fork-drink"
//               size={35}
//               color="#FF6347"
//             />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Fastfood Center</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <MaterialCommunityIcons name="food" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Snacks Corner</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={[styles.categoryContainer, {marginTop: 10}]}>
//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <Fontisto name="hotel" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Hotels</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <Ionicons name="md-restaurant" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Dineouts</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <MaterialIcons name="expand-more" size={35} color="#FF6347" />
//           </View>
//           <Text style={styles.categoryBtnTxt}>Show More</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.cardsWrapper}>
//         <Text
//           style={{
//             alignSelf: 'center',
//             fontSize: 18,
//             fontWeight: 'bold',
//             color: '#333',
//           }}>
//           Recently Viewed
//         </Text>
//         <View style={styles.card}>
//           <View style={styles.cardImgWrapper}>
//             <Image
//               source={require('../../../assets/favicon.png')}
//               resizeMode="cover"
//               style={styles.cardImg}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <Text style={styles.cardTitle}>Amazing Food Place</Text>
//             <StarRating ratings={4} reviews={99} />
//             <Text style={styles.cardDetails}>
//               Amazing description for this amazing place
//             </Text>
//           </View>
//         </View>
//         <View style={styles.card}>
//           <View style={styles.cardImgWrapper}>
//             <Image
//               source={require('../../../assets/favicon.png')}
//               resizeMode="cover"
//               style={styles.cardImg}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <Text style={styles.cardTitle}>Amazing Food Place</Text>
//             <StarRating ratings={4} reviews={99} />
//             <Text style={styles.cardDetails}>
//               Amazing description for this amazing place
//             </Text>
//           </View>
//         </View>
//         <View style={styles.card}>
//           <View style={styles.cardImgWrapper}>
//             <Image
//               source={require('../../../assets/favicon.png')}
//               resizeMode="cover"
//               style={styles.cardImg}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <Text style={styles.cardTitle}>Amazing Food Place</Text>
//             <StarRating ratings={4} reviews={99} />
//             <Text style={styles.cardDetails}>
//               Amazing description for this amazing place
//             </Text>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   sliderContainer: {
//     height: 200,
//     width: '90%',
//     marginTop: 10,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },

//   wrapper: {},

//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     borderRadius: 8,
//   },
//   sliderImage: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     width: '90%',
//     alignSelf: 'center',
//     marginTop: 25,
//     marginBottom: 10,
//   },
//   categoryBtn: {
//     flex: 1,
//     width: '30%',
//     marginHorizontal: 0,
//     alignSelf: 'center',
//   },
//   categoryIcon: {
//     borderWidth: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     width: 70,
//     height: 70,
//     backgroundColor: '#fdeae7' /* '#FF6347' */,
//     borderRadius: 50,
//   },
//   categoryBtnTxt: {
//     alignSelf: 'center',
//     marginTop: 5,
//     color: '#de4f35',
//   },
//   cardsWrapper: {
//     marginTop: 20,
//     width: '90%',
//     alignSelf: 'center',
//   },
//   card: {
//     height: 100,
//     marginVertical: 10,
//     flexDirection: 'row',
//     shadowColor: '#999',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   cardImgWrapper: {
//     flex: 1,
//   },
//   cardImg: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//     borderBottomRightRadius: 0,
//     borderTopRightRadius: 0,
//   },
//   cardInfo: {
//     flex: 2,
//     padding: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderBottomRightRadius: 8,
//     borderTopRightRadius: 8,
//     backgroundColor: '#fff',
//   },
//   cardTitle: {
//     fontWeight: 'bold',
//   },
//   cardDetails: {
//     fontSize: 12,
//     color: '#444',
//   },
// });


// import React from "react"
// import { StyleSheet, Text, View, SafeAreaView, ScrollView, Animated } from 'react-native';
// import Articles from "../../../components/Article";
// import News from "./News";


// const HomeScreen = () => {
//     return (
//         <ScrollView style={styles.container}>
//             <News />
//         </ScrollView>
//     )
// }

// export default HomeScreen;

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor: '#fff',
//     }
// })






// import React, { useState } from 'react'
// import {View,Text,Image,TouchableOpacity} from 'react-native'
// import {Dimensions} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// const window=Dimensions.get('window')
// import News from '../HomeScreen/News'
// import Events from '../HomeScreen/Events'


// export default function HomeScreen ({navigation}) {{
//   const [Page,SetPage] = useState('Home');


//    const changeScreen = (screen) => {
//        navigation.navigate(screen)
//        console.log('it works')
//    }

  
//        return (
//            <View style ={{flex:1,backgroundColor:'#DCDCDC'}}>
//                {/* <View style={{position:'absolute', top:0,height:0,backgroundColor:'#FFF',width:'100%',alignItems:'center'}}>
//                    <Text style={{textAlign:'center', fontsize:30,marginTop:5}}>
//                    Tableau de bord
//                    </Text>
//                </View> */}

//            {Page === 'Home' ? 
//            <View>
//                <View style={{alignItems:'center',justifyContent:'center'}}>
//                    <Image style={{
//                     resizeMode: 'cover',
//                     alignItems:'center',
//                     justifyContent:'center',
//                     borderRadius: 20,
//                     marginLeft:5,
//                     marginRight:5,
//                     width:window.width,
//                     height:window.height/2.8}}
//                   source={require('../../../assets/The_municipality_of_Tunis.jpg')}
//                   />
//                </View>

//                <View style={{padding:20, marginBottom: -35}}>
//                    <ScrollView horizontal={true} >
//                    <TouchableOpacity style={{marginLeft:window.height/25}} onPress={() =>{SetPage('events')}}>
//                        <Image style={{height:100 , width:120,borderRadius:20,}}
//                        source={require('../../../assets/newspaper.png')}  />
//                            <Text style={{fontSize:13,fontWeight:'bold',textAlign:'center'}}>
//                              Events
//                            </Text>
//                    </TouchableOpacity>


//                    <TouchableOpacity style={{marginLeft:30}}  onPress={() =>{SetPage('News')}}>
//                        <Image style={{height:100 , width:120,borderRadius:20,}}
//                        source={require('../../../assets/internet.png')} />
//                            <Text style={{ fontSize:13,fontWeight:'bold',textAlign:'center'}}>
//                       News
//                            </Text>
//                    </TouchableOpacity>    
//                    </ScrollView>
//                </View>
//                <View style={{padding:20}}>
//                    <ScrollView horizontal={true} >
//                    <TouchableOpacity style={{marginLeft:window.height/25}} onPress={() =>{changeScreen('Complain')}}>
//                        <Image style={{height:100 , width:120,borderRadius:20,}}
//                        source={require('../../../assets/calendar.png')}  />
//                            <Text style={{marginTop:5, fontSize:13,fontWeight:'bold',textAlign:'center'}}>
//                               Calendar 
//                            </Text>
//                    </TouchableOpacity>


//                    <TouchableOpacity style={{marginLeft:30}}  onPress={() =>{changeScreen('Suggestion')}}>
//                        <Image style={{height:100 , width:120,borderRadius:20}}
//                        source={require('../../../assets/contact-book.png')} />
//                            <Text style={{marginTop:5, fontSize:13,fontWeight:'bold',textAlign:'center'}}>
//                          Contact-US 
//                            </Text>
//                    </TouchableOpacity>    
//                    </ScrollView>
//                </View>
//                </View>: Page === 'events' ? (<View><Events /><TouchableOpacity onPress={()=> SetPage('Home')}><Text>Back</Text></TouchableOpacity></View>): Page === 'News' ? (<View><TouchableOpacity onPress={()=> SetPage('Home')}><Text>Back</Text></TouchableOpacity><News /></View>): null}
//            </View>
//        )
//    }
 //}