import React from "react";
import './HeaderButton.css';
import { IHeaderButton } from "./interfaces"

interface IButton extends IHeaderButton{
    buttonIndex: number
    setActiveButton: (mutableButtonIndex: number) => void

    changeActiveWindow: (newName: string) => void
}

export const HeaderButton: React.FC<IButton> = (props: IButton) => {
    return <>
        <div className = { (props.isActive) ? 'HeaderButton active' : 'HeaderButton' }
            onClick = { () => {
                props.changeActiveWindow(props.name);
                props.setActiveButton(props.buttonIndex);
            } }>
            {props.name}
        </div> 
    </>
}