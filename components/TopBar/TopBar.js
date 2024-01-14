import React, { useEffect, useState } from 'react';
import { IconButton, Searchbar } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function TopBar({ mapRef, position }) {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      setExpanded(true);
    }
  }, [query]);
  return (
    <SafeAreaView
      style={[
        styles.absoluteCont,
        {
          justifyContent: expanded ? 'center' : 'space-between',
        },
      ]}
    >
      <IconButton
        icon={require('../../assets/target.png')}
        style={[
          styles.bttn,
          {
            display: expanded ? 'none' : 'block',
            backgroundColor: expanded ? 'transparent' : '#ffff',
          },
        ]}
        size={20}
        color="#11171966"
        onPress={() => mapRef.current.animateToRegion(position)}
      />
      <Searchbar
        inputStyle={{
          color: '#58585899',
        }}
        style={[
          styles.search,
          { width: expanded ? '80%' : 180, flexDirection: 'row-reverse' },
        ]}
        textAlign="right"
        placeholder="البحث بالعنوان"
        onChangeText={(e) => setQuery(e)}
        onFocus={() => setExpanded(true)}
        onClearIconPress={() => setExpanded(false)}
        value={query}
        mode="bar"
        iconColor="#58585899"
      />
      <IconButton
        icon={require('../../assets/filter.png')}
        style={[
          styles.bttn,
          {
            display: expanded ? 'none' : 'block',
            backgroundColor: expanded ? 'transparent' : '#ffff',
          },
        ]}
        size={20}
        color="#11171966"
        onPress={() => console.log('Pressed')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  search: {
    height: 60,
    backgroundColor: '#ffff',
  },
});
