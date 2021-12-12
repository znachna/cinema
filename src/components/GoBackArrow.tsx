import React from "react";
import './GoBackArrow.css';
import arrowLeft from '../images/arrow.svg';
import { IHeaderButton } from './interfaces';

interface IHandleArrow {
    buttons: Array<IHeaderButton>
    activeWindow: string
    changeActiveWindow: (newWindow: string) => void
}

export const GoBackArrow: React.FC <IHandleArrow> = (props: IHandleArrow) => {
    const arrow = () => {
        const prevSite = props.buttons.find( (button) => button.isActive );
        if (prevSite) {
            if (prevSite.name !== props.activeWindow) {
                return <>
                    <div className = 'LeftArrow' onClick = { () => { props.changeActiveWindow(prevSite.name) } }>
                        <img src = {arrowLeft} alt = 'стрелка назад'></img>
                    </div>
                </>
            }
        }
        return <> </>
    }
    return <>
        {arrow()}
    </>
}