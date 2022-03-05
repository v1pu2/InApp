import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CreatorSvg from '../assets/svgs/CreatorSvg';
import EventTimeSvg from '../assets/svgs/EventTimeSvg';
import LikeSvg from '../assets/svgs/LikeSvg';
import TicketSvg from '../assets/svgs/TicketSvg';
import fonts from '../theme/fonts';
import c_styles from '../theme/CommonStyles';
import moment from 'moment';

const AllEventCard = props => {
  const event = props?.data;

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onCardPress}>
      <ImageBackground
        source={{
          uri: event?.mainImage,
        }}
        resizeMode="cover"
        style={styles.image}
        blurRadius={2}
        borderTopRightRadius={12}
        borderTopLeftRadius={12}>
        <View style={styles.innerView}>
          <View style={styles.topView}>
            {event?.isPartnered && (
              <View style={styles.roundViewP}>
                <Text style={styles.txtPartner}>Partnered </Text>
              </View>
            )}
            <View style={styles.roundViewF}>
              <Text style={styles.txtFootball}>{event?.sport}</Text>
            </View>
          </View>
          <View style={styles.middleView}>
            <Text style={styles.txtTitle}>{event?.name}</Text>
          </View>
          <View style={styles.bottomView}>
            <View style={c_styles.rowView}>
              <EventTimeSvg />
              <Text style={styles.txtTime}>
                {moment(event?.dateTime).format('ddd, Do MMM YYYY HH:mm')}
              </Text>
            </View>
            <View>
              <View style={styles.lastRoundView}>
                <Text style={styles.txtNum}>£{event?.price}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.contentView}>
        <View style={c_styles.priceView}>
          <View style={c_styles.rowView}>
            <Text style={c_styles.txtTotalP}>Total Price:</Text>
            <Text style={c_styles.txtPrice}> £{event?.totalPrize}</Text>
          </View>
          <View>
            <LikeSvg />
          </View>
        </View>
        <View style={styles.creatorView}>
          <CreatorSvg />
          <Text style={styles.txtCreator}>Event Creator:</Text>
          <Text style={styles.txtCreatorName}> Steave Jobs</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default AllEventCard;
const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 9,
  },
  image: {
    flex: 1,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  innerView: {flex: 1, paddingTop: 20, paddingBottom: 10},
  topView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  middleView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  roundViewP: {
    backgroundColor: '#02D9E7',
    borderColor: '#02D9E7',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  roundViewF: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastRoundView: {
    backgroundColor: '#02D9E7',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNum: {
    ...fonts.normalM,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 35,
    color: 'white',
    paddingVertical: 5,
  },
  txtTicket: {
    // fontFamily: 'Montserrat',
    ...fonts.normalM,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
    color: 'white',
    paddingLeft: 5,
  },
  txtTitle: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    color: 'white',
  },
  bottomView: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 20,
    flexDirection: 'row',
    paddingVertical: 15,
  },
  txtFootball: {
    ...fonts.normalM,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 16,
    color: 'black',
  },
  txtPartner: {
    ...fonts.normalM,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
    color: 'white',
  },
  txtTime: {
    ...fonts.normalM,
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 16,
    color: 'white',
    paddingLeft: 10,
  },
  creatorView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  txtCreator: {
    ...fonts.normalM,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 17,
    color: '#0FC6C0',
    paddingLeft: 10,
  },
  txtCreatorName: {
    ...fonts.normalM,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17,
    color: '#475464',
  },
  contentView: {
    flex: 1,
    paddingVertical: 30,
    padding: 20,
    backgroundColor: 'white',
  },
});
