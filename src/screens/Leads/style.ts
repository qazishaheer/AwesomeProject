import {StyleSheet} from 'react-native';
import Leads from '.';

const styles = StyleSheet.create({
  txt: {
    marginLeft: 20,
    borderLeftWidth: 2,
    marginTop: 20,
    borderLeftColor: '#87CEEB',
    height: 18,
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  rowdiv: {
    width: 80,
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 8,
  },
  rowtxt: {
    marginTop: 5,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  leadtsxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leadsdata: {
    borderLeftWidth: 5,
    borderLeftColor: 'purple',
    borderRadius: 5,
    marginTop: 15,
  },
  Leadsrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Leadsrow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    borderTopWidth: 1,
  },
  mainlead: {
    padding: 10,
  },
});
export default styles;
