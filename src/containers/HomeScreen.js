import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import AllEventCard from '../component/AllEventCard';
import EventRecCard from '../component/EventRecCard';
import GeneralStatusBarColor from '../component/GeneralStatusBarColor';
import {getEvents} from '../services';
import fonts from '../theme/fonts';

const HomeScreen = () => {
  const [recEvent, setRecEvent] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  const callApi = async () => {
    try {
      const response = await getEvents();

      if (
        response?.status === 200 &&
        response?.data?.allEvents &&
        response?.data?.allEvents.length > 0
      ) {
        setAllEvents(response?.data?.allEvents);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  useEffect(() => {
    var filterArray = allEvents.filter(data => data?.isRecommended);

    setRecEvent(filterArray);
  }, [allEvents]);
  const handlePressEventCard = itemId => {
    console.log('itemid---', itemId);
  };
  const renderItem = item => {
    return (
      <EventRecCard
        data={item?.item}
        onCardPress={() => handlePressEventCard(item?.item?.id)}
      />
    );
  };
  const renderEventItem = item => {
    // console.log('item---', item);
    return <AllEventCard data={item?.item} />;
  };
  return (
    <View style={{flex: 1}}>
      <GeneralStatusBarColor
        backgroundColor={'#A462E2'}
        barStyle="light-content"
      />

      <View style={styles.topView}>
        <Text style={styles.txtWelcome}>Welcome</Text>
      </View>
      <View style={{paddingLeft:10}}>
        <Text style={styles.txtRecEvent}>Recommended Events</Text>
        <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={recEvent}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={{paddingBottom: 90, flex: 1}}>
        <Text style={styles.txtRecEvent}>All Events</Text>
        <FlatList
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={allEvents}
          renderItem={item => renderEventItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
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
  txtWelcome: {
    color: 'white',
    paddingLeft: 20,
    ...fonts.normalM,
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 27,
  },
  root: {
    flex: 1,
    marginBottom: 30,
  },
  txtRecEvent: {
    color: '#565066',
    paddingLeft: 20,
    ...fonts.normalM,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16,
    marginVertical: 20,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});
