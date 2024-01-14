import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Marker } from 'react-native-maps';

export default function MapMarker({ position, driver, setDriverIndex, index }) {
  return (
    <Marker
      onPress={() => setDriverIndex((prev) => (prev = index))}
      coordinate={{
        longitude: position?.longitude + 0.01 * driver.id,
        latitude: position?.latitude + 0.01 * driver.id,
      }}
      tracksViewChanges={true}
    >
      <View
        style={{
          position: 'relative',
        }}
      >
        <Avatar.Image size={65} source={driver.img} />
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: '82%',
    padding: 14,
    alignSelf: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
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
});
