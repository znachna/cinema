import React from "react";
import { IMovie } from "./interfaces";
import { ISeries } from "./interfaces";
import { IContent } from "./interfaces";
import MoviesHandler from "./MoviesHandler";
import { PopularContent } from "./PopularContent";
import { WelcomeContent } from "./WelcomeContent";
import { ContentPage } from "./ContentPage"
import SeriesHandler from "./SeriesHandler";
import { updateLC } from "./HandleLC";
import { IHeaderButton } from "./interfaces";
import { IArrowSite } from "./interfaces";
import { deepStrictEqual } from "assert";
import { SlowBuffer } from "buffer";


interface IMainContent {
    activeWindow: string
    changeActiveWindow: (newName: string) => void
    headerButtons: Array<IHeaderButton>
    setDepentable: (sites: Array<string>) => void
    depentables: Array<IArrowSite>
}

export const MainContent: React.FC<IMainContent> = (props: IMainContent) => {

    const movies: Array <IMovie> = MoviesHandler().movies;
    const series: Array <ISeries> = SeriesHandler().series;
    const contents: Array <IMovie | ISeries> = movies.concat(series); //
    const lastMovieName: string = localStorage.getItem('Фильмы') || movies[0].name;
    const lastSeriesName: string = localStorage.getItem('Сериалы') || series[0].name;
    const activeButton = props.headerButtons.find( (button) => (button.isActive) );

    if (activeButton) {
        if (props.activeWindow !== activeButton.name && props.depentables.length === 0 ) {
            switch (activeButton.name) {
                case 'Фильмы':
                    const activeMovieIndex = movies.findIndex( (movie) => movie.name === props.activeWindow );
                    props.setDepentable( ['Фильмы'].concat( movies.slice(activeMovieIndex).map( (movie) => movie.name) ) );
                    break;
                case 'Сериалы':
                    const activeSeriesIndex = series.findIndex( (series) => series.name === props.activeWindow ); 
                    props.setDepentable( ['Сериалы'].concat( series.slice(activeSeriesIndex).map( (series) => series.name ) ) );
                    break;
            }

        } else {
            if (props.activeWindow === activeButton.name && props.depentables.length !== 0) {
                props.setDepentable([]);
            }
        }
    }

    const pageContent = () => {
        switch (props.activeWindow) {
        case 'Фильмы':
            return <>
                <WelcomeContent content = { movies.find( (movie) => movie.name === lastMovieName ) || movies[0]} 
                    changeActiveWindow = {props.changeActiveWindow}/>
                <PopularContent content = {movies} changeActiveWindow = {props.changeActiveWindow} />
            </>
        case 'Сериалы':
            return <>
                <WelcomeContent content = { series.find( (series) => series.name === lastSeriesName ) || series[0]} 
                    changeActiveWindow = {props.changeActiveWindow}/>
                <PopularContent content = {series} changeActiveWindow = {props.changeActiveWindow} />
            </>
        case 'Главная':
            return <>
                <p>
                    здесь что-то будет...
                </p>
            </>
        default:
            const page: IContent = contents.find( (content) => ( content.name === props.activeWindow ) ) || movies[0];
            if (activeButton) updateLC(activeButton?.name, props.activeWindow);


            return <ContentPage name = {page.name} description = {page.description} 
                    trailerLink = {page.trailerLink} posterLink = {page.posterLink}
                    seasons = {page.seasons}/>
        }
    }

    
    return <>
        {pageContent()} 
    </>
}
