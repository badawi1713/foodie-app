import React from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

import Button from '../Button';

const LoginForm = ({navigation}) => {
  return (
    <View style={styles.formContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.formContent}>
        <View style={styles.formGroup}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            style={styles.textInput}
            textContentType="emailAddress"
            placeholder="Type your email address"
            autoCorrect={false}
            keyboardType="default"
            returnKeyLabel="next"
            returnKeyType="next"
            enablesReturnKeyAutomatically
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            textContentType="password"
            placeholder="Type your password"
            autoCorrect={false}
            keyboardType="default"
            returnKeyLabel="next"
            returnKeyType="next"
            enablesReturnKeyAutomatically
            secureTextEntry
          />
        </View>

        <View style={styles.formButton}></View>
        <View style={styles.formButton}>
          <Button
            onPress={() => navigation.navigate('Home')}
            buttonText="Sign In"
            variant="primary"
          />
        </View>
        <View style={styles.formButton}>
          <Button
            onPress={() => navigation.navigate('Register')}
            buttonText="Create New Account"
            variant="secondary"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginForm;

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
