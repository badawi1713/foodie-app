import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import NumberFormat from 'react-number-format';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header';

import {
  mainFoodData,
  newTasteData,
  popularData,
  recommendedData,
} from '../../../utils/data/dummyData';

const Home = ({navigation}) => {
  const [newTasteMenuActive, setNewTasteMenuActive] = useState(true);
  const [popularMenuActive, setPopularMenuActive] = useState(false);
  const [recommendedMenuActive, setRecommendedMenuActive] = useState(false);

  const newTasteMenuHandler = () => {
    setNewTasteMenuActive(true);
    setPopularMenuActive(false);
    setRecommendedMenuActive(false);
  };

  const popularMenuHandler = () => {
    setNewTasteMenuActive(false);
    setPopularMenuActive(true);
    setRecommendedMenuActive(false);
  };

  const recommendedMenuHandler = () => {
    setNewTasteMenuActive(false);
    setPopularMenuActive(false);
    setRecommendedMenuActive(true);
  };

  const MainFoodCard = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('FoodDetail', {item: item})}
      style={styles.mainFoodCard}>
      <Image source={{uri: item.uri}} style={styles.mainFoodImage} />
      <View style={styles.mainFoodContent}>
        <Text style={styles.mainFoodTitle}>{item.name}</Text>
        <View style={styles.mainFoodRating}>
          <View style={styles.mainFoodRatingIcon}>
            {item.rating === 0 || item.rating < 1 ? (
              <>
                <Ionicons name="star-half" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#ECECEC" />
                <Ionicons name="star" size={16} color="#ECECEC" />
                <Ionicons name="star" size={16} color="#ECECEC" />
                <Ionicons name="star" size={16} color="#ECECEC" />
              </>
            ) : item.rating === 1 || item.rating < 2 ? (
              <>
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#ECECEC" />
                <Ionicons name="star" size={16} color="#ECECEC" />
                <Ionicons name="star" size={16} color="#ECECEC" />
                <Ionicons name="star" size={16} color="#ECECEC" />
              </>
            ) : item.rating === 2 || item.rating < 3 ? (
              <>
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#ECECEC" />
                <Ionicons name="star" size={16} color="#ECECEC" />
                <Ionicons name="star" size={16} color="#ECECEC" />
              </>
            ) : item.rating === 3 || item.rating < 4 ? (
              <>
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#ECECEC" />
                <Ionicons name="star" size={16} color="#ECECEC" />
              </>
            ) : item.rating === 4 || item.rating < 5 ? (
              <>
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#ECECEC" />
              </>
            ) : item.rating === 5 ? (
              <>
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#FFC700" />
                <Ionicons name="star" size={16} color="#FFC700" />
              </>
            ) : (
              <>
                <Ionicons name="star" size={16} color="#ECECEC" />
                <Ionicons name="star" size={16} color="#ECECEC" />
                <Ionicons name="star" size={16} color="#ECECEC" />
                <Ionicons name="star" size={16} color="#ECECEC" />
                <Ionicons name="star" size={16} color="#ECECEC" />
              </>
            )}
          </View>

          <Text style={styles.mainFoodRatingValue}>
            {Number(item.rating).toFixed(1)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const NewTestFoodCard = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('FoodDetail', {item: item})}
      style={styles.subcontentCard}>
      <Image source={{uri: item.uri}} style={styles.subFoodImage} />
      <View style={styles.subFoodContent}>
        <Text style={styles.subFoodTitle}>{item.name}</Text>
        <NumberFormat
          value={item.price}
          displayType={'text'}
          thousandSeparator
          prefix={'Rp '}
          decimalScale={2}
          fixedDecimalScale
          decimalSeparator={'.'}
          renderText={(value) => (
            <Text style={styles.subFoodPrice}>{value}</Text>
          )}
        />
      </View>
      <View style={styles.subFoodRating}>
        <View style={styles.subFoodRatingIcon}>
          {item.rating === 0 || item.rating < 1 ? (
            <>
              <Ionicons name="star-half" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#ECECEC" />
              <Ionicons name="star" size={16} color="#ECECEC" />
              <Ionicons name="star" size={16} color="#ECECEC" />
              <Ionicons name="star" size={16} color="#ECECEC" />
            </>
          ) : item.rating === 1 || item.rating < 2 ? (
            <>
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#ECECEC" />
              <Ionicons name="star" size={16} color="#ECECEC" />
              <Ionicons name="star" size={16} color="#ECECEC" />
              <Ionicons name="star" size={16} color="#ECECEC" />
            </>
          ) : item.rating === 2 || item.rating < 3 ? (
            <>
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#ECECEC" />
              <Ionicons name="star" size={16} color="#ECECEC" />
              <Ionicons name="star" size={16} color="#ECECEC" />
            </>
          ) : item.rating === 3 || item.rating < 4 ? (
            <>
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#ECECEC" />
              <Ionicons name="star" size={16} color="#ECECEC" />
            </>
          ) : item.rating === 4 || item.rating < 5 ? (
            <>
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#ECECEC" />
            </>
          ) : item.rating === 5 ? (
            <>
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#FFC700" />
              <Ionicons name="star" size={16} color="#FFC700" />
            </>
          ) : (
            <>
              <Ionicons name="star" size={16} color="#ECECEC" />
              <Ionicons name="star" size={16} color="#ECECEC" />
              <Ionicons name="star" size={16} color="#ECECEC" />
              <Ionicons name="star" size={16} color="#ECECEC" />
              <Ionicons name="star" size={16} color="#ECECEC" />
            </>
          )}
        </View>
        <Text style={styles.subFoodRatingValue}>
          {Number(item.rating).toFixed(1)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderMainFoodCard = ({item}) => <MainFoodCard item={item} />;

  const renderNewTestFoodCard = ({item}) => <NewTestFoodCard item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Foodie" subtitle="Let’s get some foods" profileImage />
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.mainFoodContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={mainFoodData}
          renderItem={renderMainFoodCard}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.mainContentContainer}>
        <View style={styles.mainNavigation}>
          <View style={styles.mainNavigationItem}>
            <TouchableOpacity onPress={newTasteMenuHandler}>
              <Text
                style={
                  newTasteMenuActive
                    ? styles.activeNavigation
                    : styles.unactiveNavigation
                }>
                New Taste
              </Text>
            </TouchableOpacity>
            <View style={newTasteMenuActive && styles.activeNavigationMarker} />
          </View>
          <View style={styles.mainNavigationItem}>
            <TouchableOpacity onPress={popularMenuHandler}>
              <Text
                style={
                  popularMenuActive
                    ? styles.activeNavigation
                    : styles.unactiveNavigation
                }>
                Popular
              </Text>
            </TouchableOpacity>
            <View style={popularMenuActive && styles.activeNavigationMarker} />
          </View>
          <View style={styles.mainNavigationItem}>
            <TouchableOpacity onPress={recommendedMenuHandler}>
              <Text
                style={
                  recommendedMenuActive
                    ? styles.activeNavigation
                    : styles.unactiveNavigation
                }>
                Recommended
              </Text>
            </TouchableOpacity>
            <View
              style={recommendedMenuActive && styles.activeNavigationMarker}
            />
          </View>
        </View>
        <View style={styles.subcontentContainer}>
          {newTasteMenuActive ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={newTasteData}
              renderItem={renderNewTestFoodCard}
              keyExtractor={(item) => item.id}
            />
          ) : popularMenuActive ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={popularData}
              renderItem={renderNewTestFoodCard}
              keyExtractor={(item) => item.id}
            />
          ) : recommendedMenuActive ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={recommendedData}
              renderItem={renderNewTestFoodCard}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <></>
          )}
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  mainFoodContainer: {
    flex: 1,
    marginVertical: 24,
  },
  mainFoodCard: {
    alignSelf: 'center',
    width: 200,
    height: 210,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginHorizontal: 24,
    shadowColor: '#F2F2F2',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,
    elevation: 2,
  },
  mainFoodImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  mainFoodContent: {
    padding: 12,
  },
  mainFoodTitle: {
    fontSize: 16,
    fontFamily: 'Poppins',
  },
  mainFoodRating: {
    flexDirection: 'row',
  },
  mainFoodRatingIcon: {
    flexDirection: 'row',
  },
  mainFoodRatingValue: {
    marginLeft: 4,
    fontSize: 12,
    fontFamily: 'Poppins',
    color: '#8D92A3',
  },
  mainContentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
    paddingVertical: 16,
    width: '100%',
    paddingHorizontal: 24,
  },
  mainNavigationItem: {
    alignItems: 'center',
  },
  activeNavigation: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#020202',
  },
  unactiveNavigation: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#8D92A3',
  },
  activeNavigationMarker: {
    borderWidth: 3,
    width: 40,
    borderRadius: 8,
    position: 'absolute',
    top: '160%',
  },
  subcontentContainer: {
    flex: 1,
  },
  subcontentCard: {
    marginTop: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  subFoodImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  subFoodContent: {
    marginRight: 'auto',
  },
  subFoodTitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  subFoodPrice: {
    fontFamily: 'Poppins',
    fontSize: 13,
    color: '#8D92A3',
  },
  subFoodRating: {
    flexDirection: 'row',
  },
  subFoodRatingIcon: {
    flexDirection: 'row',
    marginRight: 4,
  },
  subFoodRatingValue: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#8D92A3',
  },
});
