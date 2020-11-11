import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import MadeOrderSVG from '../../../assets/images/made-order.svg';

const SuccessOrder = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <MadeOrderSVG style={styles.illustrationImage} />
      <Text style={styles.mainMessage}>You've Made Order</Text>
      <Text style={styles.subMessage}>
        Just stay at home while we are preparing your best foods
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Order Other Foods</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Order')}
        style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>View My Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  container: {
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
  secondaryButton: {
    backgroundColor: '#8D92A3',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 36,
    width: 200,
    height: 45,
  },
  secondaryButtonText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: '#F9FAFF',
  },
});
