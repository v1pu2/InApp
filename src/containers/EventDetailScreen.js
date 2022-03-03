import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';

import GeneralStatusBarColor from '../component/GeneralStatusBarColor';
import {getEventDetail} from '../services';
import fonts from '../theme/fonts';

import EventDesc from '../component/EventDesc';

const EventDetailScreen = ({navigation, route}) => {
  const [event, setEvent] = useState({});
  const [allEvents, setAllEvents] = useState([]);
  const [isLike, setIsLike] = useState(false);

  const selectedId = route?.params?.eventID;
  const callApi = async () => {
    try {
      const response = await getEventDetail();
      //   console.log('response--', JSON.stringify(response?.data));
      if (
        response?.status === 200 &&
        response?.data?.eventDetails &&
        response?.data?.eventDetails.length > 0
      ) {
        setAllEvents(response?.data?.eventDetails);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    var selectedEvent = allEvents.find(data => data?.id === selectedId);
    console.log(selectedEvent);
    setEvent(selectedEvent);
  }, [allEvents, selectedId]);

  return (
    <ScrollView style={{flex: 1}}>
      {/* <GeneralStatusBarColor
        backgroundColor={'transparent'}
        barStyle="light-content"
      /> */}
      <ImageBackground
        source={{
          uri: event?.mainImage,
        }}
        resizeMode="cover"
        style={styles1.image}
        blurRadius={2}
        borderTopRightRadius={12}
        borderTopLeftRadius={12}>
        <View
          style={{
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <Text style={styles1.txtWelcome}>{event?.name}</Text>
        </View>
      </ImageBackground>
      <View style={styles1.contentView}>
        <EventDesc event={event} />
      </View>
    </ScrollView>
  );
};
export default EventDetailScreen;

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  topView: {
    height: 80,
    backgroundColor: '#7555CF',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
    marginBottom: 29,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    height: 300,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  txtWelcome: {
    color: 'white',
    paddingLeft: 20,
    ...fonts.normalM,
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 28,
    paddingBottom: 30,
  },
  contentView: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
});
