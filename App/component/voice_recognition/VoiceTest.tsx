import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Voice from '@react-native-voice/voice';
import { PermissionsAndroid } from 'react-native';

const VoiceTest: React.FC = () => {
  const [recognized, setRecognized] = useState('');
  const [started, setStarted] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const requestAudioPermission = useCallback(async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone Permission',
          message:
            'This app needs access to your microphone to recognize speech.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission not granted', 'Microphone access is required.');
      }
    } catch (err) {
      console.error('Permission error:', err);
    }
  }, []);

  useEffect(() => {
    Voice.onSpeechStart = () => setStarted(true);
    Voice.onSpeechEnd = () => setStarted(false);
    Voice.onSpeechResults = (e) => setResults(e.value ?? []);

    requestAudioPermission();

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [requestAudioPermission]);

  const startListening = async () => {
    try {
      setResults([]);
      setRecognized('');
      await Voice.start('en-US');
    } catch (e) {
      console.error('Error starting voice recognition:', e);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error('Error stopping voice recognition:', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Voice Test</Text>
      <Button title="Start Listening" onPress={startListening} />
      <Button title="Stop Listening" onPress={stopListening} />
      <Text>Started: {started ? 'Yes' : 'No'}</Text>
      <Text>Recognized: {recognized}</Text>
      <Text>Results:</Text>
      {results.map((result, index) => (
        <Text key={index} style={styles.result}>
          {result}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  result: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default VoiceTest;
