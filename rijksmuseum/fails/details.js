// import { fetchArt} from "./fetchArt.js";
// const collection = collection.artObjects

// export function giveDetails(collection) {
//     for(let i=0; i < collection.length; i++) {
//         fetch('https://www.rijksmuseum.nl/api/nl/collection/' +
//         collection[i].objectNumber + '?key=xvdOJegg&ps=10imgonly=true')
//         .then(function(response){
//             return response.json();
//         }).then(function(details){
//             renderData(details)
//         })
//         .catch((error)=> {
//             console.log(error);
//         });
//     }
// }

// import { fetchArt} from "./fetchArt.js";

// export function renderData(details); {
//     console.log(details)
//     const artwork = items.artObjects;

//     const list = $(`${selector} article`);
//     for(let i = 0; i < artwork.length; i++) {
//         list.insertAdjacentHTML('afterbegin', `
//         <li> 
//                 <img src='${artwork[i].webImage.url.slice(0, -3)+'=s1000'}' alt='${artwork[i].title}'>
//                 <section>
//                 <h2>${artwork[i].title}</h2>   
//                 <p>${artwork.descripton}</p>
//                 </section>
//         </li>
//       `)
//     }

// }