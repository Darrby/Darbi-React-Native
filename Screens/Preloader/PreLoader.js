import { Animated, StyleSheet, View } from 'react-native';
import logo from '../../assets/logo.png';
import { useEffect, useRef } from 'react';

export default function PreLoader({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(3)).current; // Initial value for opacity: 0
  const opacityAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacityAnim, {
      toValue: 1,
      delay: 2000,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    const timeOut = () => {
      setTimeout(() => {
        navigation.navigate('main');
      }, 3800);
    };
    timeOut();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', width: 83, height: 105 }}>
        <Animated.Image
          source={logo}
          style={{
            transform: [{ scale: fadeAnim }],
            flex: 1,
            width: 'auto',
          }}
        />
      </View>
      <Animated.Text style={[styles.brandName, { opacity: opacityAnim }]}>
        دربي
      </Animated.Text>
      <Animated.Text style={{ opacity: opacityAnim }}>
        تصفح .. أحجز .. انطلق
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
  brandName: {
    marginTop: -22,
    color: '#000',
    fontWeight: '900',
    fontSize: 40,
  },
});
