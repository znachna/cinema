import { useState } from "react";
import { IHeaderButton } from "./interfaces";

export default () => {
    const [buttons, changeButtons] = useState([
        {name: 'Фильмы', isActive: true},
        {name: 'Сериалы', isActive: false},
    ]);

    return {
        buttons,

        getActiveButtonName: () => {
            for (let button of buttons) {
                if (button.isActive) {
                    return button.name
                }
            }
        },

        setActiveButton: (mutableButtonIndex: number) => {
            const activeButtonIndex = buttons.findIndex( (button) => button.isActive );
            const isMutableActive: boolean = buttons[mutableButtonIndex].isActive;

            if (isMutableActive == false) {
                const newButtonsArray = buttons.map (
                    (button: IHeaderButton, index: number) => {
                        if (index === activeButtonIndex || index === mutableButtonIndex) {
                            return {name:button.name, isActive: !button.isActive};
                        } else {
                            return button;
                        }
                    }
                )
                changeButtons(newButtonsArray);
            }
        }
    }
}