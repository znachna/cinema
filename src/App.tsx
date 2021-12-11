import { stringify } from 'querystring';
import React, { useState } from 'react';
import './App.css';
import { AppHeader } from './components/AppHeader';
import { MainContent } from './components/MainContent';
import buttonsHandler from './components/ButtonsHandler';

export const App: React.FC = () => {
  const [activeWindow, changeActiveWindow] = useState('Фильмы');
  const {buttons, setActiveButton} = buttonsHandler();

  return <>
    <AppHeader changeActiveWindow = {changeActiveWindow} buttons= {buttons} setActiveButton = {setActiveButton} />
    <MainContent activeWindow = {activeWindow} changeActiveWindow = {changeActiveWindow} headerButtons = {buttons}/>
  </>
}
