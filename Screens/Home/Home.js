import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useRef, useState } from 'react';
import {
  BottomNavigation,
  IconButton,
  Searchbar,
} from 'react-native-paper';

const MusicRoute = () => <Text></Text>;

const AlbumsRoute = () => <Text></Text>;

const RecentsRoute = () => <Text></Text>;

const NotificationsRoute = () => <Text></Text>;

export default function Home() {
  const mapRef = useRef();
  const [position, setPosition] = useState({});
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(3);
  const [routes] = useState([
    {
      key: 'more',
      title: 'الـمـزيـد',
      focusedIcon: require('../../assets/more.png'),
      unfocusedIcon: require('../../assets/more.png'),
    },
    {
      key: 'wallet',
      title: 'المحفظة',
      focusedIcon: require('../../assets/wallet.png'),
    },
    {
      key: 'albums',
      title: 'رحلاتي',
      focusedIcon: require('../../assets/trips.png'),
    },
    {
      key: 'music',
      title: 'الرئيسية',
      focusedIcon: require('../../assets/home.png'),
      focusedIcon: require('../../assets/home.png'),
    },
  ]);

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
  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    wallet: RecentsRoute,
    more: NotificationsRoute,
  });
  return (
    <View style={styles.container} location={position}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={position}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
      >
        {/* <Marker
          coordinate={position}
          tracksViewChanges={true}
        /> */}
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
      <BottomNavigation
        theme={{
          colors: { secondaryContainer: 'transparent' },
        }}
        activeColor="#343434"
        inactiveColor="#ACACAC"
        sceneAnimationEnabled={false}
        barStyle={{ backgroundColor: '#ffff' }}
        style={styles.bottomNav}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
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
});
