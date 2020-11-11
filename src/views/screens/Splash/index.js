import React, {useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import Logo from '../../../assets/icons/logo.svg';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Logo width={100} height={100} />
      <Text style={[styles.title, {fontFamily: 'Poppins-Medium'}]}>Foodie</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC700',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 32,
    color: '#020202',
  },
});

export default SplashScreen;
