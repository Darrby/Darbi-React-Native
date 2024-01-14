import { Pressable, StyleSheet, Text, View } from 'react-native';
import homeIcon from '../../assets/home.png';
import trips from '../../assets/trips.png';
import wallet from '../../assets/wallet.png';
import more from '../../assets/more.png';
import { Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function BottomTabs({ navigation }) {
  const route = useRoute();
  return (
    <View style={styles.bottomBar}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#8282821f' : 'transparent',
          },
          styles.tab,
        ]}
      >
        <Image source={more} />
        <Text style={route.name === 'more' ? styles.active : styles.tabName}>
          الـمـزيـد
        </Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#8282821f' : 'transparent',
          },
          styles.tab,
        ]}
      >
        <Image source={wallet} />
        <Text style={route.name === 'wallet' ? styles.active : styles.tabName}>
          المحفظة
        </Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#8282821f' : 'transparent',
          },
          styles.tab,
        ]}
      >
        <Image source={trips} />
        <Text style={route.name === 'trips' ? styles.active : styles.tabName}>
          رحلاتي
        </Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#8282821f' : 'transparent',
          },
          styles.tab,
        ]}
        onPress={() => navigation.navigate('home')}
      >
        <Image source={homeIcon} />
        <Text style={route.name === 'home' ? styles.active : styles.tabName}>
          الرئيسية
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    height: 90,
    backgroundColor: '#ffff',
    display: 'flex',
    flexDirection: 'row',
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  tabName: {
    color: '#ACACAC',
    fontSize: 12,
    fontWeight: '400',
  },
  active: {
    color: '#222',
    fontSize: 12,
    fontWeight: '400',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    height: 90,
    right: 0,
    left: 0,
  },
});
