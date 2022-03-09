// import { renderHTML } from "./renderHTML.js";

export function fetchJapan() { 

    const artJapan = `https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=9c1DbBQC`;
    const loader = document.querySelector('#loaderContain');
    loader.classList.remove('hidden'); 

    //2 the story
    giveJapan();
    
    //3 fuction
    function giveJapan() {
        fetch (artJapan)
            .then(function(response){
                loader.classList.add('hidden');
                // empty.classList.add('hidden');
                return response.json();
                // console.log(items)
            })
            // .then(data => {
            //     console.log(data)
            //     let artwork = artjapan.map(element => { 
            //         return { 
            //             artwork: element.facets[3].facets[14] }
                        
            //         })    
            // }) 
    //         .then(function(items){
    //             console.log(items)
    //             const artwork = items.productionplaces;
    
    //             const list = $(`#home ul`);
    //             for(let i = 0; i < artwork.length; i++) {
    //             list.insertAdjacentHTML('afterbegin', `
    //             <li>
    //                 <img src='${artwork[i].image.cdnUrl.slice(0, -3)+'=s1000'}'>
    //             </li>`)
    //     }
    // })
}
}
    export function $(element) {
        return document.querySelector(element)
    }


// import { renderHTML } from "./renderHTML.js";

// export function fetchJapan() { 

//     const artJapan = `https://www.rijksmuseum.nl/api/nl/usersets/2513578-japans?key=9c1DbBQC&format=json`;
//     const loader = document.querySelector('#loaderContain');
//     loader.classList.remove('hidden'); 

//     //2 the story
//     giveJapan();
    
//     //3 fuction
//     function giveJapan() {
//         fetch (artJapan)
//             .then(function(response){
//                 loader.classList.add('hidden');
//                 // empty.classList.add('hidden');
//                 return response.json();
//                 // console.log(items)
//             })
//             // .then(data => {
//             //     console.log(data.facets)
//             //     let artwork = data.map(element => { 
//             //         return { 
//             //             artwork: element.facets[3].facets[14] }
                        
//             //         })    
//             // }) 
//             .then(function(userSet){
//                 console.log(userSet)
//                 const artwork = userSet.setItems;
    
//                 const list = $(`#home ul`);
//                 for(let i = 0; i < artwork.length; i++) {
//                 list.insertAdjacentHTML('afterbegin', `
//                 <li>
//                     <img src='${artwork[i].image.cdnUrl.slice(0, -3)+'=s1000'}'>
//                 </li>`)
//         }
//     })
// }
// }
//     export function $(element) {
//         return document.querySelector(element)
//     }
