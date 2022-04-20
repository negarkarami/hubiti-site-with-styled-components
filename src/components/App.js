import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import LightTheme from '../themes/light';
import DarkTheme from '../themes/dark';
import Routing from "../bin/routing";
import {GlobalStyle} from "./common";

export default function App() {
  const [theme, setTheme] = useState(LightTheme);

  return (
      <ThemeProvider theme={{...theme, setTheme: () => {
          setTheme(s => s.id === 'light' ? DarkTheme: LightTheme)
        }}}>
        <GlobalStyle/>
        <Routing />
      </ThemeProvider>
  );
}
