import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';

import GeneralStatusBarColor from '../component/GeneralStatusBarColor';


const EventDetailScreen = () => {
  const [recEvent, setRecEvent] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

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
