import React from 'react';
import { Switch, View, Text } from 'react-native';

const Lever = ({ label, value, onValueChange, disabled }) => {
  const { switchStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <Switch
        style={switchStyle}
        value={value}
        disabled={disabled}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = {
  switchStyle: {
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Lever };
