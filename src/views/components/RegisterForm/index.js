import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Button from '../Button';
import ImageBorder from '../../../assets/icons/imageBorder.svg';

const RegisterForm = ({navigation}) => {
  return (
    <View style={styles.formContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.formContent}>
        <View style={styles.imagePickerContainer}>
          <ImageBorder styles={styles.imageBorder} width={110} height={110} />
          <View style={styles.imagePicker}>
            <Text style={styles.imagePlaceholder}>Add Photo</Text>
          </View>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.inputLabel}>Full Name</Text>
          <TextInput
            style={styles.textInput}
            textContentType="name"
            placeholder="Type your full name"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyLabel="next"
            returnKeyType="next"
            enablesReturnKeyAutomatically
          />
        </View>
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
        <View style={styles.formGroup}>
          <Text style={styles.inputLabel}>Password Confirm</Text>
          <TextInput
            style={styles.textInput}
            textContentType="password"
            placeholder="Confirm your password"
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
            onPress={() => navigation.navigate('Address')}
            buttonText="Continue"
            variant="primary"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterForm;

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
  imagePickerContainer: {
    marginBottom: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  imageBorder: {
    zIndex: -1,
  },
  imagePicker: {
    position: 'absolute',
    zIndex: 1,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    fontSize: 14,
    color: '#8D92A3',
    fontFamily: 'Poppins-Light',
    width: '60%',
    textAlign: 'center',
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
