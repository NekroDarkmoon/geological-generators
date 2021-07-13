// ---------------------------------------------------------
//                          Imports 
// ---------------------------------------------------------
import {moduleName, moduleTag} from './modules/constants.js';
import {RegisterSettings} from './modules/settings.js';
import { GeneratorMenu } from './modules/geological-generators.js'


// ---------------------------------------------------------
//                          Main 
// ---------------------------------------------------------
Hooks.once('init', async function(){
    await RegisterSettings();
    console.log(`${moduleTag} | Initilization Complete.`)
});


Hooks.once('setup', async function(){
    console.log(`${moduleTag} | Setup Complete.`)
});


// Add generators to the buttons
Hooks.on("getSceneControlButtons", controls => {
    const section = controls.find(control => control.name == "notes");

    section.tools.push({
        name: game.i18n.localize("generatorMenuName"),
        title: game.i18n.localize("generatorMenuTitile"),
        icon: "fas fa-dice",
        visible: game.user.isGm,
        onClick: async() => generatorTool(),
        button: true
    });     

});



Hooks.once('ready', async function(){
    console.log(`${moduleTag} | Ready.`)
});


// ---------------------------------------------------------
//                      GeneratorMenu 
// ---------------------------------------------------------
async function generatorTool() {

    // Open Menu as a Dialog
    const menu = new GeneratorMenu();
    menu.render(true);
    console.log("I'm here");



}


// ---------------------------------------------------------
//                          Imports 
// ---------------------------------------------------------

// ---------------------------------------------------------
//                          Imports 
// ---------------------------------------------------------
