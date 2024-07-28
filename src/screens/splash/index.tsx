import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import styles from '../splash/style';
import {SCREEN} from '../../constants/screen';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation: any = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(SCREEN.LOGIN);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

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
