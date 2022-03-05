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

const EventRecCard = props => {
  const event = props?.data;

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onCardPress}>
      <ImageBackground
        source={{uri: event?.mainImage}}
        resizeMode="cover"
        style={styles.image}
        blurRadius={2}
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
              <View style={[styles.roundView, {flex: 1}]}>
                {event?.friendsAttending <= 1 ? (
                  <Text style={styles.txtFriend}>
                    {event?.friendsAttending} friends
                  </Text>
                ) : (
                  <View style={{flexDirection: 'row'}}>
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
                      <Text style={styles.txtFriend}>friends</Text>
                    ) : (
                      <Text style={styles.txtFriend}>
                        +{event?.friendsAttending - 2} friends
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
    // width: 300,
    // margin: 10,
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
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 3,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  lastRoundView: {
    backgroundColor: '#02D9E7',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTicket: {
    ...fonts.normalM,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
    color: 'white',
    paddingLeft: 5,
  },
  txtPrice: {
    ...fonts.normalM,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
    color: 'white',
  },
  txtTitle: {
    fontFamily: 'Montserrat',
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 21,
    color: 'white',
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
    color: 'white',
    marginLeft: 5,
  },
  txtTime: {
    ...fonts.normalM,
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 16,
    color: 'white',
    paddingLeft: 10,
  },
  // overlapContainer: {
  //   flexDirection: 'row-reverse',
  //   justifyContent: 'flex-end',
  //   marginTop: 20,
  //   marginRight: 20,
  // },
  avatarContainer: {
    borderRadius: 7,
    height: 14,
    width: 14,
    marginLeft: -5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
  },
  avatar: {
    borderRadius: 6,
    height: 12,
    width: 12,
    backgroundColor: 'green',
  },
});
