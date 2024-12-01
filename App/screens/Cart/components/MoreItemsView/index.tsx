import React from "react";
import { View, Pressable, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";

const MoreItemsView = ({
  title = "Default Title", // Default value for title
  showButton = false,     // Optional: Defaults to false
  buttonText = "View All", // Optional: Default text
  onButtonPress = () => {}, // Optional: No-op function
}) => {
  return (
    <View>
      <Pressable style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        {/* Conditionally render Icon or Button */}
        {showButton ? (
          <Button title={buttonText} onPress={onButtonPress} color="lightgrey" />
        ) : (
          <Icon name="keyboard-arrow-right" size={30} color="lightgrey" />
        )}
      </Pressable>
    </View>
  );
};

export default MoreItemsView;
