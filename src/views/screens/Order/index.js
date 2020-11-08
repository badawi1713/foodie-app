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

const Order = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Your Orders" subtitle="Wait for the best meal" />
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
});
