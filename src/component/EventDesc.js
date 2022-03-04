import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';

import FollowSvg from '../assets/svgs/FollowSvg';
import LikeSvg from '../assets/svgs/LikeSvg';
import LocationSvg from '../assets/svgs/locationSvg';
import TicketDetailSvg from '../assets/svgs/TicketDetailSvg';
import c_styles from '../theme/CommonStyles';
import fonts from '../theme/fonts';

const EventDesc = ({event, onPress, onLocationClick}) => {
  // console.log(event);
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
    <View style={{paddingBottom: 70}}>
      <View style={c_styles.priceView}>
        <View style={c_styles.rowView}>
          <Text style={c_styles.txtTotalP}>Total Price:</Text>
          <Text style={c_styles.txtPrice}> £{event?.totalPrize}</Text>
        </View>
        <View style={styles.roundView}>
          <FollowSvg />
          <Text style={styles.txtShareView}>Share Event</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsLike(!isLike);
          }}>
          <LikeSvg color={isLike ? 'red' : '#475464'} />
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <TicketDetailSvg />
        <Text style={styles.txtTicket}>
          {event?.ticketsSold}/{event?.maxTickets} attending
        </Text>
      </View>
      <View style={styles.aboutView}>
        <Text style={styles.txtAbout}>ABOUT :</Text>
        <Text style={styles.txtDesc}>{event?.description}</Text>
      </View>
      <View style={styles.aboutView}>
        <Text style={styles.txtAbout}>Location :</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.locationView}>
            <View style={styles.iconAddView}>
              <LocationSvg />
              {locStr?.length > 0 && locView()}
            </View>
          </View>

          <View style={styles.takeView}>
            <Text style={styles.txtTake} onPress={onLocationClick}>
              Take me there
            </Text>
          </View>
        </View>
        <View style={styles.grayView} />
        {/* {locView()} */}
        <View style={styles.aboutView}>
          <Text style={styles.txtAbout}>Contact :</Text>
          <Text style={styles.txtContact}>Send us an email at</Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={styles.txtEmail}
              onPress={() =>
                Linking.openURL(
                  'mailto:contact@techalchemy.co?subject=SendMail&body=Description',
                )
              }>
              contact@techalchemy.co
            </Text>
            <Text style={styles.txtContact}>or call us at +1 991-681-0200</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.priceBtnView} onPress={onPress}>
        <Text style={styles.txtPrice}>{'{PRICE}'} - I’M IN!</Text>
      </TouchableOpacity>
    </View>
  );
};
export default EventDesc;

const styles = StyleSheet.create({
  roundView: {
    backgroundColor: '#9DA6B1',
    borderColor: 'white',
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
    color: 'white',
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
    color: '#7555CF',
    paddingLeft: 10,
  },
  aboutView: {
    paddingTop: 30,
  },
  txtAbout: {
    color: '#475464',
    paddingLeft: 10,
    ...fonts.normalM,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16,
    paddingBottom: 25,
    textTransform: 'uppercase',
  },
  txtDesc: {
    color: '#475464',
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
    color: '#475464',
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
    borderColor: '#6658D3',
    borderWidth: 1,
    alignItems: 'center',
    height: 40,
  },
  txtTake: {
    color: '#6658D3',
    paddingHorizontal: 20,
    ...fonts.normalM,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '500',
  },
  txtContact: {
    color: '#475464',
    paddingLeft: 10,
    ...fonts.normalM,
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '500',
  },
  txtEmail: {
    color: '#936EFE',
    paddingLeft: 10,
    ...fonts.normalM,
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '500',
  },
  txtPrice: {
    color: 'white',
    ...fonts.normalM,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
  },
  grayView: {height: 1, backgroundColor: '#E5E4EB', marginTop: 10},
  priceBtnView: {
    backgroundColor: '#11D0A2',
    marginHorizontal: 30,
    marginVertical: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
