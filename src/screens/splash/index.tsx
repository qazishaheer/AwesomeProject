import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from '../splash/style';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.splash}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;
