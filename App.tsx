/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

import { register } from '@ionic/portals-react-native';
import { Home } from './components/Home';

register(
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNzI4MmZkMS03OGIyLTQwZDAtOGVlZS1iNWMwZDRlNTRiY2QiLCJqdGkiOiJUUkIyc0w2V2hwXy14VXp2ZUJmS1JKcmpnVHVVNUFzdzFENW0ySDNkd2FjIn0.jtRAXXr7t47xa3M-K7ivBxXDI4uCr2lIu4tWNDz4KLDyZyulCYytiqXLzKI0qTJ2E6NffhMcsdr_uJwAI5lEoJndY3_JCDIk12tjJ4J6k6I_ISo1Jl7DofSdVsznFgQ9Ed3Wgt4yKFWIbbXxiMJ_1sJJlR0OdbQYTKiCMt4sEXFf_xAiL9TSWQkCNubq06rY0xrTw3p7b0eG3xIwmzNYJZ_q6vM6P0HWNq4tFjAd-yfdBVi8CFhUrxxBcHDZxdrVy10lI1XiLkmQkpu4yyowdgk8DdqQZ1we4Mjk_bzrmZHf6Eh5CqY1OFGNMb_x0-yfFqNfxOT9oSTJAH83_elZTA',
);


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Home/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
