import React from "react";
import arrowLeft from '../images/arrow.svg'; 
import { IArrowSite, IHandleArrow } from "./interfaces";
import './RightArrow.css';
import { AnimationHandler } from "./AnimationHandler";

export const RightArrow:  React.FC <IHandleArrow> = (props: IHandleArrow) => {
    const activeSiteIndex = props.depentables.findIndex( (site) => site.name === props.activeWindow );

    const setAnimation = () => {
        const nextSite = props.depentables[activeSiteIndex+1];
        AnimationHandler('Content', ['goRight', 'leftWave'], [props.changeActiveWindow.bind(null, nextSite.name)] );
    }

     const viewArrow = () => {
        if (activeSiteIndex > 0 && (activeSiteIndex + 1) != props.depentables.length) {
            return  <>
                <div className = 'RightArrow' onClick = { () => { setAnimation() } }>
                    <img src = {arrowLeft} alt = 'стрелка назад'></img>
                </div>
            </>
        } else {
            return <> </>
        } 
    }

    return <>
        {viewArrow()}
    </>
}

 