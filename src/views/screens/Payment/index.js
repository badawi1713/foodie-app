import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';

const Payment = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        backIcon
        title="Payment"
        subtitle="You deserve better meal"
      />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Item Ordered</Text>
          <View style={styles.itemGroup}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.itemImage}
                source={{
                  uri:
                    'https://cdn.vox-cdn.com/thumbor/q6r35fpNM2YqnyU8FGcxuPN2AtU=/0x315:6016x3699/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47473896/shutterstock_231345451.0.0.jpg',
                }}
              />
              <View>
                <Text style={styles.itemName}>Takoyaki</Text>
                <Text style={styles.itemInfo}>Rp 12,000.00</Text>
              </View>
            </View>
            <Text style={styles.itemInfo}>1 items</Text>
          </View>
          <Text style={styles.title}>Detail Transaction</Text>
          <View style={styles.detailInfoGroup}>
            <Text style={styles.detailInfoTitle}>Takoyaki</Text>
            <Text style={styles.detailInfoContent}>Rp 12,000.00</Text>
          </View>
          <View style={styles.detailInfoGroup}>
            <Text style={styles.detailInfoTitle}>Driver</Text>
            <Text style={styles.detailInfoContent}>Rp 10,000.00</Text>
          </View>
          <View style={styles.detailInfoGroup}>
            <Text style={styles.detailInfoTitle}>Tax 10%</Text>
            <Text style={styles.detailInfoContent}>Rp 1,200.00</Text>
          </View>
          <View style={styles.detailInfoGroup}>
            <Text style={styles.detailInfoTitle}>Total Price</Text>
            <Text style={styles.detailInfoPrice}>Rp 23,200.00</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Deliver to:</Text>
          <View style={styles.detailInfoGroup}>
            <Text style={styles.detailInfoTitle}>Name</Text>
            <Text style={styles.detailInfoContent}>Dzaky Badawi</Text>
          </View>
          <View style={styles.detailInfoGroup}>
            <Text style={styles.detailInfoTitle}>Phone No.</Text>
            <Text style={styles.detailInfoContent}>082136526563</Text>
          </View>
          <View style={styles.detailInfoGroup}>
            <Text style={styles.detailInfoTitle}>Address</Text>
            <Text style={styles.detailInfoContent}>Jl. Sukun</Text>
          </View>
          <View style={styles.detailInfoGroup}>
            <Text style={styles.detailInfoTitle}>House No.</Text>
            <Text style={styles.detailInfoContent}>E-4</Text>
          </View>
          <View style={styles.detailInfoGroup}>
            <Text style={styles.detailInfoTitle}>City</Text>
            <Text style={styles.detailInfoContent}>Bantul</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('PaymentMethod')}
            variant="primary"
            buttonText="Checkout Now"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  contentContainer: {
    backgroundColor: '#FFF',
    marginTop: 24,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    color: '#020202',
    fontSize: 14,
    fontFamily: 'Poppins',
    marginBottom: 10,
  },
  itemGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  itemName: {
    color: '#020202',
    fontSize: 16,
    fontFamily: 'Poppins',
  },
  itemInfo: {
    color: '#8D92A3',
    fontSize: 13,
    fontFamily: 'Poppins',
  },
  detailInfoGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  detailInfoTitle: {
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  detailInfoContent: {
    color: '#020202',
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  detailInfoPrice: {
    color: '#1ABC9C',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  buttonContainer: {
    marginVertical: 24,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});
