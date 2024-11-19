import React from 'react';
import { View, StyleSheet } from 'react-native';

const Hr = ({ color = '#ccc', thickness = 1, marginVertical = 10 }) => {
  return (
    <View
      style={[
        styles.hr,
        { backgroundColor: color, height: thickness, marginVertical },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  hr: {
    width: '80%',
  },
});

export default Hr;
