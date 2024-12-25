import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CameraSearch from '../../component/CameraSearch';

const ParentComponent = () => {
  const [selectedResult, setSelectedResult] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  const handleResultSelect = (result: string) => {
    console.log('Selected Result:', result);
    setSelectedResult(result); // Update state with selected result
    setShowCamera(false); // Close camera after selection
  };

  return (
    <View style={styles.container}>
      {showCamera ? (
        <CameraSearch onResultSelect={handleResultSelect} />
      ) : (
        <View>
          <Button title="Open Camera" onPress={() => setShowCamera(true)} />
          {selectedResult && (
            <Text style={styles.resultText}>Last Selected Result: {selectedResult}</Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  resultText: { fontSize: 18, marginTop: 20 },
});

export default ParentComponent;
