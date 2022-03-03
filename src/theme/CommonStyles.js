import {StyleSheet} from 'react-native';
import fonts from './fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7555CF',
  },
  drawerUpperView: {
    height: 200,
    backgroundColor: 'purple',
    justifyContent: 'center',
    padding: 20,
  },
  priceView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTotalP: {
    ...fonts.normalM,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    color: '#475464',
  },
  txtPrice: {
    ...fonts.boldM,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 17,
    color: '#475464',
  },
});
export default styles;
