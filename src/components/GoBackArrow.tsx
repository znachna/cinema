import React from "react";
import './GoBackArrow.css';
import arrowLeft from '../images/arrow.svg';
import { IHandleArrow } from "./interfaces";
import { AnimationHandler } from "./AnimationHandler";

export const GoBackArrow: React.FC <IHandleArrow> = (props: IHandleArrow) => {
    const viewArrow = () => {
        const activeSiteIndex = props.depentables.findIndex( (site) => site.name === props.activeWindow );
        const setAnimation = () => {
            const prevSite =  props.depentables[activeSiteIndex - 1];
            AnimationHandler('Content', ['goLeft', 'rightWave'], [props.changeActiveWindow.bind(null, prevSite.name)] );
        }

        if (activeSiteIndex > 0) {
            return  <>
                <div className = 'LeftArrow' onClick = { () => {setAnimation()} }>
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