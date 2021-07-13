// ---------------------------------------------------------
//                          Imports
// ---------------------------------------------------------
import { moduleName, moduleTag } from "./constants.js";

// ---------------------------------------------------------
//                           Menu
// ---------------------------------------------------------
export class GeneratorMenu extends Application {
    
    constructor(dialogData={}, options={}){
        super(dialogData, options);
        this.data = dialogData;
        
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            title: "Geological Generators",
            id: "geolocial-generators-main-menu",
            template: `modules/${moduleName}/templates/gg-main-menu.html`,
            width: 550,
            height: 'auto',
            resizable: true,
        });
    }

    getData(options={}){
        const data = {
            temp: {}
        };
         
        return data;
    }

    activeListeners(html){
        super.activeListeners(html);
    }

    async _updateObject(event, formData) {
        console.log(formData);
        
    }

}

// ---------------------------------------------------------
//                          Imports 
// ---------------------------------------------------------
// ---------------------------------------------------------
//                          Imports 
// ---------------------------------------------------------
// ---------------------------------------------------------
//                          Imports 
// ---------------------------------------------------------