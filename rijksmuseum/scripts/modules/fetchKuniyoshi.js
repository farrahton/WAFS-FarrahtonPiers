import { renderKuniyoshi } from "./modules/renderHTMLKuniyoshi.js";

const artKuniyoshi = 'https://www.rijksmuseum.nl/api/nl/collection?key=9c1DbBQC&involvedMaker=Utagawa+Kuniyoshi&ps=20';
const display = document.querySelector('article');
display.textContent = 'We are loading for you';

giveKuniyoshi();

//3 fuction
function giveKuniyoshi() {
    fetch (artKuniyoshi)
        .then(function(response){
            display.textContent ='';
            return response.json();
        })
        .then(function(items){
            render(items);
        })
}

export function $(element) {
    return document.querySelector(element)
}

export {giveKuniyoshi}