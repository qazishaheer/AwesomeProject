import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: hp(6),
    borderRadius: hp(0.8),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(5),
    backgroundColor: THEME.PRIMARY,
  },
  buttonTitle: {
    fontSize: RFPercentage(2),
    color: THEME.WHITE,
    fontFamily: 'Poppins-Regular',
  },
});
