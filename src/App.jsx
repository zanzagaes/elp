import { CssBaseline } from '@mui/material';
import React from 'react';
import Header from './components/Header'
import Visit from './components/PlaceToVisit';
import './App.css'

const styles = {
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg1.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
    },
    
};

export default function App(){
  
  return (
      <div style={styles.root} className="rootCl">
        <CssBaseline/>
        <Header className="section"/>
        <Visit  className="section"/>
      </div>
  );
}