import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from 'react-native';
import PaymentSVG from '../../../assets/images/payment-method.svg';

const SuccessOrder = ({navigation}) => {
  const showToast = () => {
    ToastAndroid.show(
      'Sorry, no payment method available yet.',
      ToastAndroid.SHORT,
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <PaymentSVG style={styles.illustrationImage} />
      <Text style={styles.mainMessage}>Finish Your Payment</Text>
      <Text style={styles.subMessage}>
        Please select your favorite payment method
      </Text>
      <TouchableOpacity onPress={showToast} style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Payment Method</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SuccessOrder')}
        style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Continue</Text>
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
