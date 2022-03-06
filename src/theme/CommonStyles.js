import {StyleSheet} from 'react-native';
import colors from './colors';
import fonts from './fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.color2,
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
    color: colors.color7,
  },
  txtPrice: {
    ...fonts.boldM,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 17,
    color: colors.color7,
  },
  main: {
    flex: 1,
    backgroundColor: colors.color1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
