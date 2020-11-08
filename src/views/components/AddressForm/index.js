import React from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

import Button from '../Button';

const AddressForm = ({navigation}) => {
  return (
    <View style={styles.formContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.formContent}>
        <View style={styles.formGroup}>
          <Text style={styles.inputLabel}>Phone No.</Text>
          <TextInput
            style={styles.textInput}
            textContentType="telephoneNumber"
            placeholder="Type your phone number"
            autoCorrect={false}
            keyboardType="name-phone-pad"
            returnKeyLabel="next"
            returnKeyType="next"
            enablesReturnKeyAutomatically
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.inputLabel}>Address</Text>
          <TextInput
            style={styles.textInput}
            textContentType="fullStreetAddress"
            placeholder="Type your address"
            autoCorrect={false}
            keyboardType="default"
            returnKeyLabel="next"
            returnKeyType="next"
            enablesReturnKeyAutomatically
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.inputLabel}>House No.</Text>
          <TextInput
            style={styles.textInput}
            textContentType="none"
            placeholder="Type your house number"
            autoCorrect={false}
            keyboardType="default"
            returnKeyLabel="next"
            returnKeyType="next"
            enablesReturnKeyAutomatically
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.inputLabel}>City</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Select your city"
            autoCorrect={false}
            keyboardType="default"
            returnKeyLabel="next"
            returnKeyType="next"
            enablesReturnKeyAutomatically
          />
        </View>

        <View style={styles.formButton}></View>
        <View style={styles.formButton}>
          <Button
            onPress={() => navigation.navigate('Home')}
            buttonText="Sign Up Now"
            variant="primary"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddressForm;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    paddingHorizontal: 24,
    flex: 1,
  },
  formContent: {
    marginTop: 26,
  },
  formGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  textInput: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
    width: '100%',
  },
  formButton: {
    marginBottom: 16,
  },
});
