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

const screenHeight = Dimensions.get('window').height;
const ModalView = ({onPressClose, setIsModalVisible, purchaseData}) => {
  return (
    // <View>
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
          You will need this booking ID to enter inside the event. You can view
          this code inside your profile / booked events
        </Text>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.closeBtnView} onPress={onPressClose}>
          <Text style={styles.txtClose}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </View>
  );
};
export default ModalView;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 200,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 3,
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
    bottom: 20,
    paddingLeft: 20,
    position: 'absolute',
  },
  text: {
    color: '#120936',
    ...fonts.normalM,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
  },
  txtClose: {
    color: 'white',
    ...fonts.normalM,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  closeBtnView: {
    backgroundColor: '#936EFE',
    width: '80%',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  grayView: {
    height: 1,
    backgroundColor: '#E4E4E4',
    marginTop: 20,
    marginHorizontal: 20,
  },
});
