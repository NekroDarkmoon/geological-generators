// ---------------------------------------------------------
//                          Imports
// ---------------------------------------------------------
import { moduleName, moduleTag } from "./constants.js";

// ---------------------------------------------------------
//                           Menu
// ---------------------------------------------------------
export class GeneratorMenu extends FormApplication {
    
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            title: "Geological Generators",
            id: "geolocial-generators-main-menu",
            template: `modules/${moduleName}/templates/gg-main-menu.html`,
            width: 550,
            height: 'auto',
            resizable: true
        });
    }

    getData(options={}){

    }

    activeListeners(html){
        super.activeListeners(html);
    }

    async _updateObject(event, formData) {
        console.log(formData);
        
        this.render();
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