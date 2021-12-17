import { useState } from "react";
import { IArrowSite } from "./interfaces";

export default () => {
    const [depentableSites, setSites] = useState(Array<IArrowSite>());

    return {
        depentableSites,
        
        updateDepentable: (newDepentablesNames: Array<string>) => {
            setSites( newDepentablesNames.map ( (name) => { 
                    return {
                        name: name,
                        isActive: false
                    }
                } 
            ) )
        }
    }
}