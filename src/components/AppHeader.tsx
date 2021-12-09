import React, { useState } from "react";
import { HeaderButton } from "./HeaderButton";
import buttonsHandler  from "./ButtonsHandler"
import { IAppHeader } from "./interfaces";
import { IHeaderButton } from "./interfaces";

export const AppHeader: React.FC<IAppHeader>  = (props) => {

    const {buttons, setActiveButton} = buttonsHandler();
    
    const buttonList = buttons.map( 
        (button, index) => {
        return <HeaderButton name = {button.name} isActive = {button.isActive} 
        buttonIndex  = {index} setActiveButton = {setActiveButton} key = {button.name} 
        changeActiveWindow = {props.changeActiveWindow}/>
        }
   );
    return <header>
        <nav>        
            {buttonList}
        </nav>
    </header>
}