import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  IconButton,
  Searchbar,
} from 'react-native-paper';
import avatar from '../../assets/driveravatar.jpeg';
import CircularProgress from '../../components/CircullarProgress/CircularProgress';
import BottomTabs from '../../components/BottomTabs/BottomTabs';
import Swiper from 'react-native-swiper';
import { AirbnbRating, Rating } from 'react-native-ratings';

export default function Home({ navigation }) {
  const mapRef = useRef();
  const [position, setPosition] = useState(null);
  const [query, setQuery] = useState('');

  // Get Geolocation of the user and show it on the map
  useEffect(() => {
    const getLocation = async () => {
      let { status } =
        await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log(
          'Permission to access location was denied'
        );
        return;
      }
      let location =
        await Location.getCurrentPositionAsync();
      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    };
    getLocation();
  }, []);

  return (
    <View style={styles.container} location={position}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={position}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
      >
        {position && (
          <Marker
            coordinate={{
              longitude: position.longitude + 0.01,
              latitude: position.latitude + 0.01,
            }}
            tracksViewChanges={true}
          >
            <View
              style={{
                position: 'relative',
              }}
            >
              <CircularProgress percent={100} />
              <Avatar.Image size={65} source={avatar} />
            </View>
          </Marker>
        )}
        {position && (
          <Marker
            coordinate={{
              longitude: position.longitude + -0.01,
              latitude: position.latitude + 0.01,
            }}
            tracksViewChanges={true}
          >
            <View
              style={{
                position: 'relative',
              }}
            >
              <CircularProgress percent={60} />
              <Avatar.Image size={65} source={avatar} />
            </View>
          </Marker>
        )}

        {position && (
          <Marker
            coordinate={{
              longitude: position.longitude,
              latitude: position.latitude + 0.02,
            }}
            tracksViewChanges={true}
          >
            <View
              style={{
                position: 'relative',
              }}
            >
              <CircularProgress percent={90} />
              <Avatar.Image size={65} source={avatar} />
            </View>
          </Marker>
        )}
        {position && (
          <Marker
            coordinate={{
              longitude: position.longitude + 0.01,
              latitude: position.latitude,
            }}
            tracksViewChanges={true}
          >
            <View
              style={{
                position: 'relative',
              }}
            >
              <CircularProgress percent={80} />
              <Avatar.Image size={65} source={avatar} />
            </View>
          </Marker>
        )}
      </MapView>
      <SafeAreaView style={styles.absoluteCont}>
        <IconButton
          icon={require('../../assets/target.png')}
          style={styles.bttn}
          size={20}
          color="#11171966"
          onPress={() =>
            mapRef.current.animateToRegion(position)
          }
        />
        <Searchbar
          inputStyle={{
            color: '#58585899',
            textAlign: 'right',
          }}
          style={styles.serach}
          placeholder="البحث بالعنوان"
          onChangeText={(e) => setQuery(e)}
          value={query}
          mode="bar"
          iconColor="#58585899"
        />
        <IconButton
          icon={require('../../assets/filter.png')}
          style={styles.bttn}
          size={20}
          color="#11171966"
          onPress={() => console.log('Pressed')}
        />
      </SafeAreaView>
      <View style={styles.swiperContainer}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination={false}
        >
          <View style={styles.slide}>
            <Avatar.Image size={65} source={avatar} />
            <View style={styles.text}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <AirbnbRating
                  count={4}
                  size={12}
                  isDisabled={true}
                  showRating={false}
                />
                <Text style={styles.name}>
                  محمد عبدالله{' '}
                </Text>
              </View>

              <Text style={styles.desc}>
                التوصيل من (السلمانية) الي (جدة)
              </Text>
            </View>
          </View>
          <View style={styles.slide}>
            <Avatar.Image size={65} source={avatar} />
            <View style={styles.text}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <AirbnbRating
                  count={4}
                  size={12}
                  isDisabled={true}
                  showRating={false}
                />
                <Text style={styles.name}>
                  محمد عبدالله{' '}
                </Text>
              </View>

              <Text style={styles.desc}>
                التوصيل من (السلمانية) الي (جدة)
              </Text>
            </View>
          </View>
          <View style={styles.slide}>
            <Avatar.Image size={65} source={avatar} />
            <View style={styles.text}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <AirbnbRating
                  count={4}
                  size={12}
                  isDisabled={true}
                  showRating={false}
                />
                <Text style={styles.name}>
                  محمد عبدالله{' '}
                </Text>
              </View>

              <Text style={styles.desc}>
                التوصيل من (السلمانية) الي (جدة)
              </Text>
            </View>
          </View>
        </Swiper>
      </View>
      <BottomTabs navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  absoluteCont: {
    position: 'absolute',
    right: 10,
    left: 10,
    top: 30,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bttn: {
    height: 38,
    width: 38,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  serach: {
    width: 168,
    height: 56,
    backgroundColor: '#ffff',
    flexDirection: 'row-reverse',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    height: 90,
    right: 0,
    left: 0,
  },
  wrapper: {},
  slide: {
    width: '82%',
    padding: 14,
    alignSelf: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 16,
    gap: 12,
  },
  text: {
    flex: 1,
    display: 'flex',
    gap: 2,
  },
  name: {
    textAlign: 'right',
    fontWeight: '800',
    fontSize: 16,
    color: 'black',
  },
  desc: {
    textAlign: 'right',
    color: '#828282',
    fontSize: 12,
  },
  swiperContainer: {
    display: 'flex',
    position: 'absolute',
    bottom: 110,
    height: 100,
    width: '100%',
  },
});
