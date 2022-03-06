import React, {useState} from 'react';
import {Text, View, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import FollowSvg from '../assets/svgs/FollowSvg';
import LikeSvg from '../assets/svgs/LikeSvg';
import LocationSvg from '../assets/svgs/locationSvg';
import TicketDetailSvg from '../assets/svgs/TicketDetailSvg';
import {CONSTANT_VALUE} from '../constants';
import colors from '../theme/colors';
import c_styles from '../theme/CommonStyles';
import fonts from '../theme/fonts';
import AnimatedBUtton from './AnimatedButton';

const EventDesc = ({event, onPress, onLocationClick}) => {
  const [isLike, setIsLike] = useState(false);
  const loc = event?.location;

  const locStr = loc?.split(',');

  const locView = () => {
    var temp = '';
    locStr.map((item, index) => {
      temp = temp + item + ',\n';
    });
    return <Text style={styles.txtLocation}>{temp}</Text>;
  };
  return (
    <View>
      <View style={c_styles.priceView}>
        <View style={c_styles.rowView}>
          <Text style={c_styles.txtTotalP}>{CONSTANT_VALUE.TOTAL_PRICE}</Text>
          <Text style={c_styles.txtPrice}> £{event?.totalPrize}</Text>
        </View>
        <View style={styles.roundView}>
          <FollowSvg />
          <Text style={styles.txtShareView}>{CONSTANT_VALUE.SHARE_EVENT}</Text>
        </View>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => {
            setIsLike(!isLike);
          }}>
          <LikeSvg color={isLike ? 'red' : colors.color7} />
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <TicketDetailSvg />
        <Text style={styles.txtTicket}>
          {event?.ticketsSold}/{event?.maxTickets} {CONSTANT_VALUE.ATTENDING}
        </Text>
      </View>
      <View style={styles.aboutView}>
        <Text style={styles.txtAbout}>{CONSTANT_VALUE.ABOUT}</Text>
        <Text style={styles.txtDesc}>{event?.description}</Text>
      </View>
      <View style={styles.aboutView}>
        <Text style={styles.txtAbout}>{CONSTANT_VALUE.LOCATION}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.locationView}>
            <View style={styles.iconAddView}>
              <LocationSvg />
              {locStr?.length > 0 && locView()}
            </View>
          </View>

          <View style={styles.takeView}>
            <Text style={styles.txtTake} onPress={onLocationClick}>
              {CONSTANT_VALUE.TAKE_ME_THERE}
            </Text>
          </View>
        </View>
        <View style={styles.grayView} />
        <View style={styles.aboutView}>
          <Text style={styles.txtAbout}>{CONSTANT_VALUE.CONTACT}</Text>
          {/* on Click og email id, navigate to gmail with subject and description  */}
          <View style={styles.contactValueView}>
            <Text style={styles.txtContact}>{CONSTANT_VALUE.SEND_EMAIL} </Text>
            <Text
              style={styles.txtEmail}
              onPress={() =>
                Linking.openURL(
                  'mailto:contact@techalchemy.co?subject=SendMail&body=Description',
                )
              }>
              {CONSTANT_VALUE.EMAIL_ID}
            </Text>
            <Text style={styles.txtContact}>{CONSTANT_VALUE.CALL_NUM}</Text>
          </View>
        </View>
      </View>
      <AnimatedBUtton onPress={onPress} isPrice={true} />
    </View>
  );
};
export default EventDesc;

const styles = StyleSheet.create({
  roundView: {
    backgroundColor: colors.color10,
    borderColor: colors.color1,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  txtShareView: {
    color: colors.color1,
    paddingLeft: 10,
    ...fonts.normalM,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
  },
  txtTicket: {
    ...fonts.normalM,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17,
    color: colors.color2,
    paddingLeft: 10,
  },
  aboutView: {
    paddingTop: 30,
  },
  txtAbout: {
    color: colors.color7,
    paddingLeft: 10,
    ...fonts.normalM,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16,
    paddingBottom: 25,
    textTransform: 'uppercase',
  },
  txtDesc: {
    color: colors.color7,
    paddingLeft: 10,
    ...fonts.normalM,
    fontSize: 15,
    lineHeight: 22,
  },
  iconAddView: {flexDirection: 'row', paddingLeft: 5},
  locationView: {
    justifyContent: 'center',
    flex: 1,
  },
  txtLocation: {
    color: colors.color7,
    paddingLeft: 10,
    ...fonts.normalM,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    paddingRight: 20,
  },
  takeView: {
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: colors.color13,
    borderWidth: 1,
    alignItems: 'center',
    height: 40,
  },
  txtTake: {
    color: colors.color13,
    paddingHorizontal: 20,
    ...fonts.normalM,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '500',
  },
  txtContact: {
    color: colors.color7,
    ...fonts.normalM,
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '500',
  },
  contactValueView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
  },
  txtEmail: {
    color: colors.color9,
    ...fonts.normalM,
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '500',
  },
  txtPrice: {
    color: colors.color1,
    ...fonts.normalM,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
  },
  grayView: {height: 1, backgroundColor: colors.color11, marginTop: 10},
});
