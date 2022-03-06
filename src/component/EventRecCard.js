import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import EventTimeSvg from '../assets/svgs/EventTimeSvg';
import TicketSvg from '../assets/svgs/TicketSvg';
import fonts from '../theme/fonts';
import moment from 'moment';
import {CONSTANT_VALUE} from '../constants';
import colors from '../theme/colors';

const EventRecCard = props => {
  const event = props?.data;

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onCardPress}>
      <ImageBackground
        source={{uri: event?.mainImage}}
        resizeMode="cover"
        style={styles.image}
        // blurRadius={6}
        borderRadius={25}>
        <View style={styles.innerView}>
          <View style={styles.topView}>
            <EventTimeSvg />
            <Text style={styles.txtTime}>
              {moment(event?.dateTime).format('ddd, Do MMM YYYY HH:mm')}
            </Text>
          </View>
          <View style={styles.middleView}>
            <Text style={styles.txtTitle}>{event?.name}</Text>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.rowView}>
              <View style={styles.roundView}>
                <TicketSvg />
                <Text style={styles.txtTicket}>
                  {event?.ticketsSold}/{event?.maxTickets}
                </Text>
              </View>
              <View style={[styles.roundView]}>
                {event?.friendsAttending <= 1 ? (
                  <Text style={styles.txtFriend}>
                    {event?.friendsAttending}
                    {CONSTANT_VALUE.FRIENDS}
                  </Text>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingLeft: event?.friendsAttending >= 2 && 5,
                    }}>
                    <View style={styles.avatarContainer}>
                      <Image
                        style={styles.avatar}
                        source={{
                          uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/08/Large-Sample-png-Image-download-for-Testing.png',
                        }}
                      />
                    </View>

                    <View style={styles.avatarContainer}>
                      <Image
                        style={styles.avatar}
                        source={{
                          uri: 'http://lorempixel.com/output/cats-q-c-100-100-7.jpg',
                        }}
                      />
                    </View>
                    {event?.friendsAttending <= 2 ? (
                      <Text style={styles.txtFriend}>
                        {CONSTANT_VALUE.FRIENDS}
                      </Text>
                    ) : (
                      <Text style={styles.txtFriend}>
                        +{event?.friendsAttending - 2} {CONSTANT_VALUE.FRIENDS}
                      </Text>
                    )}
                  </View>
                )}
              </View>
              <View style={styles.lastRoundView}>
                <Text style={styles.txtPrice}>£{event?.price}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default EventRecCard;
const styles = StyleSheet.create({
  cardContainer: {
    height: 170,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerView: {flex: 1},
  topView: {flexDirection: 'row', justifyContent: 'flex-start', padding: 0},
  middleView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  roundView: {
    backgroundColor: colors.color0,
    borderColor: colors.color1,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 3,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  lastRoundView: {
    backgroundColor: colors.color5,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTicket: {
    ...fonts.normalM,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
    color: colors.color1,
    paddingLeft: 5,
  },
  txtPrice: {
    ...fonts.normalM,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
    color: colors.color1,
  },
  txtTitle: {
    fontFamily: 'Montserrat',
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 21,
    color: colors.color1,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
  },
  rowView: {justifyContent: 'space-between', flexDirection: 'row'},
  txtFriend: {
    ...fonts.normalM,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16,
    color: colors.color1,
    marginLeft: 5,
  },
  txtTime: {
    ...fonts.normalM,
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 16,
    color: colors.color1,
    paddingLeft: 10,
  },
  avatarContainer: {
    borderRadius: 7,
    height: 14,
    width: 14,
    marginLeft: -5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.color1,
  },
  avatar: {
    borderRadius: 6,
    height: 12,
    width: 12,
    backgroundColor: 'green',
  },
});
