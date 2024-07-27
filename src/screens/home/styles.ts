import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../constants/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.PRIMARY,
  },
  innerContainer: {
    paddingHorizontal: wp(3),
  },
  title: {
    fontSize: RFPercentage(3.8),
    color: THEME.RED,
    fontFamily: 'Poppins-SemiBold',
    marginTop: hp(0.6),
  },
  text: {
    fontSize: RFPercentage(3.8),
    color: THEME.WHITE,
    fontFamily: 'Poppins-SemiBold',
    marginTop: hp(0.6),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 70,
    marginVertical: hp(1),
  },
  imageContainer: {
    width: '40%',
    height: 70,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  textContainer: {
    width: '60%',
    height: 70,
    justifyContent: 'center',
  },
  email: {
    fontSize: RFPercentage(1.8),
    color: THEME.WHITE,
    fontFamily: 'Poppins-SemiBold',
  },
  name: {
    fontSize: RFPercentage(1.8),
    color: THEME.RED,
    fontFamily: 'Poppins-SemiBold',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuTitle: {
    fontSize: RFPercentage(1.8),
    color: THEME.WHITE,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: wp(5),
  },
});
