import React from "react";
import { IMovie } from "./interfaces";

export const ContentPage: React.FC<IMovie> = (props: IMovie) => {
    return <>
        <h2>
            {props.name}
        </h2>
        <article className = 'multimediaInfo'>
            <img src = {props.smallBackground} alt = 'MovieImage'/>
            <p>
                {props.description}
            </p>   
        </article>
        <iframe src = {props.trailerLink} className = 'trailer' >

        </iframe>
 
    </>
}