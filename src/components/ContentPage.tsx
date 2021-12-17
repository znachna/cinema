import React from "react";
import { IContent } from "./interfaces";
import './ContentPage.css'

export const ContentPage: React.FC<IContent> = (props: IContent) => {
    const specialInfo = () => {
        if (props.seasons) {
            return <>
                <h3>
                    Количество сезонов: {props.seasons}
                </h3>
            </>
        }
    }

    return <>
    <div className = 'ContentPage'>

        <h2>
            {props.name}
        </h2>

        {specialInfo()}

        <article className = 'MultimediaInfo'>
            <img src = {props.posterLink} alt = 'MovieImage'/>
            <p>
                {props.description}
            </p>   
        </article>

        <iframe src = {props.trailerLink} className = 'Trailer' >

        </iframe>
        
    </div>
    </>
}