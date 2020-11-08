import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({buttonText, variant, onPress}) => {
  return variant === 'primary' ? (
    <TouchableOpacity style={styles.buttonContainerPrimary} onPress={onPress}>
      <Text style={styles.buttonTextPrimary}>{buttonText}</Text>
    </TouchableOpacity>
  ) : variant === 'secondary' ? (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainerSecondary}>
      <Text style={styles.buttonTextSecondary}>{buttonText}</Text>
    </TouchableOpacity>
  ) : variant === 'danger' ? (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainerDanger}>
      <Text style={styles.buttonTextDanger}>{buttonText}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainerDefault}>
      <Text style={styles.buttonTextDefault}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainerPrimary: {
    width: '100%',
    backgroundColor: '#FFC700',
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonTextPrimary: {
    color: '#020202',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  buttonContainerSecondary: {
    width: '100%',
    backgroundColor: '#8D92A3',
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonTextSecondary: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
});
