import React, { useState } from 'react';
import './App.css';
import { AppHeader } from './components/AppHeader';
import { MainContent } from './components/MainContent';
import buttonsHandler from './components/ButtonsHandler';
import { GoBackArrow } from './components/GoBackArrow';

export const App: React.FC = () => {
  const [activeWindow, changeActiveWindow] = useState('Фильмы');
  const {buttons, setActiveButton} = buttonsHandler();

  return <>
    <div className = 'CinemaApp'>
      <GoBackArrow buttons = {buttons} activeWindow = {activeWindow} changeActiveWindow = {changeActiveWindow}/>

      <div className = 'MainContent'>
        <AppHeader changeActiveWindow = {changeActiveWindow} buttons= {buttons} setActiveButton = {setActiveButton} />
        <MainContent activeWindow = {activeWindow} changeActiveWindow = {changeActiveWindow} headerButtons = {buttons}/>
      </div>
    </div>
  </> 
}
