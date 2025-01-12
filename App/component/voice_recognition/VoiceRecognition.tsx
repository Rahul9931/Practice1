import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
} from 'react-native';
//MaterialCommunityIcons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Voice from '@react-native-voice/voice';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';

const SpeechToText = ({handleVoiceToText}) => {
  const [isListening, setIsListening] = useState(false);
  const [result, setResult] = useState('');
  useEffect(() => {
    requestMultiple([PERMISSIONS.IOS.MICROPHONE, PERMISSIONS.ANDROID.RECORD_AUDIO]).then((statuses) => {
      console.log('Camera', statuses[PERMISSIONS.IOS.CAMERA]);
      console.log('FaceID', statuses[PERMISSIONS.IOS.FACE_ID]);
    });
    
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = () => {
    setIsListening(true);
  };

  const onSpeechResults = (e) => {
    console.log(e.value[0])
    setResult(e.value[0]); // Capture the first result
    handleVoiceToText(e.value[0])
    stopListening()
  };

  const onSpeechError = (e) => {
    console.error('Speech Error: ', e);
    setIsListening(false);
  };

  const startListening = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.error('Microphone permission denied');
        return;
      }
    }

    try {
      const a  = await Voice.getSpeechRecognitionServices(); // Specify language
      console.log('Speech recognition services: ', a);
      await Voice.start('en')
    } catch (e) {
      console.error('Start Listening Error: ', e);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (e) {
      console.error('Stop Listening Error: ', e);
    }
  };

  return (
    <TouchableOpacity onPress={isListening?stopListening:startListening} style={[styles.iconSpacing,{flexDirection:'row'}]}>
      {isListening&&<Text style={[{backgroundColor:'grey'}]}>Listening...</Text>}
      {isListening? <Icon name="microphone-off" size={24} color="black" />
    :<Icon name="microphone" size={24} color="black" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconSpacing: {
    marginLeft: 10,
},
  resultText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default SpeechToText;

