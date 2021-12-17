import React, { useState } from 'react';
import './App.css';
import { AppHeader } from './components/AppHeader';
import { MainContent } from './components/MainContent';
import buttonsHandler from './components/ButtonsHandler';
import { GoBackArrow } from './components/GoBackArrow';
import IArrowHandler from './components/ArrowHandler';
import { RightArrow } from './components/RightArrow';

export const App: React.FC = () => {
  const [activeWindow, changeActiveWindow] = useState('Фильмы');
  const {depentableSites, updateDepentable} = IArrowHandler();
  const {buttons, setActiveButton} = buttonsHandler();
  
  return <>
    <div className = 'CinemaApp'>

    <GoBackArrow buttons = {buttons} activeWindow = {activeWindow} changeActiveWindow = {changeActiveWindow} 
                   depentables = {depentableSites} updateDepentable = {updateDepentable}/>

      <div className = 'MainContent'>
        <AppHeader changeActiveWindow = {changeActiveWindow} buttons= {buttons} setActiveButton = {setActiveButton} />
        <MainContent setDepentable = {updateDepentable} depentables={depentableSites}
         activeWindow = {activeWindow} changeActiveWindow = {changeActiveWindow} headerButtons = {buttons}/>
      </div>

      <RightArrow buttons = {buttons} activeWindow = {activeWindow} changeActiveWindow = {changeActiveWindow} 
                   depentables = {depentableSites} updateDepentable = {updateDepentable}/>
    
    </div>
  </> 
}
