import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

// Icon library map
const IconTypes = {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Entypo,
};

const CustomIcon = ({
  type = 'MaterialIcons', // Default to MaterialIcons if type is not provided
  name = 'help',        // Default to a generic icon name if not provided
  size = 24,            // Default icon size
  color = 'black',      // Default color
  style = {}               // Optional style
}) => {
  const IconComponent = IconTypes[type];

  if (!IconComponent) {
    console.error(`Icon type "${type}" is not supported.`);
    return null;
  }

  return <IconComponent name={name} size={size} color={color} style={style} />;
};

export default CustomIcon;
