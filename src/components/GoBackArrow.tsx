import React from "react";
import './GoBackArrow.css';
import arrowLeft from '../images/arrow.svg';
import { IHeaderButton } from './interfaces';
import { IArrowSite} from './interfaces';
import { IHandleArrow } from "./interfaces";

export const GoBackArrow: React.FC <IHandleArrow> = (props: IHandleArrow) => {
    const viewArrow = () => {
        const activeSiteIndex = props.depentables.findIndex( (site) => site.name === props.activeWindow );
        if (activeSiteIndex > 0) {
            const prevSite =  props.depentables[activeSiteIndex - 1];
            return  <>
                <div className = 'LeftArrow' onClick = { () => { props.changeActiveWindow(prevSite.name) } }>
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