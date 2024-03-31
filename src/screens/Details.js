import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { create } from 'react-test-renderer'

const Details = () => {
  const route = useRoute()
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={{uri:route.params.data.recipe.image}} style={styles.banner}/>
      <TouchableOpacity style={styles.backBtn} onPress={()=> navigation.goBack()}>
      <Image source={require('../images/back.png')} style={styles.backIcon}/>
      </TouchableOpacity>
      <Text style={styles.title}> {route.params.data.recipe.label}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  banner:{
    width:'100%',
    height:250,
    resizeMode:'cover'
  },
  backBtn:{
    width:50,
    height:50,
    backgroundColor:'white',
    position:'absolute',
    top:8,
    left:10,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  backIcon:{
    height:20,
    width:20
  },
  title:{
    fontSize:25,
    alignSelf:'center',
    fontWeight:'800',
    width:'90%',
    marginTop:10,
    color:'#000',
  }
})

export default Details