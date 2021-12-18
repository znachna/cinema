import React, { useState } from 'react';
import './App.css';
import { AppHeader } from './components/AppHeader';
import { MainContent } from './components/MainContent';
import buttonsHandler from './components/ButtonsHandler';
import { GoBackArrow } from './components/GoBackArrow';
import IArrowHandler from './components/ArrowHandler';
import { RightArrow } from './components/RightArrow';
import MoviesHandler from './components/MoviesHandler';
import SeriesHandler from './components/SeriesHandler';
import { IMovie } from './components/interfaces';
import { ISeries } from './components/interfaces';

export const App: React.FC = () => {
  const [activeWindow, changeActiveWindow] = useState('Фильмы');
  const {depentableSites, updateDepentable} = IArrowHandler();
  const {buttons, setActiveButton} = buttonsHandler();

  const movies: Array <IMovie> = MoviesHandler().movies;
  const series: Array <ISeries> = SeriesHandler().series;

  const activeButton = buttons.find( (button) => (button.isActive) );
  if (activeButton) {
    if (activeWindow !== activeButton.name && depentableSites.length === 0 ) {
        switch (activeButton.name) {
            case 'Фильмы':
                const activeMovieIndex = movies.findIndex( (movie) => movie.name === activeWindow );
                updateDepentable( ['Фильмы'].concat( movies.slice(activeMovieIndex).map( (movie) => movie.name) ) );
                break;
            case 'Сериалы':
                const activeSeriesIndex = series.findIndex( (series) => series.name === activeWindow ); 
                updateDepentable( ['Сериалы'].concat( series.slice(activeSeriesIndex).map( (series) => series.name ) ) );
                break;
        }

    } else {
        if (activeWindow === activeButton.name && depentableSites.length !== 0) {
              updateDepentable([]);
        }
    }
}
  
  return <>
    <div className = 'CinemaApp'>

    <GoBackArrow buttons = {buttons} activeWindow = {activeWindow} changeActiveWindow = {changeActiveWindow} 
                   depentables = {depentableSites} updateDepentable = {updateDepentable}/>

      <div className = 'MainContent'>
        <AppHeader changeActiveWindow = {changeActiveWindow} buttons= {buttons} setActiveButton = {setActiveButton} />
        <MainContent activeWindow = {activeWindow} changeActiveWindow = {changeActiveWindow} headerButtons = {buttons}/>
      </div>

      <RightArrow buttons = {buttons} activeWindow = {activeWindow} changeActiveWindow = {changeActiveWindow} 
                   depentables = {depentableSites} updateDepentable = {updateDepentable}/>
    
    </div>
  </> 
}
