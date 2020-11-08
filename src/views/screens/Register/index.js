import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
} from 'react-native';

import Header from '../../components/Header';
import RegisterForm from '../../components/RegisterForm';

const Register = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        title="Sign Up"
        subtitle="Register and eat"
        backIcon
      />
      <RegisterForm navigation={navigation} />
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFC',
    flex: 1,
  },
});
