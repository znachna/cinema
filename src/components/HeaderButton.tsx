import React from "react";
import { AnimationHandler } from "./AnimationHandler";
import './HeaderButton.css';
import { IHeaderButton } from "./interfaces"

interface IButton extends IHeaderButton{
    buttonIndex: number
    setActiveButton: (mutableButtonIndex: number) => void

    changeActiveWindow: (newName: string) => void
}

export const HeaderButton: React.FC<IButton> = (props: IButton) => {
    const onClickAction = () => {
        window.scrollTo(0, 0);
        if (!props.isActive) {
            const callBacks = [props.changeActiveWindow.bind(null, props.name),  
                props.setActiveButton.bind(null, props.buttonIndex)];

            if (props.buttonIndex === 1) {
                AnimationHandler('Content', ['goRight', 'leftWave'], callBacks);
            } else {
                AnimationHandler('Content', ['goLeft', 'rightWave'], callBacks);
            }
        }
    }

    return <>
        <div className = { (props.isActive) ? 'HeaderButton active' : 'HeaderButton' }
            onClick = { () => {onClickAction()} }>
            {props.name}
        </div> 
    </>
}