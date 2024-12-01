import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const heightValue = useSharedValue(0);
  const rotationValue = useSharedValue(0);
  const opacityValue = useSharedValue(1);

  const toggleAccordion = () => {
    setIsExpanded((prev) => !prev);
    heightValue.value = isExpanded ? withTiming(0) : withTiming(100);
    rotationValue.value = isExpanded ? withTiming(0) : withTiming(90);
    opacityValue.value = isExpanded ? withTiming(1) : withTiming(0);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
    overflow: 'hidden',
  }));

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationValue.value}deg` }],
    opacity: opacityValue.value,
  }));

  return (
    <View style={styles.container}>
      {/* Header */}
      <Pressable style={styles.header} onPress={toggleAccordion}>
        <Text style={styles.headerText}>{title}</Text>
        <Animated.View style={iconStyle}>
          <Icon name="keyboard-arrow-down" size={30} color="lightgrey" />
        </Animated.View>
      </Pressable>

      {/* Collapsible Content */}
      <Animated.View style={[styles.content, animatedStyle]}>
        {/* {isExpanded && <Text>{children}</Text>} */}
        {isExpanded && children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
});

export default Accordion;
