// BottomNav.tsx
import React, { useState } from 'react';
import { BottomNavigation, Surface } from 'react-native-paper';
// import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Ionicons } from 'react-native-vector-icons';


import HomeScreen from '../../screens/Home'; 
import MatchesScreen from '../../screens/Matches';
import NewsScreen from '../../screens/News'; 
import ShopScreen from '../../screens/Shop'; 
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

const BottomNav = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'matches', title: 'favorite', icon: 'heart' },
    { key: 'news', title: 'notifications', icon: 'notifications' },
    { key: 'shop', title: 'Profile', icon: 'person' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    matches: MatchesScreen,
    news: NewsScreen,
    shop: ShopScreen
  });

  return (
    <View style={styles.container}>
      <View>
        
      </View>
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={styles.bar}
            activeColor="#B80028"
            // inactiveColor="#B80028"
            renderIcon={({ route, focused, color }) => (
            <Ionicons 
            name={route.icon} 
            color={focused ? '#B80028' : '#B80028'}
            size={26}
            />
        )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'blue',
        borderRadius: 16,
        overflow: 'hidden',
        },
      
    bar: {
        // backgroundColor: '#FFFFFF',
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 1, 
        shadowRadius: 5,
        height: 60, 
        borderRadius:10,
        marginHorizontal: 10,
        marginBottom: 20, 
        position: 'absolute',
        overflow: 'hidden',
    },  
  });
export default BottomNav;

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// interface BottomNavProps {
//   title: string;
//   icon: string;
// }

// const BottomNav: React.FC<BottomNavProps> = ({ title, icon }) => {
//   return (
//     <View style={styles.cardContainer}>
//       <View style={styles.cardShadow}>
//         <Ionicons name={icon} size={26} color="#B80028" />
//         <Text style={styles.title}>{title}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   cardContainer: {
//     flex:1,
//     justifyContent:"flex-end",
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     overflow: 'hidden',
//    },
//    cardShadow: {
//     borderRadius: 16,
//     backgroundColor: 'transparent',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//     padding:10,
//     margin:20,
//    },
//   title: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#B80028',
//   },
// });

// export default BottomNav;
