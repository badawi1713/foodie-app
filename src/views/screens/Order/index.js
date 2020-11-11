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
import {mainFoodData, popularData} from '../../../utils/data/dummyData';
import Header from '../../components/Header';
import EmptyOrderSVG from '../../../assets/images/empty-order.svg';

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
      {mainFoodData.length === 0 && popularData.length === 0 ? (
        <View style={styles.emptyOrderContainer}>
          <EmptyOrderSVG style={styles.illustrationImage} />
          <Text style={styles.mainMessage}>Ouch! Hungry</Text>
          <Text style={styles.subMessage}>
            Seems like you have not ordered any food yet
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Find Foods</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
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
                <View
                  style={newTasteMenuActive && styles.activeNavigationMarker}
                />
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
                <View
                  style={popularMenuActive && styles.activeNavigationMarker}
                />
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
        </>
      )}
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
  emptyOrderContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 70,
  },
  illustrationImage: {
    marginBottom: 30,
  },
  mainMessage: {
    fontSize: 20,
    color: '#020202',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  subMessage: {
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: '#FFC700',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 36,
    marginBottom: 12,
    width: 200,
    height: 45,
  },
  primaryButtonText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
});
