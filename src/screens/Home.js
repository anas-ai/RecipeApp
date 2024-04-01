import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {MEAL_FILTERS} from '../Data';
import axios from 'axios';
import {APP_ID, APP_KEY} from '../Keys';
import {BASE_URL} from '../Apis';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getTrendyRecipes();
  }, []);

  

  const getTrendyRecipes = async() => {
    await axios
      .get(`${BASE_URL}?type=public&q=food&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => {
        setRecipes(response.data.hits);
        console.log(response.data.hits);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.topView}>
        <Image
          source={require('../images/cooking.jpg')}
          style={styles.banner}
        />
        <View style={styles.transparentView}>
          <Text style={styles.logo}>RecipePro</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.searchBox}>
            <Image
              source={require('../images/search.png')}
              style={styles.search}
            />
            <Text style={styles.placeholder}>Please search here......</Text>
          </TouchableOpacity>
          <Text style={styles.note}>
            Search 1000+ recipes easily With one click
          </Text>
        </View>
      </View>
      <Text style={styles.heading}>Categories</Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={MEAL_FILTERS}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.categoriesItems}>
              <View style={styles.card}>
                <Image source={item.icon} style={styles.icon} />
              </View>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Text style={styles.heading}>Trendy Recipes</Text>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop: 5}}
          horizontal
          data={recipes}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.recipesitem}
              onPress={() => navigation.navigate('Details', {data: item})}>
              <Image
                source={{uri: item.recipe.image}}
                style={styles.recipeImage}
              />
              <View style={[styles.transparentView, {borderRadius: 10}]}>
                <Text style={styles.recipelabel}>{item.recipe.label}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
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
    marginTop: 20,
    color: '#000',
  },
  categoriesItems: {
    height: 120,
    width: 120,
    marginLeft: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  card: {
    height: '70%',
    width: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    borderRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  icon: {
    width: '50%',
    height: '50%',
    tintColor: '#05b681',
  },
  title: {
    fontSize: 17,
    alignSelf: 'center',
    margin: 4,
    fontWeight: '500',
    color: '#000',
  },
  recipesitem: {
    height: 200,
    width: 150,
    margin: 10,
    borderRadius: 15,
  },
  recipeImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
    resizeMode: 'contain',
  },
  recipelabel: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    width: '90%',
  },
});

export default Home;
