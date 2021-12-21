import React, { useEffect, useState } from "react";
import { HeaderButton } from "./HeaderButton";
import { IAppHeader } from "./interfaces";
import './AppHeader.css';

export const AppHeader: React.FC<IAppHeader>  = (props) => {

    let coordY: number = window.pageYOffset;
    let navbarHeight: number;

    useEffect( () => {
        window.addEventListener('scroll', (e) => {
            const navbar: HTMLElement = document.getElementsByTagName('header')[0];

            let currentCoordY = window.pageYOffset;
            const updateNavbar = (prop: string) => {
                if ( navbar.style.visibility !== prop) {
                    navbar.style.visibility = prop;
                }
            }

            navbarHeight = (navbar.clientHeight) ? navbar.clientHeight : navbarHeight;

            if (currentCoordY < navbarHeight * 1.5) {
                updateNavbar('visible');
            } 
            else {
                if (currentCoordY >= coordY) {
                    updateNavbar('hidden'); 
                } else {
                    updateNavbar('visible');
                }
            }

            coordY = currentCoordY;

        })

    } );

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