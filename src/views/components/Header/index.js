import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import BackArrow from '../../../assets/icons/backArrow.svg';
const Header = ({title, subtitle, backIcon, profileImage, navigation}) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.headerContent}>
        {backIcon && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backArrowIcon}>
            <BackArrow width={24} height={24} />
          </TouchableOpacity>
        )}
        <View style={styles.textContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      {profileImage && (
        <View style={styles.profileImageContainer}>
          {/* <View style={styles.profileImage} /> */}
          <Image
            style={styles.profileImage}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1313033091951198208/ndIyvCyQ_400x400.jpg',
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 30,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  headerContent: {
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrowIcon: {
    marginRight: 26,
  },
  textContent: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
  },
  subtitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  profileImageContainer: {
    backgroundColor: '#ECECEC',
    borderRadius: 8,
  },
  profileImage: {
    backgroundColor: '#FFC700',
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});

export default Header;
