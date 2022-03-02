import React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import EventTimeSvg from '../assets/svgs/EventTimeSvg';
import TicketSvg from '../assets/svgs/TicketSvg';
import fonts from '../theme/fonts';

const AllEventCard = () => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        resizeMode="cover"
        style={styles.image}
        blurRadius={70}
        borderRadius={25}>
        <View style={styles.innerView}>
          <View style={styles.topView}>
            <EventTimeSvg />
            <Text style={styles.txtTime}>Thu, 24 Sep 2020 18:30</Text>
          </View>
          <View style={styles.middleView}>
            <Text style={styles.txtTitle}>Camden Town Football Event</Text>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.rowView}>
              <View style={styles.roundView}>
                <TicketSvg />
                <Text style={styles.txtTicket}>9/22 </Text>
              </View>
              <View style={styles.roundView}>
                <Text style={styles.txtFriend}>+5 friends</Text>
              </View>
              <View style={styles.lastRoundView}>
                <Text>1176.98</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default AllEventCard;
const styles = StyleSheet.create({
  cardContainer: {
    height: 160,
    width: 300,
    margin: 10,
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
    // backgroundColor: 'blue',
    flex: 1,
  },
  roundView: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 5,
    paddingVertical: 3,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastRoundView: {
    backgroundColor: '#02D9E7',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 5,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
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
    // fontFamily: 'Montserrat',
    ...fonts.normalM,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16,
    color: 'white',
  },
  txtTime: {
    // fontFamily: 'Montserrat',
    ...fonts.normalM,
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 16,
    color: 'white',
    paddingLeft: 10,
  },
});
