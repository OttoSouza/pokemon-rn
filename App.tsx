import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/theme";

import { Routes } from './src/routes/index.routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
      <StatusBar
        backgroundColor={theme.textColor.white}
        barStyle="dark-content"
      />
    </ThemeProvider>
  );
}
