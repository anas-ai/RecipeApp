import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
const Splash = () => {
 const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Home')
    },3000)
  },[])


  return (
    <View style={styles.container}>
      <Animatable.Image
        animation={'slideInUp'}
        style={styles.logo}
        source={require('../images/logo.png')}
      />
      <Animatable.Text animation={'slideInUp'} style={styles.appName}>
        RecipePro
      </Animatable.Text>
      <Animatable.Text animation={'slideInUp'} style={styles.tagLine}>
        Search AnyRecipe With Heath Filters
      </Animatable.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#05b681',
  },
  logo: {
    height: 200,
    width: 200,
  },
  appName: {
    fontSize: 40,
    fontWeight: '600',
    color: '#000',
  },

  tagLine:{
    position:'absolute',
    bottom:50,
    fontSize:20,
    fontWeight:600,
    color:'black'
  }
});
