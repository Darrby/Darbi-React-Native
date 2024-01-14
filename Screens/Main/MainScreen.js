import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/logo.png';
import pagination from '../../assets/pagination.png';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
SplashScreen.preventAutoHideAsync();

export default function Main({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Avenir Arabic': require('../../assets/fonts/AvenirArabic-Heavy.otf'),
    'Avenir Arabic Light': require('../../assets/fonts/AvenirArabic-Medium.otf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={{ display: 'flex', width: 73, height: 90 }}>
        <Image
          source={logo}
          style={{
            flex: 1,
            width: 'auto',
          }}
        />
      </View>
      <View style={styles.box}>
        <Image source={pagination} />
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>اهلا بك فى دربي</Text>
          <Text style={styles.paragraph}>تصفح واطلع على جميع الرحلات</Text>
        </View>
        <Text style={styles.smallTxt}>
          تصفح كل ماهو جديد وابقي على متابعة دائمة معنا
        </Text>
        <Pressable
          onPress={() => navigation.navigate('home')}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#828282' : '#585858',
            },
            styles.mainBttn,
          ]}
        >
          <Text style={styles.btnText}>ابدأ الآن</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 60,
  },
  box: {
    padding: 30,
    backgroundColor: '#E6E5EB99',
    borderRadius: 30,
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 25,
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Avenir Arabic',
    color: '#5E5E5E',
    fontSize: 24,
  },
  paragraph: {
    fontFamily: 'Avenir Arabic',
    paddingTop: 10,
    color: '#000000',
    fontSize: 20,
  },
  smallTxt: {
    fontFamily: 'Avenir Arabic Light',
    color: '#636366',
    fontSize: 14,
  },
  mainBttn: {
    borderRadius: 90,
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    padding: 12,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
});
