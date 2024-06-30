import { View, Text, StyleSheet,Dimensions, ScrollView} from 'react-native'
import React from 'react'
import { TabBarProps, TabBarParamsList } from '../../types'
import { colors,parameters } from '../global/styles'
import { filterData,carsAround } from '../global/data'
import { mapStyle} from "../global/mapStyle"
import { Icon} from 'react-native-elements'

// import New from "../components/New"
// import {news} from '../util/Data';

// interface Props{

// }

const SCREEN_WIDTH = Dimensions.get('window').width;
const News:React.FC<TabBarProps<TabBarParamsList,'News'>> = () => {


  
  return (
  <ScrollView bounces ={false}>
 <View style={styles.mainContainer}>
                     <View style ={styles.view5}>
                          <View style ={styles.view6}>
                              <View style ={styles.view7}>
                                  <Icon type = "material-community"
                                      name ="map-marker"
                                      color = {colors.black}
                                      size = {22}
                                  />
                              </View>
                              <View>
                                  <Text style ={{fontSize:18,color:colors.black}}>32 Olivia Rd</Text>
                                  <Text style ={{color:colors.grey3}}>Klipfontein 83-Ir, Boksburg</Text>
                              </View>
                          </View>
                          <View>
                              <Icon type = "material-community"
                                          name ="chevron-right"
                                          color = {colors.grey}
                                          size = {26}
                                      />
                              </View>
                      </View>
  
                      <View style ={{...styles.view5,borderBottomWidth:0}}>
                          <View style ={styles.view6}>
                              <View style ={styles.view7}>
                                  <Icon type = "material-community"
                                      name ="map-marker"
                                      color = {colors.black}
                                      size = {22}
                                  />
                              </View>
                              <View>
                                  <Text style ={{fontSize:18,color:colors.black}}>32 Olivia Rd</Text>
                                  <Text style ={{color:colors.grey3}}>Klipfontein 83-Ir, Boksburg</Text>
                              </View>
                          </View>
                          <View>
                              <Icon type = "material-community"
                                          name ="chevron-right"
                                          color = {colors.grey}
                                          size = {26}
                                      />
                              </View>
                      </View>  
                      <View style ={{...styles.view5,borderBottomWidth:0}}>
                          <View style ={styles.view6}>
                              <View style ={styles.view7}>
                                  <Icon type = "material-community"
                                      name ="map-marker"
                                      color = {colors.black}
                                      size = {22}
                                  />
                              </View>
                              <View>
                                  <Text style ={{fontSize:18,color:colors.black}}>32 Olivia Rd</Text>
                                  <Text style ={{color:colors.grey3}}>Klipfontein 83-Ir, Boksburg</Text>
                              </View>
                          </View>
                          <View>
                              <Icon type = "material-community"
                                          name ="chevron-right"
                                          color = {colors.grey}
                                          size = {26}
                                      />
                              </View>
                      </View>
                      <View style ={{...styles.view5,borderBottomWidth:0}}>
                          <View style ={styles.view6}>
                              <View style ={styles.view7}>
                                  <Icon type = "material-community"
                                      name ="map-marker"
                                      color = {colors.black}
                                      size = {22}
                                  />
                              </View>
                              <View>
                                  <Text style ={{fontSize:18,color:colors.black}}>32 Olivia Rd</Text>
                                  <Text style ={{color:colors.grey3}}>Klipfontein 83-Ir, Boksburg</Text>
                              </View>
                          </View>
                          <View>
                              <Icon type = "material-community"
                                          name ="chevron-right"
                                          color = {colors.grey}
                                          size = {26}
                                      />
                              </View>
                      </View>
                      <View style ={{...styles.view5,borderBottomWidth:0}}>
                          <View style ={styles.view6}>
                              <View style ={styles.view7}>
                                  <Icon type = "material-community"
                                      name ="map-marker"
                                      color = {colors.black}
                                      size = {22}
                                  />
                              </View>
                              <View>
                                  <Text style ={{fontSize:18,color:colors.black}}>32 Olivia Rd</Text>
                                  <Text style ={{color:colors.grey3}}>Klipfontein 83-Ir, Boksburg</Text>
                              </View>
                          </View>
                          <View>
                              <Icon type = "material-community"
                                          name ="chevron-right"
                                          color = {colors.grey}
                                          size = {26}
                                      />
                              </View>
                      </View>
                      <View style ={{...styles.view5,borderBottomWidth:0}}>
                          <View style ={styles.view6}>
                              <View style ={styles.view7}>
                                  <Icon type = "material-community"
                                      name ="map-marker"
                                      color = {colors.black}
                                      size = {22}
                                  />
                              </View>
                              <View>
                                  <Text style ={{fontSize:18,color:colors.black}}>32 Olivia Rd</Text>
                                  <Text style ={{color:colors.grey3}}>Klipfontein 83-Ir, Boksburg</Text>
                              </View>
                          </View>
                          <View>
                              <Icon type = "material-community"
                                          name ="chevron-right"
                                          color = {colors.grey}
                                          size = {26}
                                      />
                              </View>
                      </View>
                      <View style ={{...styles.view5,borderBottomWidth:0}}>
                          <View style ={styles.view6}>
                              <View style ={styles.view7}>
                                  <Icon type = "material-community"
                                      name ="map-marker"
                                      color = {colors.black}
                                      size = {22}
                                  />
                              </View>
                              <View>
                                  <Text style ={{fontSize:18,color:colors.black}}>32 Olivia Rd</Text>
                                  <Text style ={{color:colors.grey3}}>Klipfontein 83-Ir, Boksburg</Text>
                              </View>
                          </View>
                          <View>
                              <Icon type = "material-community"
                                          name ="chevron-right"
                                          color = {colors.grey}
                                          size = {26}
                                      />
                              </View>
                      </View>
                      <View style ={{...styles.view5,borderBottomWidth:0}}>
                          <View style ={styles.view6}>
                              <View style ={styles.view7}>
                                  <Icon type = "material-community"
                                      name ="map-marker"
                                      color = {colors.black}
                                      size = {22}
                                  />
                              </View>
                              <View>
                                  <Text style ={{fontSize:18,color:colors.black}}>32 Olivia Rd</Text>
                                  <Text style ={{color:colors.grey3}}>Klipfontein 83-Ir, Boksburg</Text>
                              </View>
                          </View>
                          <View>
                              <Icon type = "material-community"
                                          name ="chevron-right"
                                          color = {colors.grey}
                                          size = {26}
                                      />
                              </View>
                      </View>
 </View>
                      </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:50
  },
  view1:{
    flexDirection:"row",
    flex:1,
    paddingTop:30
   },
   
   button1:{
     height:40,
     width:150,
     backgroundColor:colors.black,
     borderRadius:20,
     alignItems:"center",
     justifyContent:"center",
     marginTop:20
   },
   
   button1Text:{
    color:colors.white,
    fontSize:17,
    marginTop:-2
   
   },
   card:{
    alignItems:"center",
    margin:SCREEN_WIDTH/22
   
   },
   
   view2:{marginBottom:5,
         borderRadius:15,
         backgroundColor:colors.grey6
       },
   
       title:{
         color:colors.black,
         fontSize:16
       },
   view3:{flexDirection:"row",
            marginTop :5,
            height:50,
            backgroundColor:colors.grey6,
            alignItems:"center",
            justifyContent:"space-between",
           marginHorizontal:15
           
            },
   text3:{marginLeft:15,
           fontSize:20,
           color:colors.black
     },
   
   view4:{ flexDirection:"row",
           alignItems:"center",
           marginRight:15,
           backgroundColor:"white",
           paddingHorizontal:10,
           paddingVertical:2,
           borderRadius:20
           },
   
   view5:{ flexDirection:"row",
   alignItems:"center",
   backgroundColor:"white",
   paddingVertical:25,
   justifyContent:"space-between",
   marginHorizontal:15,
   borderBottomColor:colors.grey4,
   borderBottomWidth:1,
   flex:1
   },
   
   view6:{
   
   
   alignItems:"center",
   flex:5,
   flexDirection:"row"
   },
   view7:{
   backgroundColor:colors.grey6,
   height:40,
   width:40,
   borderRadius:20,
   alignItems:"center",
   justifyContent:"center",
   marginRight:20
   
   },
})

export default News