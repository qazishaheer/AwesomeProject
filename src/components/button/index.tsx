import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {THEME} from '../../constants/theme';
import {styles} from './styles';

interface IButton {
  isDataAvailable?: boolean;
  title?: string;
  onPress?: () => void;
}

const Button = ({isDataAvailable, title, onPress}: IButton): JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isDataAvailable}
      style={styles.buttonContainer}>
      {isDataAvailable ? (
        <ActivityIndicator size="small" color={THEME.WHITE} />
      ) : (
        <Text style={styles.buttonTitle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
