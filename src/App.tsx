import { stringify } from 'querystring';
import React, { useState } from 'react';
import './App.css';
import { AppHeader } from './components/AppHeader';
import { MainContent } from './components/MainContent';

export const App: React.FC = () => {
  const [activeWindow, changeActiveWindow] = useState('Фильмы');
  return <>
    <AppHeader changeActiveWindow = {changeActiveWindow}/>
    <MainContent activeWindow = {activeWindow} changeActiveWindow = {changeActiveWindow}/>
  </>
}
