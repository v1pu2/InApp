import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import AllEventCard from '../component/AllEventCard';
import EventRecCard from '../component/EventRecCard';
import GeneralStatusBarColor from '../component/GeneralStatusBarColor';
import {getEvents} from '../services';
import fonts from '../theme/fonts';
import colors from '../theme/colors';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import LoaderView from '../component/LoaderView';
import {CONSTANT_VALUE} from '../constants';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);
const {width} = Dimensions.get('window');
function wp(percentage) {
  const value = (percentage * width) / 100;
  return Math.round(value);
}
const slideHeight = width * 0.36;
const sliderWidth = width;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const HomeScreen = ({navigation}) => {
  const [recEvent, setRecEvent] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isCarousel = useRef(null);

  const callApi = async () => {
    try {
      const response = await getEvents();

      if (
        response?.status === 200 &&
        response?.data?.allEvents &&
        response?.data?.allEvents.length > 0
      ) {
        setIsLoading(false);
        setAllEvents(response?.data?.allEvents);
      }
    } catch (error) {
      console.log('error', error);
      Alert.alert('No API Response');
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
    navigation.navigate('Details', {eventID: itemId});
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
    return (
      <AllEventCard
        data={item?.item}
        onCardPress={() => handlePressEventCard(item?.item?.id)}
      />
    );
  };

  return (
    <View style={styles.root}>
      <GeneralStatusBarColor
        backgroundColor={'#A462E2'}
        barStyle="light-content"
      />

      <View style={styles.topView}>
        <Text style={styles.txtWelcome}>{CONSTANT_VALUE.WELCOME}</Text>
      </View>
      {isLoading && <LoaderView />}
      <View>
        {!isLoading && (
          <Text style={styles.txtRecEvent}>{CONSTANT_VALUE.REC_EVENTS}</Text>
        )}

        {!isLoading && (
          <View>
            <Carousel
              ref={isCarousel}
              data={recEvent}
              renderItem={item => renderItem(item)}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              firstItem={1}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              onSnapToItem={ind => setIndex(ind)}
            />

            <Pagination
              dotsLength={recEvent.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={styles.dotStyles}
              tappableDots={true}
              inactiveDotStyle={styles.inactiveDotStyles}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.8}
            />
          </View>
        )}
      </View>
      {!isLoading && (
        <View style={styles.allEventView}>
          <Text style={styles.txtRecEvent}>{CONSTANT_VALUE.ALL_EVENTS}</Text>

          <FlatList
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            data={allEvents}
            renderItem={item => renderEventItem(item)}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  topView: {
    height: 80,
    backgroundColor: colors.color2,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
    marginBottom: 29,
    shadowColor: colors.color0,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 3,
  },
  txtWelcome: {
    color: colors.color1,
    paddingLeft: 20,
    ...fonts.normalM,
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 27,
  },
  txtRecEvent: {
    color: colors.color16,
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
  dotStyles: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: colors.color7,
  },
  loaderView: {flex: 1, justifyContent: 'center'},
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18, // needed for shadow
  },
  inactiveDotStyles: {
    backgroundColor: colors.color17,
  },
  allEventView: {paddingBottom: 90, flex: 1},
});
