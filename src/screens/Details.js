import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
const AnimatedBtn=Animatable.createAnimatableComponent(TouchableOpacity)

const Details = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(0);
  
  return (
    <View style={styles.container}>
      <Animatable.Image
        source={{uri: route.params.data.recipe.image}}
        style={styles.banner}
        animation={'slideInUp'}
        easing={'ease-in-out-sine'}
      />
      <AnimatedBtn
        animation={'slideInLeft'}
        delay={200}
        duration={1500}
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Image source={require('../images/back.png')} style={styles.backIcon} />
      </AnimatedBtn>
      <Animatable.Text animation={'slideInUp'} style={styles.title}> {route.params.data.recipe.label}</Animatable.Text>
      <Animatable.Text animation={'slideInUp'} style={styles.source}>
        {'added by ' + route.params.data.recipe.source}
      </Animatable.Text>
      <Animatable.Text animation={'fadeInLeft'} delay={1000} style={styles.calories}>{'Calories: '}<Text style={{color:'orange'}}>{route.params.data.recipe.calories}</Text></Animatable.Text>
      <Animatable.Text animation={'fadeInLeft'} delay={1000}style={styles.calories}>{'Toral Weight: '}<Text style={{color:'black'}}>{route.params.data.recipe.totalWeight}</Text></Animatable.Text>
      <Animatable.Text animation={'fadeInLeft'}  delay={1000}style={styles.calories}>{'Meal Type: '}<Text style={{color:'green'}}>{route.params.data.recipe.mealType}</Text></Animatable.Text>
      <View>
        <FlatList
          data={[
            'Health',
            'Cautions',
            'Ingredients',
            'Diet',
            'Meal Type',
            'Cuisines',
            'Dish Type',
          ]}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{marginTop: 10}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.typeItem,
                  {
                    borderWidth: selectedTab == index ? 0 : 0.5,
                    borderColor: '#9e9e9e',
                    marginLeft:selectedTab==index ? 20:20,
                    backgroundColor: selectedTab == index ? '#05b681' : 'white',
                  },
                ]}
                onPress={() => setSelectedTab(index)}>
                <Text style={{color: selectedTab == index ? 'white' : 'black'}}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <FlatList
        data={
          selectedTab == 0
             ? route.params.data.recipe.healthLabels
            : selectedTab == 1
            ? route.params.data.recipe.cautions
            : selectedTab == 2
            ? route.params.data.recipe.ingredientLines
            : selectedTab == 3
            ? route.params.data.recipe.dietLabels
            : selectedTab == 4
            ? route.params.data.recipe.mealType
            : selectedTab == 5
            ? route.params.data.recipe.cuisneType
            : route.params.data.recipe.dishType
        }
        renderItem={({item,index})=>{
          return(
            <Animatable.View animation={'slideInUp'}>
              <Text style={styles.labels}>{item}</Text>
            </Animatable.View>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    position: 'absolute',
    top: 8,
    left: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    height: 10,
    width: 10,
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: '800',
    width: '90%',
    marginTop: 10,
    color: '#000',
  },
  source: {
    margin: 10,
    marginLeft: 28,
    color: '#252525',
    fontSize:15
  },
  typeItem: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    borderRadius: 8,
    marginTop:10
  },
  labels:{
    width:'90%',
    alignSelf:'center',
    borderWidth:.5,
    height:40,
    marginTop:15,
    justifyContent:"center",
    paddingTop:10,
    paddingLeft:10,
    borderColor:'#9e9e9e',
    color:'#000'
  },
  calories:{
    marginLeft:28,
    fontSize:18,
    marginTop:10,
    color:'#000',
    fontWeight:'500'
  }
});

export default Details;
