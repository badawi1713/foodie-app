import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackArrow from '../../../assets/icons/backArrowWhite.svg';
import NumberFormat from 'react-number-format';

const FoodDetail = ({navigation, route}) => {
  const {item} = route.params;
  const price = item.price;
  const [itemValue, setItemValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);

  useEffect(() => {
    const totalPriceHandler = (price, item) => {
      setPriceValue(price * item);
    };
    totalPriceHandler(price, itemValue);
  }, [price, itemValue]);

  const addItemHandler = async () => {
    if (itemValue > 19) {
      await setItemValue(itemValue);
    } else {
      await setItemValue(itemValue + 1);
    }
  };

  const removeItemHandler = async () => {
    if (itemValue < 1 || itemValue === 0) {
      await setItemValue(0);
    } else {
      await setItemValue(itemValue - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainImageContainer}>
        <View style={styles.backgroundLayer} />
        <Image
          style={styles.mainImage}
          source={{
            uri: item.uri,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backArrowIcon}>
          <BackArrow />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.titleText}>{item.name}</Text>
              <View style={styles.rating}>
                <View style={styles.ratingIcon}>
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
                <Text style={styles.ratingValue}>{item.rating}</Text>
              </View>
            </View>
            <View style={styles.addItemButtonGroup}>
              <TouchableOpacity
                disabled={itemValue === 0}
                onPress={removeItemHandler}
                style={
                  itemValue === 0
                    ? styles.addItemButtonDisabled
                    : styles.addItemButton
                }>
                <Text
                  style={
                    itemValue === 0
                      ? styles.addItemButtonTextDisabled
                      : styles.addItemButtonText
                  }>
                  -
                </Text>
              </TouchableOpacity>
              <Text style={styles.itemValue}>{itemValue}</Text>
              <TouchableOpacity
                disabled={itemValue === 20}
                onPress={addItemHandler}
                style={
                  itemValue === 20
                    ? styles.addItemButtonDisabled
                    : styles.addItemButton
                }>
                <Text
                  style={
                    itemValue === 20
                      ? styles.addItemButtonTextDisabled
                      : styles.addItemButtonText
                  }>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bodyContent}>
            <Text style={styles.description}>{item.description}</Text>
            <View>
              <Text style={styles.ingredientsTitle}>Ingredients:</Text>
              <Text style={styles.ingredients}>{item.ingredients}</Text>
            </View>
          </View>

          <View style={styles.totalPriceContent}>
            <View>
              <Text style={styles.totalPriceText}>Total Price:</Text>
              <NumberFormat
                value={priceValue}
                displayType={'text'}
                thousandSeparator
                prefix={'Rp '}
                decimalScale={2}
                fixedDecimalScale
                decimalSeparator={'.'}
                renderText={(value) => (
                  <Text style={styles.totalPriceValue}>{value}</Text>
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('SuccessOrder')}
              style={styles.orderButton}>
              <Text style={styles.orderButtonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainImageContainer: {
    flex: 1,
  },
  backgroundLayer: {
    backgroundColor: '#000',
    zIndex: 0,
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
  mainImage: {
    width: '100%',
    height: 360,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
  },
  backArrowIcon: {
    color: '#FFF',
    position: 'absolute',
    zIndex: 1,
    top: '6.7%',
    left: 16,
  },
  mainContentContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginTop: -30,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingHorizontal: 16,
  },
  headerContent: {
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
  },
  rating: {
    flexDirection: 'row',
  },
  ratingIcon: {
    flexDirection: 'row',
  },
  ratingValue: {
    marginLeft: 4,
    fontSize: 12,
    fontFamily: 'Poppins',
    color: '#8D92A3',
  },
  addItemButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
  },
  addItemButton: {
    height: 26,
    width: 26,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#020202',
  },
  addItemButtonDisabled: {
    height: 26,
    width: 26,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#8D92A3',
  },
  addItemButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: '#020202',
  },
  addItemButtonTextDisabled: {
    fontSize: 16,
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: '#8D92A3',
  },
  itemValue: {
    fontSize: 16,
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  bodyContent: {
    marginTop: 12,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins',
    lineHeight: 24,
    color: '#8D92A3',
    marginBottom: 16,
  },
  ingredientsTitle: {
    fontSize: 14,
    fontFamily: 'Poppins',
    lineHeight: 24,
    color: '#020202',
  },
  ingredients: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#8D92A3',
  },
  totalPriceContent: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalPriceText: {
    fontSize: 13,
    fontFamily: 'Poppins',
    color: '#8D92A3',
  },
  totalPriceValue: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: '#020202',
  },
  orderButton: {
    paddingVertical: 12,
    paddingHorizontal: 44,
    backgroundColor: '#FFC700',
    borderRadius: 8,
  },
  orderButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
});
