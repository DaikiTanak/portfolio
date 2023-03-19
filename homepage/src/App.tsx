import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';


import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';

import theme from "./theme"

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
    <BrowserRouter>
        <Header />
        <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/profile`} element={<Profile />} />
        <Route path={`/contact`} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
