import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import fonts from '../theme/fonts';
import CloseSvg from '../assets/svgs/CloseSvg';
import CorrectSvg from '../assets/svgs/CorrectSvg';
import AnimatedBUtton from './AnimatedButton';
import {CONSTANT_VALUE} from '../constants';
import colors from '../theme/colors';

const ModalView = ({onPressClose, setIsModalVisible, purchaseData}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.modal}>
        <View style={styles.topGrayView} />
        <View style={styles.topRowView}>
          <Text style={styles.text}>{CONSTANT_VALUE.PURCHASE_SUCCESS}</Text>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <CloseSvg />
          </TouchableOpacity>
        </View>
        <View style={styles.correctView}>
          <CorrectSvg />
        </View>
        <View style={styles.thankView}>
          <Text
            style={styles.txtThank}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            {CONSTANT_VALUE.THANK_YOU}
          </Text>
          <Text style={styles.txtPayment}>
            {CONSTANT_VALUE.PAYMENT_SUCCESS}
          </Text>
        </View>
        <View style={styles.grayView} />
        <View style={styles.thankView}>
          <Text style={styles.txtPayment}>{CONSTANT_VALUE.BOOKING_ID}</Text>
          <Text style={styles.txtBookId}>#{purchaseData?.id}</Text>
        </View>
        <View style={styles.grayView} />
        <View style={styles.txtContentView}>
          <Text style={styles.txtContent}>{CONSTANT_VALUE.CONTENT}</Text>
        </View>
        <View style={styles.bottomView}>
          <AnimatedBUtton onPress={onPressClose} isPrice={false} />
        </View>
      </View>
    </View>
  );
};
export default ModalView;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.color1,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    borderColor: colors.color1,
    padding: 20,
    position: 'absolute',
    bottom: 0,
  },
  topGrayView: {
    backgroundColor: colors.color14,
    height: 5,
    width: 37,
    alignSelf: 'center',
    marginBottom: 14,
    borderRadius: 3,
  },
  topRowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  correctView: {alignItems: 'center', marginVertical: 25},
  thankView: {
    alignItems: 'center',
    marginHorizontal: 70,
  },
  txtContentView: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  txtContent: {
    color: colors.color7,
    ...fonts.normalM,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  txtThank: {
    color: colors.color0,
    ...fonts.normalM,
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
  },
  txtBookId: {
    color: colors.color5,
    ...fonts.normalM,
    fontSize: 30,
    lineHeight: 48,
    fontWeight: '600',
  },
  txtPayment: {
    color: colors.color7,
    ...fonts.normalM,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    paddingTop: 10,
  },
  bottomView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
  },
  text: {
    color: colors.color12,
    ...fonts.normalM,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
  },

  grayView: {
    height: 1,
    backgroundColor: colors.color11,
    marginTop: 20,
    marginHorizontal: 20,
  },
});
