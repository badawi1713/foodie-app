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
import LoginForm from '../../components/LoginForm';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        title="Sign In"
        subtitle="Find your best ever meal"
      />
      <LoginForm navigation={navigation} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
});
