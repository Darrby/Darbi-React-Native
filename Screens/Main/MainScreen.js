import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import logo from '../../assets/logo.png';
import pagination from '../../assets/pagination.png';
import BottomTabs from '../../components/BottomTabs/BottomTabs';

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{ display: 'flex', width: 73, height: 90 }}
      >
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
          <Text style={styles.titleText}>
            اهلا بك فى دربي
          </Text>
          <Text style={styles.paragraph}>
            تصفح واطلع علي جميع الرحلات
          </Text>
        </View>
        <Text style={styles.smallTxt}>
          تصفح كل ماهو جديد وابقي علي متابعة دائمة معنا
        </Text>
        <Pressable
          onPress={() => navigation.navigate('signin')}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? '#828282'
                : '#585858',
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
    color: '#5E5E5E',
    fontWeight: '900',
    fontSize: 24,
  },
  paragraph: {
    paddingTop: 10,
    color: '#000000',
    fontSize: 18,
    fontWeight: '700',
  },
  smallTxt: {
    color: '#636366',
    fontSize: 13,
    fontWeight: '400',
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
