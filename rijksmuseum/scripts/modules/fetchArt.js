//1 variables
// my API-key: 9c1DbBQC 
import { renderHTML } from "./renderHTML.js";

export function fetchArt(involvedMaker, selector) {

    const artHokusai = `https://www.rijksmuseum.nl/api/nl/collection?key=9c1DbBQC&involvedMaker=${involvedMaker}&ps=20` ;
    const loader = document.querySelector('#loaderContain');
    loader.classList.remove('hidden'); 
    // empty.classList.remove('hidden');

    console.log('hi');
    //2 the story
    giveArt();
    
    //3 fuction
    function giveArt() {
        fetch (artHokusai)
            .then(function(response){
                loader.classList.add('hidden');
                // empty.classList.add('hidden');
                return response.json();
            })
            .then(function(items){
                renderHTML(items, selector);
            })
    }
}
    export function $(element) {
        return document.querySelector(element)
    }






