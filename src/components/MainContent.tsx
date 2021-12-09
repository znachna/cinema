import React, { useState } from "react";
import { IMovie } from "./interfaces";
import MoviesHandler from "./MoviesHandler";
import { PopularContent } from "./PopularContent";
import { WelcomeContent } from "./WelcomeContent";
import { ContentPage } from "./ContentPage"

interface IMainContent {
    activeWindow: string
    changeActiveWindow: (newName: string) => void
}

export const MainContent: React.FC<IMainContent> = (props: IMainContent) => {

    const movies: Array<IMovie> = MoviesHandler().movies;
    const contents = movies; //
    const lastMovie: IMovie = movies[0]; //

    const pageContent = () => {
        switch (props.activeWindow) {
        case 'Фильмы':
            return <>
                <WelcomeContent content = {lastMovie} changeActiveWindow = {props.changeActiveWindow}/>
                <PopularContent content = {movies} changeActiveWindow = {props.changeActiveWindow} />
            </>
        case 'Главная':
        case 'Сериалы':
            return <>
                <p>
                    здесь что-то будет...
                </p>
            </>
        default:
            const page: IMovie = contents.find( (content) => ( content.name === props.activeWindow ) ) || movies[0];
            return <ContentPage {...page}/>
        }
    }

    
    return <>
        {pageContent()}
    </>
}
