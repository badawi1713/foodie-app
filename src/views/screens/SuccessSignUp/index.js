import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import SuccessSignupSVG from '../../../assets/images/success-signup.svg';

const SuccessSignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SuccessSignupSVG style={styles.illustrationImage} />
      <Text style={styles.mainMessage}>Yeay! Completed</Text>
      <Text style={styles.subMessage}>
        Now you are able to order some foods as a self-reward
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Order Other Foods</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SuccessSignUp;

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
});
