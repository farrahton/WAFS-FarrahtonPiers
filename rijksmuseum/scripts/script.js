//1 variables
// my API-key: 9c1DbBQC 

const artHokusai = 'https://www.rijksmuseum.nl/api/nl/collection?key=9c1DbBQC&involvedMaker=Katsushika+Hokusai&ps=20' ;
const display = document.querySelector('article');
display.textContent = 'We are loading for you';

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
            console.log(items)
            const artwork = items.artObjects;

            const list = $('ul');
            for(let i = 0; i < artwork.length; i++) {
                list.insertAdjacentHTML('afterbegin', `
                <li>
                        <img src='${artwork[i].webImage.url.slice(0, -3)+'=s1000'}' alt='${artwork[i].title}'>
                        <section>
                        <h2>${artwork[i].title}</h2>   
                        <p> </p>
                        </section>
                </li>`)
            }
        })
}

function $(element) {
    return document.querySelector(element)
}



