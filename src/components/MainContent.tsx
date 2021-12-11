import React from "react";
import { IMovie } from "./interfaces";
import { ISeries } from "./interfaces";
import { IContent } from "./interfaces";
import MoviesHandler from "./MoviesHandler";
import { PopularContent } from "./PopularContent";
import { WelcomeContent } from "./WelcomeContent";
import { ContentPage } from "./ContentPage"
import SeriesHandler from "./SeriesHandler";
import { updateLC } from "./HandleLC"
import { IHeaderButton } from "./interfaces"

interface IMainContent {
    activeWindow: string
    changeActiveWindow: (newName: string) => void
    headerButtons: Array<IHeaderButton>
}

export const MainContent: React.FC<IMainContent> = (props: IMainContent) => {

    const movies: Array <IMovie> = MoviesHandler().movies;
    const series: Array <ISeries> = SeriesHandler().series;
    const contents: Array <IMovie | ISeries> = movies.concat(series); //
    const lastMovieName: string = localStorage.getItem('Фильмы') || movies[0].name;
    const lastSeriesName: string = localStorage.getItem('Сериалы') || series[0].name;

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
            const activeButton = props.headerButtons.find( (button) => (button.isActive) );

            if (activeButton?.name) {
                updateLC(activeButton?.name, props.activeWindow);
            }

            return <ContentPage name = {page.name} description = {page.description} 
                    trailerLink = {page.trailerLink} posterLink = {page.posterLink}
                    seasons = {page.seasons}/>
        }
    }

    
    return <>
        {pageContent()}
    </>
}
