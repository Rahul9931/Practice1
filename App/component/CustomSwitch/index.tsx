import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const CustomSwitch = ({ isEnabled, onToggle }) => {
  return (
    <Switch
      trackColor={{ false: "#767577", true: "grey" }} // Customize track colors
      thumbColor={isEnabled ? "black" : "#f4f3f4"}   // Customize thumb color
      ios_backgroundColor="#3e3e3e"                  // Background color for iOS
      onValueChange={onToggle}                       // Notify parent of toggle change
      value={isEnabled}   
      style={{margin:10}}                           // Current state
    />
  );
};

export default CustomSwitch;
