import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { MEAL_FILTERS } from '../Data';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.topView}>
        <Image source={require('../images/cooking.jpg')} style={styles.banner} />
        <View style={styles.transparentView}>
          <Text style={styles.logo}>RecipePro</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.searchBox}>
            <Image source={require('../images/search.png')} style={styles.search} />
            <Text style={styles.placeholder}>Please search here......</Text>
          </TouchableOpacity>
          <Text style={styles.note}>Search 1000+ recipes easily With one click</Text>
        </View>
      </View>
      <Text style={styles.heading}>Categories</Text>
      <FlatList 
        horizontal 
        data={MEAL_FILTERS} 
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.categoriesItems}>
            <View style={styles.card}>
              <Image source={item.icon} style={styles.icon}/>
            </View>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    width: '100%',
    height: '40%',
  },
  banner: {
    height: '100%',
    width: '100%',
  },
  transparentView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    width: '90%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 50,
  },
  search: {
    width: 28,
    height: 28,
  },
  placeholder: {
    marginLeft: 15,
    fontSize: 16,
    color: '#9e9e9e',
  },
  logo: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '600',
    position: 'absolute',
    top: 10,
    left: 20,
  },
  note: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    fontWeight: '600',
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 10,
    marginTop: 10,
    color: '#000',
  },
  categoriesItems: {
    height: 150,
    width: 150,
    marginLeft:10,
    marginTop:10
  },
  card: {
    height: '70%',
    width: '80%',
    shadowColor:'#000',
    shadowOpacity:0.25,
    borderRadius:3.84,
    elevation:5,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    margin:10
  },
  icon:{
    width:'50%',
    height:'50%'
  }
});

export default Home;
