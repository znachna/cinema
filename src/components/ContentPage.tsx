import React from "react";
import { IContent } from "./interfaces";

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
        <h2>
            {props.name}
        </h2>
        {specialInfo()}
        <article className = 'multimediaInfo'>
            <img src = {props.posterLink} alt = 'MovieImage'/>
            <p>
                {props.description}
            </p>   
        </article>
        <iframe src = {props.trailerLink} className = 'trailer' >

        </iframe>
 
    </>
}