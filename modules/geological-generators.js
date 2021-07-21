// ---------------------------------------------------------
//                          Imports
// ---------------------------------------------------------
import { moduleName, moduleTag } from "./constants.js";
import { SoilGenerator } from "./soil-generator.js";

// ---------------------------------------------------------
//                           Menu
// ---------------------------------------------------------
export class GeneratorMenu extends Application {
    
    constructor(dialogData={}, options={}){
        super(dialogData, options);
        this.data = dialogData;
        this.soilGenerator = new SoilGenerator();
        this.soilGenDisplay = {name: "Soil Texture: ", props: ""};

    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            title: "Geological Generators",
            id: "geolocial-generators-main-menu",
            template: `modules/${moduleName}/templates/gg-main-menu.html`,
            width: 550,
            height: 'auto',
            resizable: true,
            tabs: [{navSelector: ".tabs", contentSelector: "section", inital: "geoSoilDisplay"}] 
        });
    }

    getData(options={}){
        const data = {
            soilGenerator: {
                name: this.soilGenDisplay.name,
                props: JSON.stringify(this.soilGenDisplay.props),
            }
        };
         
        return data;
    }

    activateListeners(html){
        super.activateListeners(html);

        // Generate soil type on click.
        html.on("click", "#genSoil", async (event) => {
            console.log(event);
            this.soilGenerator.generate();

            let tex = {
                name: `Soil texture: ${this.soilGenerator.name}`,
                props: this.soilGenerator.props
            };

            this.soilGenDisplay = tex;

            this.render(true);
        });
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