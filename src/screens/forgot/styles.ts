import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  heightPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.WHITE,
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    width: '92%',
    alignSelf: 'center',
  },
  logoImageView: {
    width: '100%',
    alignItems: 'center',
    marginTop: hp(10),
  },
  imageStyle: {
    width: wp(40),
    height: hp(10),
  },
  titlesView: {
    width: '100%',
    marginTop: hp(5),
    marginBottom: hp(3),
    alignItems: 'center',
  },
  title: {
    fontSize: RFPercentage(2.2),
    color: THEME.MAIN_TITLE,
    fontFamily: 'Poppins-SemiBold',
  },
  subTitle: {
    fontSize: RFPercentage(1.8),
    color: THEME.MAIN_SUBTITLE,
    fontFamily: 'Poppins-Medium',
    marginTop: hp(0.8),
  },
  textInputMainView: {
    width: '100%',
    marginTop: hp(1),
  },
  labelView: {
    width: '100%',
    marginTop: hp(2),
    marginVertical: hp(0.5),
  },
  label: {
    fontSize: RFPercentage(2),
    color: THEME.BLUE,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  textInputView: {
    flexDirection: 'row',
    backgroundColor: THEME.TEXT_INPUT_BACKGROUND,
    borderRadius: hp(0.8),
    height: hp(6.6),
    width: '100%',
  },
  iconView: {
    width: '10%',
    height: hp(6.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIconView: {
    width: wp(2.5),
    height: wp(2.5),
  },
  textAreaView: {
    width: '90%',
    height: hp(7),
    justifyContent: 'center',
  },
  inputStyle: {
    color: '#000',
    width: '100%',
    fontFamily: 'Poppins-Regular',
    height: hp(7),
  },
});
