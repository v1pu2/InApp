import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import {isAsyncDebugging} from 'react-native/Libraries/Utilities/DebugEnvironment';

import GeneralStatusBarColor from '../component/GeneralStatusBarColor';
import {getEventDetail} from '../services';

const EventDetailScreen = ({navigation, route}) => {
  const [event, setEvent] = useState({});
  const [allEvents, setAllEvents] = useState([]);

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
    <View style={{flex: 1}}>
      <GeneralStatusBarColor
        backgroundColor={'#A462E2'}
        barStyle="light-content"
      />

      <View style={styles.topView}>
        <Text style={styles.txtWelcome}>Eventdetail screen</Text>
      </View>
    </View>
  );
};
export default EventDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
