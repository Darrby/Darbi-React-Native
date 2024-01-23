import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { Avatar } from 'react-native-paper';
import car from '../../assets/car.jpeg';

export default function SwipperSlide({
  driver,
  setActive,
  active,
  setIsSigninSheetOpen,
}) {
  const handleClick = () => {
    if (!active) {
      setActive(true);
    }
  };

  return (
    <Pressable style={[styles.slide]} onPress={handleClick}>
      <View style={styles.cont}>
        <View style={styles.text}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 4,
            }}
          >
            <AirbnbRating
              count={driver.rating}
              size={12}
              isDisabled={true}
              showRating={false}
            />
            <Text style={styles.name}>{driver.name}</Text>
          </View>
          <Text style={styles.desc}>{driver.nationality}</Text>
        </View>
        <Avatar.Image size={65} source={driver.img} />
      </View>

      {active && (
        <>
          <View
            style={[
              styles.cont,
              {
                flexDirection: 'column',
              },
            ]}
          >
            <Text style={styles.secTitle}>السيارة</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Image
                source={car}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 8,
                  flex: 1,
                  maxWidth: 80,
                }}
              />
              <View style={styles.carDescWrapper}>
                <View style={styles.textDesc}>
                  <Text style={[styles.txt, { fontSize: 12 }]}>
                    نوع السيارة:
                  </Text>
                  <Text
                    style={[styles.txt, { color: '#636366', fontSize: 12 }]}
                  >
                    مرسيدس
                  </Text>
                </View>
                <View style={styles.textDesc}>
                  <Text style={[styles.txt, { fontSize: 12 }]}>
                    نوع السيارة:
                  </Text>
                  <Text
                    style={[styles.txt, { color: '#636366', fontSize: 12 }]}
                  >
                    مرسيدس
                  </Text>
                </View>
                <View style={styles.textDesc}>
                  <Text style={[styles.txt, { fontSize: 12 }]}>
                    نوع السيارة:
                  </Text>
                  <Text
                    style={[styles.txt, { color: '#636366', fontSize: 12 }]}
                  >
                    مرسيدس
                  </Text>
                </View>
                <View style={styles.textDesc}>
                  <Text style={[styles.txt, { fontSize: 12 }]}>
                    نوع السيارة:
                  </Text>
                  <Text
                    style={[styles.txt, { color: '#636366', fontSize: 12 }]}
                  >
                    مرسيدس
                  </Text>
                </View>
                <View style={styles.textDesc}>
                  <Text style={[styles.txt, { fontSize: 12 }]}>
                    نوع السيارة:
                  </Text>
                  <Text
                    style={[styles.txt, { color: '#636366', fontSize: 12 }]}
                  >
                    مرسيدس
                  </Text>
                </View>
                <View style={styles.textDesc}>
                  <Text style={[styles.txt, { fontSize: 12 }]}>
                    نوع السيارة:
                  </Text>
                  <Text
                    style={[styles.txt, { color: '#636366', fontSize: 12 }]}
                  >
                    مرسيدس
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.cont,
              {
                flexDirection: 'column',
              },
            ]}
          >
            <Text style={styles.secTitle}>الخدمة</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  textAlign: 'left',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}
              >
                <View style={styles.textDesc}>
                  <Text style={styles.txt}> نوعها:</Text>
                  <Text style={[styles.txt, { color: '#636366' }]}>
                    مميزة VIP
                  </Text>
                </View>
                <View style={styles.textDesc}>
                  <Text style={styles.txt}> التوصيل الي:</Text>
                  <Text style={[styles.txt, { color: '#636366' }]}>
                    (السلمانية)
                  </Text>
                </View>
                <View style={styles.textDesc}>
                  <Text style={styles.txt}> ملاحظات:</Text>
                  <Text style={[styles.txt, { color: '#636366' }]}>
                    (لا يوجد ملاحظات)
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.cont,
              {
                flexDirection: 'column',
              },
            ]}
          >
            <Text style={styles.secTitle}>اخري</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  textAlign: 'left',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}
              >
                <View style={styles.textDesc}>
                  <Text style={styles.txt}> التدخين:</Text>
                  <Text style={[styles.txt, { color: '#636366' }]}>مسموح</Text>
                </View>
                <View style={styles.textDesc}>
                  <Text style={styles.txt}> الموسيقي:</Text>
                  <Text style={[styles.txt, { color: '#636366' }]}>مسموح</Text>
                </View>
                <View style={styles.textDesc}>
                  <Text style={styles.txt}> حرم:</Text>
                  <Text style={[styles.txt, { color: '#636366' }]}>نعم</Text>
                </View>
                <View style={styles.textDesc}>
                  <Text style={styles.txt}> الحيونات:</Text>
                  <Text style={[styles.txt, { color: '#636366' }]}>مسموح</Text>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            onPress={() => setIsSigninSheetOpen(true)}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#828282' : '#585858',
              },
              styles.mainBttn,
            ]}
          >
            <Text style={styles.btnText}> التفاوض مع الكابتن</Text>
          </Pressable>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: '82%',
    flex: 1,
    alignSelf: 'center',
    display: 'flex',
    gap: 12,
    justifyContent: 'flex-end',
  },
  cont: {
    padding: 14,
    backgroundColor: '#ffff',
    borderRadius: 16,
    gap: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
    fontFamily: 'Avenir Arabic',
  },
  desc: {
    textAlign: 'right',
    color: '#828282',
    fontSize: 16,
    fontFamily: 'Avenir Arabic',
  },
  secTitle: {
    marginTop: -10,
    fontFamily: 'Avenir Arabic Light',
    color: 'black',
    fontSize: 18,
  },
  carDescWrapper: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  textDesc: {
    padding: 2,
    display: 'flex',
    flexDirection: 'row-reverse',
    gap: 4,
  },
  txt: {
    fontFamily: 'Avenir Arabic Light',
    color: 'black',
    fontSize: 14,
  },
  mainBttn: {
    borderRadius: 40,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: 14,
  },
  btnText: {
    fontFamily: 'Avenir Arabic Light',
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
