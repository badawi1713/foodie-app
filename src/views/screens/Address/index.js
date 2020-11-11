import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Header from '../../components/Header';
import AddressForm from '../../components/AddressForm';

const Address = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        title="Address"
        subtitle="Make sure it’s valid"
        backIcon
      />
      <AddressForm navigation={navigation} />
    </SafeAreaView>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFC',
    flex: 1,
  },
});
