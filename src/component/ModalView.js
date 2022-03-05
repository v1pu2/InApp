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

const ModalView = ({onPressClose, setIsModalVisible, purchaseData}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.modal}>
        <View style={styles.topGrayView} />
        <View style={styles.topRowView}>
          <Text style={styles.text}>Purchase Success</Text>
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
            Thank you!
          </Text>
          <Text style={styles.txtPayment}>
            Your payment was made successfully!
          </Text>
        </View>
        <View style={styles.grayView} />
        <View style={styles.thankView}>
          <Text style={styles.txtPayment}>Your booking ID</Text>
          <Text style={styles.txtBookId}>#{purchaseData?.id}</Text>
        </View>
        <View style={styles.grayView} />
        <View style={styles.txtContentView}>
          <Text style={styles.txtContent}>
            You will need this booking ID to enter inside the event. You can
            view this code inside your profile / booked events
          </Text>
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
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 20,
    position: 'absolute',
    bottom: 0,
  },
  topGrayView: {
    backgroundColor: '#B9BAC0',
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
    marginHorizontal: 28,
    marginTop: 20,
  },
  txtContent: {
    color: '#475464',
    ...fonts.normalM,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  txtThank: {
    color: '#000000',
    ...fonts.normalM,
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
  },
  txtBookId: {
    color: '#02D9E7',
    ...fonts.normalM,
    fontSize: 30,
    lineHeight: 48,
    fontWeight: '600',
  },
  txtPayment: {
    color: '#475464',
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
    color: '#120936',
    ...fonts.normalM,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
  },

  grayView: {
    height: 1,
    backgroundColor: '#E4E4E4',
    marginTop: 20,
    marginHorizontal: 20,
  },
});
