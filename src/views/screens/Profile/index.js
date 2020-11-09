import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
} from 'react-native';
import ImageBorder from '../../../assets/icons/imageBorder.svg';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1313033091951198208/ndIyvCyQ_400x400.jpg',
            }}
          />
          <ImageBorder />
        </View>
        <View>
          <Text style={styles.profileName}>Dzaky Badawi</Text>
          <Text style={styles.profileEmail}>dzaky.badawi@gmail.com</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  profileHeader: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 26,
  },
  profileImageContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 90,
    height: 90,
    position: 'absolute',
    borderRadius: 45,
  },
  profileName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 6,
    color: '#020202',
  },
  profileEmail: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    textAlign: 'center',
    color: '#8D92A3',
  },
});
