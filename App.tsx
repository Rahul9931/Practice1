import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

interface Item {
  id: string;
  title: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Item[]>([
    { id: '1', title: 'Email 1' },
    { id: '2', title: 'Email 2' },
    { id: '3', title: 'Email 3' },
    { id: '4', title: 'Email 4' },
    { id: '5', title: 'Email 5' },
    { id: '6', title: 'Email 6' },
    { id: '7', title: 'Email 7' },
    { id: '8', title: 'Email 8' },
    { id: '9', title: 'Email 9' },
    { id: '10', title: 'Email 10' },
    { id: '11', title: 'Email 11' },
    { id: '12', title: 'Email 12' },
    { id: '13', title: 'Email 13' },
    { id: '14', title: 'Email 14' },
    { id: '15', title: 'Email 15' },
    { id: '16', title: 'Email 16' },
    { id: '17', title: 'Email 17' },
  ]);

  const handleDelete = (id: string) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const RenderItem: React.FC<{ item: Item }> = ({ item }) => {
    const translateX = useSharedValue(0); // Tracks horizontal movement
    const opacity = useSharedValue(1); // Controls item opacity for fade effect

    const gestureHandler = useAnimatedGestureHandler({
      onStart: (_, context: any) => {
        context.startX = translateX.value;
      },
      onActive: (event, context) => {
        const horizontalSwipe = Math.abs(event.translationX) > Math.abs(event.translationY);

        // Only move horizontally
        if (horizontalSwipe) {
          translateX.value = context.startX + event.translationX;
        }
      },
      onEnd: (event) => {
        // If swipe is greater than threshold, animate out and delete
        if (Math.abs(event.translationX) > 150) {
          translateX.value = withSpring(event.translationX > 0 ? 500 : -500, {
            damping: 15, // Damping for smooth exit
            stiffness: 100,
          });
          opacity.value = withSpring(0, { damping: 20, stiffness: 100 });
          runOnJS(handleDelete)(item.id);
        } else {
          translateX.value = withSpring(0, { damping: 20, stiffness: 100 });
        }
      },
    });

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
      opacity: opacity.value,
    }));

    return (
      <GestureHandlerRootView style={styles.itemContainer}>
        <PanGestureHandler onGestureEvent={gestureHandler} minDist={10}>
          <Animated.View style={[styles.item, animatedStyle]}>
            <Text style={styles.itemText}>{item.title}</Text>
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RenderItem item={item} />}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  itemContainer: {
    overflow: 'hidden', // Ensure collapsed items are hidden
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default App;
