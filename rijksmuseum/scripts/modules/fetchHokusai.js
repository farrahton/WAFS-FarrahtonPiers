//1 variables
// my API-key: 9c1DbBQC 
import { renderHokusai } from "./renderHTMLHokusai.js";

export function myFunc() {

    const artHokusai = 'https://www.rijksmuseum.nl/api/nl/collection?key=9c1DbBQC&involvedMaker=Katsushika+Hokusai&ps=20' ;
    const display = document.querySelector('article');
    display.textContent = 'We are loading for you';
    console.log('hi');
    //2 the story
    giveArt();
    
    //3 fuction
    function giveArt() {
        fetch (artHokusai)
            .then(function(response){
                display.textContent ='';
                return response.json();
            })
            .then(function(items){
                renderHokusai(items);
            })
    }
}
    export function $(element) {
        return document.querySelector(element)
    }






