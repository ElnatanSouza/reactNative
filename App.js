import React from 'react';
import { 
  View, 
  StatusBar, 
} from 'react-native';
import Routes from './src/routes'

function App() {
  return (
    <View>
      <StatusBar />

      <Routes />
    </View>
  )
}

export default App