import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Linking,
  Modal,
  SafeAreaView,
  Animated,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

import {getCheckoutDetails, getEventDetail, purchase} from '../services';
import fonts from '../theme/fonts';

import EventDesc from '../component/EventDesc';
import ModalView from '../component/ModalView';
import BackSvg from '../assets/svgs/BackSvg';
import LoaderView from '../component/LoaderView';

const HEADER_WIDTH = Dimensions.get('window').width;
const HEADER_MAX_HEIGHT = 340; //  set Image height
const HEADER_MIN_HEIGHT = 84; // set header when scroll up
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const START_ANIMATION_SCROLL_HEIGHT = 0;
const END_ANIMATION_SCROLL_HEIGHT = 150;

const EventDetailScreen = ({navigation, route}) => {
  const [event, setEvent] = useState({});
  const [allEvents, setAllEvents] = useState([]);
  const [purchaseData, setPurchaseData] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [titleWidth, setTitleWidth] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const scrollY = useRef(new Animated.Value(0)).current;
  let myList = useRef();
  const selectedId = route?.params?.eventID;
  const animatedFontSize = scrollY.interpolate({
    inputRange: [START_ANIMATION_SCROLL_HEIGHT, END_ANIMATION_SCROLL_HEIGHT],
    outputRange: [
      Platform?.OS === 'ios' ? 20 : 22,
      Platform?.OS === 'ios' ? 15 : 17,
    ],
    extrapolate: 'clamp',
  });

  const animatedTranslateX = scrollY.interpolate({
    inputRange: [START_ANIMATION_SCROLL_HEIGHT, END_ANIMATION_SCROLL_HEIGHT],
    outputRange: [
      -((HEADER_WIDTH - 30 - titleWidth) / 2), // set title on image horizontally
      Platform?.OS === 'ios' ? 70 : 100, // set title in header horizontally
    ],
    extrapolate: 'clamp',
  });

  const animatedTranslateY = scrollY.interpolate({
    inputRange: [START_ANIMATION_SCROLL_HEIGHT, END_ANIMATION_SCROLL_HEIGHT],
    outputRange: [
      Platform?.OS === 'ios' ? 210 : 230, // set title on image vertically
      Platform?.OS === 'ios' ? -18 : -18, // set title in header vertically
    ],
    extrapolate: 'clamp',
  });
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.9],
    extrapolate: 'clamp',
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  });

  const callEventDetailApi = async () => {
    try {
      const response = await getEventDetail();
      if (
        response?.status === 200 &&
        response?.data?.eventDetails &&
        response?.data?.eventDetails.length > 0
      ) {
        setIsLoading(false);
        setAllEvents(response?.data?.eventDetails);
      }
    } catch (error) {
      setIsLoading(true);
      console.log('error  in detail res', error);
    }
  };

  useEffect(() => {
    callEventDetailApi();
  }, []);

  useEffect(() => {
    var selectedEvent = allEvents.find(data => data?.id === selectedId);
    setEvent(selectedEvent);
  }, [allEvents, selectedId]);

  const callPurchaseApi = async data => {
    const request = {
      purchase: {
        dateTime: data?.bookBy,
        purchaseAmount: data?.totalPrize,
        paymentMethodType: 'visa',
        eventId: data?.id,
      },
    };

    try {
      const response = await purchase(request);
      if (response?.status === 200 && response?.data) {
        myList.current.scrollTo({animated: false, x: 0, y: 0});
        setIsModalVisible(true);
        setPurchaseData(response?.data?.purchase);
      }
    } catch (error) {
      console.log('error -----', error);
    }
  };
  const onPriceClick = data => {
    callPurchaseApi(data);
  };
  // click and open map application
  const onLocationClick = location => {
    const link = `http://api.positionstack.com/v1/forward?access_key=81f2cbab5535951fe844607ead12aad2&query=${location}`;

    try {
      axios.get(link).then(res => {
        const latitude = res?.data?.data[0]?.latitude;
        const longitude = res?.data?.data[0]?.longitude;
        const label = location;

        const url = Platform.select({
          ios: 'maps:' + latitude + ',' + longitude + '?q=' + label,
          android: 'geo:' + latitude + ',' + longitude + '?q=' + label,
        });
        Linking.openURL(url);
      });
    } catch (error) {
      console.log('error---', error);
    }
  };
  // call api of checkout on click of close button, if response is ok, navigate to home screen
  const callCheckoutApi = async () => {
    try {
      const response = await getCheckoutDetails();
      if (
        response?.status === 200 &&
        response?.data?.checkout &&
        response?.data?.checkout.length > 0
      ) {
        setIsModalVisible(false);
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  // close the modal view and navigate to home
  const onCloseClick = () => {
    callCheckoutApi();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* set backgroundColor image */}

      <Animated.View
        style={[styles.header, {transform: [{translateY: headerTranslateY}]}]}>
        <Animated.Image
          style={[
            styles.headerBackground,
            {
              opacity: imageOpacity,
              transform: [{translateY: imageTranslateY}],
            },
          ]}
          source={{
            uri: event?.mainImage,
          }}
          resizeMode={'cover'}
        />
      </Animated.View>

      {/* set header view */}
      <Animated.View style={styles.backView}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <BackSvg />
        </TouchableOpacity>
      </Animated.View>
      {/* set title on image and header */}
      <Animated.View
        style={[
          {
            transform: [{scale: titleScale}, {translateY: titleTranslateY}],
          },
        ]}>
        <Animated.Text
          onLayout={e => {
            setTitleWidth(e.nativeEvent.layout.width);
          }}
          style={[
            styles.txtName,
            {
              fontSize: animatedFontSize,
              transform: [
                {
                  translateY: animatedTranslateY,
                },
                {
                  translateX: animatedTranslateX,
                },
              ],
            },
          ]}>
          {event?.name}
        </Animated.Text>
      </Animated.View>
      {isLoading ? (
        <LoaderView />
      ) : (
        <Animated.ScrollView
          contentContainerStyle={styles.scrollContentView}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {
              useNativeDriver: false, // false used to set animated font size
            },
          )}
          scrollToOverflowEnabled={true}
          ref={myList}>
          <EventDesc
            event={event}
            onPress={() => onPriceClick(event)}
            onLocationClick={() => onLocationClick(event?.location)}
          />
          {/* open modal view  */}
          <View>
            {isModalVisible && (
              <Modal
                animationType={'fade'}
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                  console.log('Modal has been closed.');
                }}>
                {/*All views of Modal*/}
                <ModalView
                  onPressClose={() => onCloseClick()}
                  setIsModalVisible={setIsModalVisible}
                  purchaseData={purchaseData}
                />
              </Modal>
            )}
          </View>
        </Animated.ScrollView>
      )}
    </SafeAreaView>
  );
};
export default EventDetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eff3fb',
  },
  scrollContentView: {
    paddingTop: HEADER_MAX_HEIGHT - 80,
    padding: 20,
  },
  backView: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 10 : 50,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#7555CF',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: HEADER_WIDTH,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  txtName: {
    color: 'white',
    ...fonts.normalM,
    fontSize: Platform.OS === 'ios' ? 20 : 22,
    fontWeight: '700',
    lineHeight: 28,
  },
});
