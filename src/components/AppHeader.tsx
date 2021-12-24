import React, { useEffect, useState } from "react";
import { HeaderButton } from "./HeaderButton";
import { IAppHeader } from "./interfaces";
import './AppHeader.css';

export const AppHeader: React.FC<IAppHeader>  = (props) => {


    useEffect( () => {
        let coordY: number = window.pageYOffset;
        const navbar: HTMLElement = document.getElementsByTagName('header')[0];
        const updateNavbar = (prop: string) => {
            if ( navbar.style.visibility !== prop) {
                if (prop === 'visible') {
                    navbar.className = 'creation';
                } else {
                    navbar.className = 'hiding';
                }
            }
        }

        updateNavbar('visible');

        window.addEventListener('scroll', (e) => {
            const navbar: HTMLElement = document.getElementsByTagName('header')[0];

            let currentCoordY = window.pageYOffset;
            const trueScroll = Math.abs(currentCoordY - coordY) > 3;

            if ( trueScroll && document.body.clientHeight > (currentCoordY + window.innerHeight) ) {
                if (currentCoordY * 1.5 < navbar.clientHeight) {
                     updateNavbar('visible');
                } 
                else {
                    if (currentCoordY > coordY) {
                         updateNavbar('hidden'); 
                    } else {
                        updateNavbar('visible');
                    }
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