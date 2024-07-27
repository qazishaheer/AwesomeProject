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

const Forgot = () => {
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
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.subTitle}>
            Secure your access, reset with ease!
          </Text>
        </View>
        <View style={styles.textInputMainView}>
          <View style={styles.labelView}></View>
          <View style={styles.textInputView}>
            <View style={styles.iconView}>
              <Image
                source={require('../../assets/icons/mail.png')}
                style={styles.leftIconView}
                resizeMode="contain"
              />
            </View>
            <View style={styles.textAreaView}>
              <TextInput
                placeholder={'Email'}
                placeholderTextColor={THEME.MAIN_SUBTITLE}
                style={styles.inputStyle}
              />
            </View>
          </View>
        </View>

        <Button
          onPress={() => navigation.navigate(SCREEN.HOME)}
          title="Reset"
        />

        <TouchableOpacity onPress={() => navigation.navigate(SCREEN.LOGIN)}>
          <Text style={styles.label}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Forgot;
