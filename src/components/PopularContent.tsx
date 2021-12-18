import React from "react";
import { IMovie } from "./interfaces";
import './PopularContent.css'

interface IContent {
    changeActiveWindow: (newName: string) => void
    content: Array<IMovie>;
}

export const PopularContent: React.FC<IContent> = (props: IContent) => {

    const setItems = () => {
        if (props.content.length > 1 ) {
            return [props.content[0], props.content[1], props.content[2]];
        } else {
            return props.content
        }
    };

    const contentItems: Array<IMovie> = setItems();

    const contentList = contentItems.map(
        (item, index) => {
            return <img src = {item.posterLink} className = "SmallContent" key = {index} alt = {`Pic ${index}`}
                    onClick = { () => { props.changeActiveWindow(item.name) } }/>
        }
    )

    return <>
        <h2 className = "PopularHeader">
            Популярно у зрителей
        </h2>
        <section className = 'PopularContent'>
            {contentList}
        </section> 
    </>
}