import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ImageBorder from '../../../assets/icons/imageBorder.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation}) => {
  const [newTasteMenuActive, setNewTasteMenuActive] = useState(true);
  const [popularMenuActive, setPopularMenuActive] = useState(false);

  const newTasteMenuHandler = () => {
    setNewTasteMenuActive(true);
    setPopularMenuActive(false);
  };

  const popularMenuHandler = () => {
    setNewTasteMenuActive(false);
    setPopularMenuActive(true);
  };
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

      <View style={styles.profileMenuContainer}>
        <View style={styles.mainNavigation}>
          <View style={styles.mainNavigationItem}>
            <TouchableOpacity onPress={newTasteMenuHandler}>
              <Text
                style={
                  newTasteMenuActive
                    ? styles.activeNavigation
                    : styles.unactiveNavigation
                }>
                Account
              </Text>
            </TouchableOpacity>
            <View style={newTasteMenuActive && styles.activeNavigationMarker} />
          </View>
          <View style={styles.mainNavigationItem}>
            <TouchableOpacity onPress={popularMenuHandler}>
              <Text
                style={
                  popularMenuActive
                    ? styles.activeNavigation
                    : styles.unactiveNavigation
                }>
                Foodie
              </Text>
            </TouchableOpacity>
            <View style={popularMenuActive && styles.activeNavigationMarker} />
          </View>
        </View>

        <View style={styles.menuGroup}>
          {newTasteMenuActive ? (
            <>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Edit Profile</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  color={'#8D92A3'}
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Home Address</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  color={'#8D92A3'}
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Security</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  color={'#8D92A3'}
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Payments</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  color={'#8D92A3'}
                  size={24}
                />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Rate App</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  color={'#8D92A3'}
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Help Center</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  color={'#8D92A3'}
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Privacy & Policy</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  color={'#8D92A3'}
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Terms & Conditions</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  color={'#8D92A3'}
                  size={24}
                />
              </TouchableOpacity>
            </>
          )}
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
  profileMenuContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
  },
  mainNavigation: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
    paddingVertical: 16,
    width: '100%',
    paddingHorizontal: 24,
  },
  mainNavigationItem: {
    alignItems: 'center',
    marginRight: 24,
  },
  activeNavigation: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#020202',
  },
  unactiveNavigation: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#8D92A3',
  },
  activeNavigationMarker: {
    borderWidth: 3,
    width: 40,
    borderRadius: 8,
    position: 'absolute',
    top: '160%',
  },
  menuGroup: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  menuText: {
    color: '#020202',
    fontFamily: 'Poppins',
    fontSize: 14,
  },
});
