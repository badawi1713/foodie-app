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

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profile" subtitle="John Doe" />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
});
