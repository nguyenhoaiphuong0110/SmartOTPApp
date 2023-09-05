import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import { DefaultTheme } from 'react-native-paper'
import Tabs from './Tabs'
import StackNavigatorApp from './StackNavigatorApp'
import { colors } from './themes/colors'
import { MovieContext } from './Context';
const themes={
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        border:"transparent"
    },
};
const App2 = () => {
  return (
    <>
      <MovieContext>
        <StackNavigatorApp />
        <StatusBar style="auto" />
      </MovieContext>
    </>
  )
}

export default App2