import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/theme';

const styles = StyleSheet.create({
  txt: {
    marginLeft: 10,
    marginTop: 20,
    borderLeftColor: '#87CEEB',
    height: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  boders: {
    borderWidth: 3,
    marginLeft: 13,
    height: 16,
    marginTop: 20,
    borderColor: '#87CEEB',
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  rowdiv: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginLeft: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: THEME.WHITE,
    elevation: 5,
  },
  rowtxt: {
    marginTop: 5,
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
    fontSize: 12,
  },
  rowtxt1: {
    marginTop: 5,
    fontWeight: 'bold',
    marginLeft: 9,

    fontFamily: 'Poppins-Bold',
    color: '#87CEEB',
  },
  leadtsxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: '900',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  leadtsxt4: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    fontSize: 15,
    color: 'purple',
    fontFamily: 'Poppins-SemiBold',
  },
  check: {
    width: 17,
    height: 17,
    marginRight: 5,
    tintColor: 'purple',
  },
  calender: {
    width: 17,
    height: 17,
    marginRight: 5,
    tintColor: '#87CEEB',
  },
  upload: {
    width: 17,
    height: 17,
  },
  filter: {
    width: 13,
    height: 13,
    marginRight: 3,
    marginTop: 2,
  },
  leadtsxt3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: '900',
    fontSize: 13,
  },
  leadtsxt1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: '900',
    fontSize: 15,
    padding: 13,
  },
  leadrowtxt: {
    fontWeight: '900',
    fontSize: 15,
  },

  leadtsxt2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#D3D3D3',
  },
  leadsdata: {
    borderLeftWidth: 5,
    borderLeftColor: 'purple',
    borderRadius: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: THEME.WHITE,
    elevation: 5,
  },
  Leadsrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Leadsrow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
  },
  mainlead: {
    padding: 10,
  },
  topboder: {
    borderWidth: 1,
    width: '100%',
    alignSelf: 'center',
    borderColor: '#D3D3D3',
  },
});
export default styles;
