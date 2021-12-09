import React from "react";
import { IMovie } from "./interfaces";

interface IWelcomeContent{
    content: IMovie
    changeActiveWindow: (newName: string) => void
}

export const WelcomeContent: React.FC<IWelcomeContent> = (props: IWelcomeContent) => {
    return <>
        <h2 className = "welcomeHeader">
            Недавно просмотренное
        </h2>
        <div className = 'welcomeContent'
            style = {
                {
                    backgroundImage: `url(${props.content.backgroundLink})`
                }
            }
        onClick = {() => {
            props.changeActiveWindow(props.content.name);
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