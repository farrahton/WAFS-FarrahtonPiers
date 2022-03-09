//1

const kunstHokusai = 'https://www.rijksmuseum.nl/api/nl/collection?key=9c1DbBQC&involvedMaker=Katsushika+Hokusai&ps=10&p=' ;
let p = 1

//2
haalOp();

//3
function haalOp() {
    fetch ( 'https://www.rijksmuseum.nl/api/nl/collection?key=9c1DbBQC&involvedMaker=Katsushika+Hokusai&ps=10&p='+ p)
        .then(function(response){
        return response.json();
})
        .then(function(kunstwerken){

const list = $('ul');
    for(let i = 0; i < kunstwerken.artObjects.length; i++) {
        list.insertAdjacentHTML ('beforeend', `<li><h2>${kunstwerken.artObjects[i].title}</h2><img src="${kunstwerken.artObjects[i].webImage.url}" alt="${kunstwerken.artObjects[i].title}"></li>`)
        }
        })
        }

            // volgende of vorige pagina toont weer 10 nieuwe kunstwerken
document.querySelector('.volgende').addEventListener('click', function() { 
            
            p = p + 1
            haalOp()
           
        })

        document.querySelector('.vorige').addEventListener('click', function() {
        if(p == 0){
                console.log('p kan niet in de min');
         }else{
            list.innerHTML = ''
            p = p - 1
            haalOp()
            }
        })       


        function $(element) {
            return document.querySelector(element)
            }


// A VERSION OF APP.JS WITH A BUNCH OF IMPORTS THAT I TURNED OFF BECAUSE THEY FAILED

// import { fetchJapan } from "./modules/fetchJapan.js";
import { fetchArt } from  "./modules/fetchArt.js";
import { mySearch } from "./modules/searchbar1.js"; 
// import { giveDetails } from "./modules/details.js"; 

// import { noScroll} from "./modules/scroll.js";

// "./modules/fetchkuniyoshi.js"
// const loader = document.querySelector('#loader');
// loader.classList.remove('hidden'); 
// fetchJapan();
fetchArt("Katsushika+Hokusai", "#hokusai");
fetchArt("Utagawa+Kuniyoshi", "#kuniyoshi");
// noScroll();
// giveDetails(collection);
mySearch();

// import { removeDefault } from "./modules/preventscroll.js";