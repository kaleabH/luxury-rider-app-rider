import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import Home from '../screens/HomeScreen';
import News from '../screens/News';
import Matches from '../screens/Matches';
import Shop from '../screens/Shop';
import Icon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';
import FIcon from 'react-native-vector-icons/FontAwesome';
import { TabBarParamsList } from '../../types';

interface TabsProps {
}

const TabBar = createMaterialBottomTabNavigator<TabBarParamsList>();
const TabBarNavigator: React.FC<TabsProps> = ({ }) => {
  return (
    <TabBar.Navigator
       style={{
        // justifyContent:"center",
        // alignItems: "center",
        // position: 'absolute',
        // bottom: 0,
        width: '100%',
        // height: 30,
        // backgroundColor: '#F8F7FB',
        // marginBottom:70,
        // paddingBottom:20,
        // borderCurve:"circular",
        // backgroundColor:"white",
        // flexDirection: 'row',
        // justifyContent: 'center',
        // paddingHorizontal: 20,
        // alignItems: 'center',
        
      }}
      barStyle={{
        height:20,
        width:"90%",
        zIndex:2,
        position:"absolute",
        backgroundColor: "white",
        // elevation: 5,
        // borderRadius:40,
        // borderCurve:"circular",
        // borderWidth:2,
        alignItems:"center",
        justifyContent:"center",
        top:"90%",
        left:"5%"
        
        // marginBottom:60,
        // alignSelf:'center',
        
      }}
      initialRouteName= {"Home"}
      
      screenOptions={{
        tabBarColor:"white",

      }}      
      shifting={true}
      activeColor={"#B80028"}
      inactiveColor={"grey"}
    >
      <TabBar.Screen
        name="Home"
        component={Home}
        options={
          {
          title:"Home",
          tabBarIcon: ({color})=>(
            <EIcon name="home" color={color} size={26} />
          )
          }
        }
      />
      <TabBar.Screen
        name="News"
        component={News}
        options={
          {
          title:"Favorite",
          tabBarIcon: ({color})=>(
            <EIcon name="heart" color={color} size={26} />
          )
          }
        }
      />
      <TabBar.Screen
        name="Matches"
        component={Matches}
        options={
          {
          title:"notifications",
          tabBarIcon: ({color})=>(
            <Icon name="notifications" color={color} size={26} />
          )
          }
        }
      />
      <TabBar.Screen
        name="Shop"
        component={Shop}
        options={
          {
          title:"profile",
          tabBarIcon: ({color})=>(
            <FIcon name="user" color={color} size={26} />
          )
          }
        }
      />
    
    
    </TabBar.Navigator>
  )
}
const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#F8F7FB',
    borderRadius: 30,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
export default TabBarNavigator