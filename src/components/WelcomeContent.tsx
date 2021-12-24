import React from "react";
import { IMovie } from "./interfaces";
import './WelcomeContent.css'
import { AnimationHandler} from './AnimationHandler'

interface IWelcomeContent{
    content: IMovie
    changeActiveWindow: (newName: string) => void
}

export const WelcomeContent: React.FC<IWelcomeContent> = (props: IWelcomeContent) => {
    return <>
        <h2 className = "WelcomeHeader">
            Недавно просмотренное
        </h2>
        <div className = 'WelcomeContent'
            style = {
                {
                    backgroundImage: `url(${props.content.backgroundLink})`
                }
            }
        onClick = {() => {
            AnimationHandler('Content', ['goRight', 'leftWave'], [props.changeActiveWindow.bind(null, props.content.name)] );
        }}> 
            <section>
                <h3>
                    {props.content.name}
                </h3>
                <p> 
                    {props.content.description}
                </p>            
            </section>
        </div>
    </>
}