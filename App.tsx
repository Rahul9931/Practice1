import React, { useState } from 'react';
import Route from './App/navigation/Route';
import { Text, View } from 'react-native';
import VoiceTest from './App/component/voice_recognition/VoiceTest';
import SpeechToText from './App/component/voice_recognition/VoiceRecognition';

const App: React.FC = () => {
  const [voice,setVoice] = useState('a')
  return(
    <View style={[{flex:1, justifyContent:'center',alignItems:'center'}]}>
      {/* <VoiceTest/> */}
      <SpeechToText handleVoiceToText={(v)=>setVoice(v)}/>
        <Text>{voice}</Text>
    </View>
  )
};

export default App;