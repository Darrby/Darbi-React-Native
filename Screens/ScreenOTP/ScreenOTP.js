import { useRoute } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  Pressable,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ActivityIndicator } from 'react-native-paper';

export default function ScreenOTP({ navigation }) {
  const route = useRoute();
  const { phoneNumber } = route.params;
  const [hashedNumber, setHashedNumber] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const hashPhoneNumber = () => {
      const hashed = phoneNumber?.split('');
      const length = hashed.length - 3;
      const hashingNumber = hashed.map((x, i) => {
        if (i < length) {
          return '*';
        } else {
          return x;
        }
      });
      setHashedNumber(hashingNumber.join(''));
    };
    hashPhoneNumber();
  }, [phoneNumber]);
  const { goBack } = navigation;
  const handleBack = () => {
    navigation.goBack('ScreenOTP');
  };

  const handleAuth = (code) => {
    console.log(code);
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
      navigation.navigate('home');
    }, 3000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <SafeAreaView style={styles.absolute}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#828282' : 'transparent',
            },
            styles.proceedBttn,
          ]}
          onPress={handleBack}
        >
          <Icon name="arrowright" size={20} color="#171725" />
        </Pressable>
      </SafeAreaView>
      {!isFetching ? (
        <View style={styles.mainCont}>
          <View style={styles.textWrapper}>
            {/* <Text style={styles.title}>
              ادخال رمز الOTP
            </Text> */}
            <Text style={styles.helperTxt}>
              أدخل الرمز الذي أرسلناه إلى رقمك
            </Text>
            <Text style={styles.phoneText}>+20{hashedNumber}</Text>
          </View>
          <OTPInputView
            style={{
              width: '76%',
              height: 136,
            }}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code) => {
              handleAuth(code);
            }}
            placeholderCharacter={'*'}
            secureTextEntry
          />
          <View style={styles.resendCont}>
            <Pressable>
              <Text style={styles.resendLink}>ارسال مرة اخري</Text>
            </Pressable>
            <Text style={styles.questionTxt}>لم يتم ارسال الكود؟</Text>
          </View>
        </View>
      ) : (
        <ActivityIndicator animating={true} color={'green'} />
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  absolute: {
    display: 'flex',
    alignItems: 'flex-end',
    position: 'absolute',
    borderColor: 'red',
    width: '85%',
    top: 70,
  },
  proceedBttn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 12,
    width: 38,
    height: 38,
  },
  mainCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    color: '#171725',
    fontWeight: '600',
    fontSize: 32,
    marginBottom: 16,
  },
  helperTxt: {
    color: '#78828A',
    fontWeight: '500',
    fontSize: 15,
    marginBottom: 8,
  },
  phoneText: {
    color: '#171725',
    fontWeight: '500',
    fontSize: 15,
  },
  underlineStyleBase: {
    borderWidth: 1,
    borderColor: '#E9EBED',
    borderRadius: 24,
    width: 56,
    height: 56,
    backgroundColor: '#F9F9F9',
  },
  underlineStyleHighLighted: {
    borderColor: '#171725',
    color: '#171725',
    fontWeight: '700',
  },
  resendCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  resendLink: {
    fontSize: 15,
    fontWeight: '500',
    color: '#171725',
  },
  questionTxt: {
    fontSize: 15,
    fontWeight: '500',
    color: '#9CA4AB',
  },
});
