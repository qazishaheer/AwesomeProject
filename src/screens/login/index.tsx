import React, {useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './styles';
import {THEME} from '../../constants/theme';
import Button from '../../components/button';
import {SCREEN} from '../../constants/screen';

const Login = () => {
  const navigation: any = useNavigation();

  const [isSecure, setIsSecure] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'} />
      <ScrollView
        style={styles.innerContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoImageView}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.titlesView}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subTitle}>Please enter your account here!</Text>
        </View>
        <View style={styles.textInputMainView}>
          <View style={styles.labelView}></View>
          <View style={styles.textInputView}>
            <View style={styles.iconView}>
              <Image
                source={require('../../assets/icons/profile.png')}
                style={styles.leftIconView}
                resizeMode="contain"
              />
            </View>
            <View style={styles.textAreaView}>
              <TextInput
                placeholder={'User Name'}
                placeholderTextColor={THEME.MAIN_SUBTITLE}
                style={styles.inputStyle}
              />
            </View>
          </View>
        </View>
        <View style={styles.textInputMainView}>
          <View style={styles.labelView}></View>
          <View style={styles.textInputView}>
            <View style={styles.iconView}>
              <Image
                source={require('../../assets/icons/lock.png')}
                style={styles.leftIconView}
                resizeMode="contain"
              />
            </View>
            <View style={[styles.textAreaView, {width: '80%'}]}>
              <TextInput
                placeholder={'Password'}
                placeholderTextColor={THEME.MAIN_SUBTITLE}
                style={styles.inputStyle}
                secureTextEntry={isSecure}
              />
            </View>
            <TouchableOpacity style={styles.iconView}>
              <Feather
                name={isSecure ? 'eye' : 'eye-off'}
                size={widthPercentageToDP(5)}
                color={THEME.BLACK}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN.FORGOT)}>
          <Text style={styles.label}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button
          onPress={() => navigation.navigate(SCREEN.FORGOT)}
          title="Login"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
