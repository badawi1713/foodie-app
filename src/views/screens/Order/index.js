import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import NumberFormat from 'react-number-format';
import {mainFoodData, popularData} from '../../../utils/dummyData';
import Header from '../../components/Header';

const Order = ({navigation}) => {
  const [newTasteMenuActive, setNewTasteMenuActive] = useState(true);
  const [popularMenuActive, setPopularMenuActive] = useState(false);

  const newTasteMenuHandler = () => {
    setNewTasteMenuActive(true);
    setPopularMenuActive(false);
  };

  const popularMenuHandler = () => {
    setNewTasteMenuActive(false);
    setPopularMenuActive(true);
  };

  const renderInProgressOrder = ({item}) => (
    <View style={styles.orderItem}>
      <Image
        style={styles.orderItemImage}
        source={{
          uri: item.uri,
        }}
      />
      <View>
        <Text style={styles.orderItemTitle}>{item.name}</Text>
        <NumberFormat
          value={item.price}
          displayType={'text'}
          thousandSeparator
          prefix={'Rp '}
          decimalScale={2}
          fixedDecimalScale
          decimalSeparator={'.'}
          renderText={(value) => (
            <Text style={styles.orderItemPrice}>
              {Math.random().toFixed(0) * (5 - 2 + 1) + 2} items • Rp {value}
            </Text>
          )}
        />
      </View>
    </View>
  );

  const renderPostProgressOrder = ({item}) => (
    <View style={styles.postOrderItem}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={styles.orderItemImage}
          source={{
            uri: item.uri,
          }}
        />
        <View>
          <Text style={styles.orderItemTitle}>{item.name}</Text>
          <NumberFormat
            value={item.price}
            displayType={'text'}
            thousandSeparator
            prefix={'Rp '}
            decimalScale={2}
            fixedDecimalScale
            decimalSeparator={'.'}
            renderText={(value) => (
              <Text style={styles.orderItemPrice}>
                {Math.random().toFixed(0) * (5 - 2 + 1) + 2} items • Rp {value}
              </Text>
            )}
          />
        </View>
      </View>
      <View>
        <Text style={styles.orderDate}>Oct 12, 18:00</Text>
        <Text style={styles.orderStatus}>Success</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Your Orders" subtitle="Wait for the best meal" />

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
                In Progress
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
                Post Progress
              </Text>
            </TouchableOpacity>
            <View style={popularMenuActive && styles.activeNavigationMarker} />
          </View>
        </View>

        <View style={styles.orderItemContainer}>
          {newTasteMenuActive ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={mainFoodData}
              renderItem={renderInProgressOrder}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={popularData}
              renderItem={renderPostProgressOrder}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  mainContentContainer: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  mainNavigation: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
    paddingVertical: 16,
    width: '100%',
    paddingHorizontal: 24,
  },
  mainNavigationItem: {
    alignItems: 'center',
    marginRight: 24,
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
  orderItemContainer: {
    marginTop: 16,
    flex: 1,
    paddingHorizontal: 24,
  },
  orderItem: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  postOrderItem: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderItemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  orderItemTitle: {fontSize: 16, fontFamily: 'Poppins', color: '#020202'},
  orderItemPrice: {fontSize: 13, fontFamily: 'Poppins', color: '#8D92A3'},

  orderDate: {
    alignSelf: 'flex-end',

    textAlign: 'right',

    fontSize: 10,
    fontFamily: 'Poppins',
    color: '#8D92A3',
  },
  orderStatus: {
    textAlign: 'right',

    fontSize: 10,
    fontFamily: 'Poppins',
    color: '#46D943',
  },
});
