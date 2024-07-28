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
    backgroundColor: THEME.LIGHT_GRAY,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: THEME.PRIMARY,
    height: hp(18),
  },
  innerContainer: {
    width: '100%',
    alignSelf: 'center',
    height: hp(8),
    backgroundColor: THEME.PRIMARY,
    flexDirection: 'row',
    paddingHorizontal: hp(1),
  },
  iconContainer: {
    width: '10%',
    height: hp(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: '70%',
    height: hp(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: RFPercentage(2.2),
    color: THEME.WHITE,
    fontFamily: 'Poppins-SemiBold',
  },
  containerBox: {
    width: '90%',
    paddingVertical: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.WHITE,
    marginTop: hp(-10),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  box: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.PRIMARY,
    height: hp(14),
    marginHorizontal: wp(2),
    borderRadius: 12,
    paddingHorizontal: hp(1.4),
    marginVertical: hp(1),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  number: {
    fontSize: RFPercentage(3),
    color: THEME.WHITE,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 30,
  },
  boxTitle: {
    fontSize: RFPercentage(1.5),
    color: THEME.WHITE,
    fontFamily: 'Poppins-Regular',
    height: 30,
  },
  graphContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: THEME.WHITE,
    paddingBottom: hp(2),
  },
  graph: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: THEME.WHITE,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leadStatus: {
    fontSize: RFPercentage(2.2),
    color: THEME.PRIMARY,
    fontFamily: 'Poppins-SemiBold',
    marginHorizontal: hp(2),
  },
  barChart: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  xAxis: {
    width: '25%',
  },
  yAxis: {
    width: '75%',
    flexDirection: 'row',
  },
  progressBar: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  bar: {
    borderRadius: 22,
    marginHorizontal: hp(2),
    width: '10%',
    alignSelf: 'flex-end',
  },
  percent: {
    fontSize: RFPercentage(1.8),
    color: THEME.BLACK,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: hp(1.3),
  },
  barTitles: {
    fontSize: RFPercentage(1.5),
    color: THEME.BLACK,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: hp(1.3),
  },
  paimeasers: {
    marginTop: 50,
  },
  paitxt: {
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 10,
  },
  pairow: {
    flexDirection: 'row',
    marginTop: 9,
  },
  circlered: {
    borderWidth: 11,
    borderRadius: 6,
    borderColor: THEME.RED,
    marginLeft: 50,
  },
  circleblue: {
    borderWidth: 11,
    borderRadius: 6,
    borderColor: THEME.BLUE,
    marginLeft: 50,
  },
  circlegreen: {
    borderWidth: 11,
    borderRadius: 6,
    borderColor: THEME.GREEN,
    marginLeft: 50,
  },
  circleyellow: {
    borderWidth: 11,
    borderRadius: 6,
    borderColor: THEME.YELLOW,
    marginLeft: 50,
  },
});
