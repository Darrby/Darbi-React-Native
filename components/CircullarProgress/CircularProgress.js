import React from 'react';
import { View, StyleSheet } from 'react-native';
/**
 * Override styles that get passed from props
 **/
propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }],
  };
};

renderThirdLayer = (percent) => {
  if (percent > 50) {
    /**
     * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
     * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
     * before passing to the propStyle function
     **/
    return (
      <View
        style={[
          styles.secondProgressLayer,
          propStyle(percent - 50, 45),
        ]}
      ></View>
    );
  } else {
    return <View style={styles.offsetLayer}></View>;
  }
};

const CircularProgress = ({ percent }) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.firstProgressLayer,
          firstProgressLayerStyle,
        ]}
      ></View>
      {renderThirdLayer(percent)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    position: 'absolute',
    width: 65,
    height: 65,
    borderWidth: 7,
    borderRadius: 100,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstProgressLayer: {
    width: 65,
    height: 65,
    borderRightWidth: 7,
    borderTopWidth: 7,
    borderRadius: 100,
    position: 'absolute',
    borderRightColor: '#3498db',
    borderTopColor: '#3498db',
    zIndex: 10,
    transform: [{ rotateZ: '-135deg' }],
  },
  secondProgressLayer: {
    width: 65,
    height: 65,
    position: 'absolute',
    zIndex: 10,
    borderRadius: 100,
    borderRightWidth: 7,
    borderTopWidth: 7,
    borderRightColor: '#3498db',
    borderTopColor: '#3498db',
    transform: [{ rotateZ: '45deg' }],
  },
  offsetLayer: {
    width: 65,
    height: 65,
    position: 'absolute',
    borderWidth: 7,
    borderRadius: 100,
    borderRightWidth: 7,
    borderTopWidth: 7,
    borderRightColor: 'grey',
    borderTopColor: 'grey',
    zIndex: 10,
    transform: [{ rotateZ: '-135deg' }],
  },
});

export default CircularProgress;
