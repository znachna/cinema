import React from "react";
import { HeaderButton } from "./HeaderButton";
import { IAppHeader } from "./interfaces";

export const AppHeader: React.FC<IAppHeader>  = (props) => {

    
    const buttonList = props.buttons.map( 
        (button, index) => {
        return <HeaderButton name = {button.name} isActive = {button.isActive} 
        buttonIndex  = {index} setActiveButton = {props.setActiveButton} key = {button.name} 
        changeActiveWindow = {props.changeActiveWindow}/>
        }
   );
    return <header>
        <nav>        
            {buttonList}
        </nav>
    </header>
}