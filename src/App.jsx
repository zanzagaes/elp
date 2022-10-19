import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import React from 'react';
import Header from './components/Header'
import ImagePage from './components/ImagePage';
import './App.css'
import 'typeface-nunito';

const theme = createTheme({
    typography: {
        fontFamily: "Nunito"
    }
});

const App = () => <div className="rootCl">
  <ThemeProvider  theme={theme} >
    <CssBaseline/>
    <Header className="section"/>
    <ImagePage className="section"/>
  </ThemeProvider>
</div>;

export default App;