import {
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
} from '@gluestack-ui/themed';
import { ActionsheetDragIndicator } from '@gluestack-ui/themed';
import { Actionsheet } from '@gluestack-ui/themed';
import { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { Keyboard, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function SignInPopup({
  isSigninSheetOpen,
  setIsSigninSheetOpen,
  navigation,
}) {
  const [height, setHeight] = useState('$80');
  const [phoneNumber, setPhoneNumber] = useState('');
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setHeight('62%');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setHeight('$72');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleSignIn = () => {
    setIsSigninSheetOpen(false);
    navigation.navigate('ScreenOTP', { phoneNumber });
  };

  return (
    <Actionsheet
      isOpen={isSigninSheetOpen}
      onClose={() => setIsSigninSheetOpen(!isSigninSheetOpen)}
      zIndex={999}
      isKeyboardDismissable={false}
    >
      <ActionsheetBackdrop />
      <ActionsheetContent h={height} zIndex={999}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
          <Text style={styles.heading}>لبدء التفاوض الرجاء تسجيل الدخول</Text>
          <TextInput
            style={styles.input}
            placeholder="رقم الموبيل"
            keyboardType="phone-pad"
            onChangeText={(text) => setPhoneNumber(text)}
          />
          <Pressable
            //   onPress={() => navigation.navigate('home')}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#828282' : '#585858',
              },
              styles.mainBttn,
            ]}
            onPress={handleSignIn}
          >
            <Text style={styles.bttnText}>تسجيل دخول</Text>
          </Pressable>
        </ActionsheetDragIndicatorWrapper>
      </ActionsheetContent>
    </Actionsheet>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    fontFamily: 'Avenir Arabic',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 38,
    color: '#171725CC',
  },
  input: {
    marginTop: 20,
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
    color: '#282A3E',
    textAlign: 'right',
    flexDirection: 'row-reverse',
    paddingBottom: 4,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#EAEAEA',
  },
  mainBttn: {
    marginTop: 40,
    borderRadius: 90,
    width: '100%',
    height: 52,
    display: 'flex',
    alignItems: 'center',
    padding: 12,
    marginBottom: 20,
  },
  bttnText: {
    fontFamily: 'Avenir Arabic',
    color: '#ffff',
    fontSize: 18,
  },
});
