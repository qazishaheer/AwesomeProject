import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  heightPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../constants/theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.WHITE,
  },
  splash: {
    height: hp(30),
    width: wp(30),
  },
});
export default styles;
