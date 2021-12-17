import React from "react";
import arrowLeft from '../images/arrow.svg'; 
import { IArrowSite, IHandleArrow } from "./interfaces";
import './RightArrow.css';

export const RightArrow:  React.FC <IHandleArrow> = (props: IHandleArrow) => {
    const activeSiteIndex = props.depentables.findIndex( (site) => site.name === props.activeWindow );

     const viewArrow = () => {
        if (activeSiteIndex > 0 && (activeSiteIndex + 1) != props.depentables.length) {
            const nextSite = props.depentables[activeSiteIndex+1];
            return  <>
                <div className = 'RightArrow' onClick = { () => { props.changeActiveWindow(nextSite.name) } }>
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

 