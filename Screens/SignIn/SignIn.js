import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import loginLogo from '../../assets/logoauth.png';
import { TextInput } from 'react-native-paper';
import { Pressable } from 'react-native';
import { useEffect, useState } from 'react';

export default function SignIn({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    const validate = () => {
      if (phoneNumber !== '' && phoneNumber.length > 2) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    validate();
  }, [phoneNumber]);

  const handleNextOTP = () => {
    navigation.navigate('ScreenOTP', { phoneNumber });
  };

  return (
    <KeyboardAvoidingView
      behavior={
        Platform.OS === 'ios' ? 'padding' : 'height'
      }
      style={styles.container}
    >
      <Image source={loginLogo} style={styles.logoImg} />
      <View style={styles.formContainer}>
        <View style={styles.titleCont}>
          <Text style={styles.title}>تسجيل دخول</Text>
          <Text style={styles.slog}>عضوية جديدة</Text>
        </View>
        <TextInput
          label="رقم الموبيل"
          style={styles.input}
          theme={{
            colors: {
              primary: '#068B80',
              text: '#A4A4A4',
            },
          }}
          mode="flat"
          keyboardType="phone-pad"
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <Pressable
          //   onPress={() => navigation.navigate('home')}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? '#828282'
                : isDisabled
                ? '#58585837'
                : '#585858',
            },
            styles.mainBttn,
          ]}
          disabled={isDisabled}
          onPress={handleNextOTP}
        >
          <Text style={styles.bttnText}>التالي</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FA',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '100%',
    flexDirection: 'column',
  },
  logoImg: {
    width: 61,
    height: 115,
  },
  formContainer: {
    backgroundColor: '#ffff',
    width: '100%',
    borderRadius: '65px 65px 0px 0px',
    paddingTop: 39,
    paddingBottom: 39,
    paddingRight: 29,
    paddingLeft: 29,
    gap: 47,
  },
  titleCont: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    gap: 20,
  },
  title: {
    color: '#282A3E',
    fontSize: 26,
    fontWeight: '800',
  },
  slog: {
    color: '#676767',
    fontWeight: '500',
    fontSize: 18,
  },
  input: {
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
    color: '#282A3E',
    textAlign: 'right',
    flexDirection: 'row-reverse',
    padding: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#EAEAEA',
  },
  mainBttn: {
    marginTop: 20,
    borderRadius: 90,
    width: '100%',
    height: 48,
    display: 'flex',
    alignItems: 'center',
    padding: 12,
  },
  bttnText: {
    color: '#ffff',
    fontWeight: '900',
    fontSize: 15,
  },
});
