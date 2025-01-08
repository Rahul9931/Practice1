import React from 'react';
import Route from './App/navigation/Route';
import { Text, View } from 'react-native';
import VoiceTest from './App/component/voice_recognition/VoiceTest';

const App: React.FC = () => {
  return(
    <View>
      <VoiceTest/>
    </View>
  )
};

export default App;
