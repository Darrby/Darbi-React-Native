import { ScrollView, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useRef, useState } from 'react';
import BottomTabs from '../../components/BottomTabs/BottomTabs';
import Swiper from 'react-native-swiper';
import SwipperSlide from '../../components/SwipperSlide/swipperSlide';
import MapMarker from '../../components/MapMarker/MapMarker';
import avatar from '../../assets/driveravatar.jpeg';
import TopBar from '../../components/TopBar/TopBar';
import { IconButton } from 'react-native-paper';
import SignInPopup from '../../components/SignInPopup/SignInPopup';

export default function Home({ navigation }) {
  const mapRef = useRef();
  const [position, setPosition] = useState({
    latitude: 24.774265,
    longitude: 46.738586,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [driverIndex, setDriverIndex] = useState(0);
  const [active, setActive] = useState(false);
  const [isSigninSheetOpen, setIsSigninSheetOpen] = useState(false);
  // Get Geolocation of the user and show it on the map
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    };
    getLocation();
  }, []);

  const driverData = [
    {
      id: 1,
      name: '1محمد عبد اللة',
      img: avatar,
      nationality: 'سعودي',
      rating: 5,
    },
    {
      id: 2,
      name: '2محمد عبد اللة',
      img: avatar,
      nationality: 'هندي',
      rating: 4,
    },
    {
      id: 3,
      name: '3محمد عبد اللة',
      img: avatar,
      nationality: 'مصري',
      rating: 3,
    },
    {
      id: 4,
      name: ' 4محمد عبد اللة',
      img: avatar,
      nationality: 'عراقي',
      rating: 4,
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        showsUserLocation={true}
        region={position}
        showsMyLocationButton={false}
      >
        {driverData.map((driver, index) => (
          <MapMarker
            position={position}
            driver={driver}
            key={driver.id}
            setDriverIndex={setDriverIndex}
            index={index}
          />
        ))}
      </MapView>
      <TopBar mapRef={mapRef} position={position} />

      <View style={styles.swiperContainer}>
        <View style={{ height: active ? 620 : 100, position: 'relative' }}>
          {active && (
            <IconButton
              icon={require('../../assets/close.png')}
              style={{
                position: 'absolute',
                top: -50,
                right: 22,
                borderRadius: 50,
                backgroundColor: '#ffff',
              }}
              size={20}
              color="#11171966"
              onPress={() => setActive(false)}
            />
          )}
          <Swiper
            showsButtons={false}
            showsPagination={false}
            index={driverIndex}
          >
            {driverData.map((driver) => (
              <SwipperSlide
                driver={driver}
                key={driver.id}
                setActive={setActive}
                active={active}
                navigation={navigation}
                setIsSigninSheetOpen={setIsSigninSheetOpen}
              />
            ))}
          </Swiper>
        </View>
      </View>

      <SignInPopup
        isSigninSheetOpen={isSigninSheetOpen}
        setIsSigninSheetOpen={setIsSigninSheetOpen}
        navigation={navigation}
      />
      <BottomTabs navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  swiperContainer: {
    position: 'absolute',
    bottom: 110,
    width: '100%',
    display: 'flex',
    zIndex: 0,
  },
});
