

// const searchtyping= input.value 

// fetch(searchAPI + input.value)

// .then(function(response) {

// return response.json();

// })

// .then(function(collection) {

// console.log(collection)

// searchResults(collection);

// })

// const searchAPI = 'https://www.rijksmuseum.nl/api/nl/collection?key=9c1DbBQC&ps=20&imgonly=true&q=';
// let foundData;

// export function mySearch() { 

// fetch (searchAPI)
// .then(function(response){
//     return response.json()
// })

// .then(function(Data) {
//     foundData = Data;
//     console.log(Data);

// searchField.addEventListener('keyup', function(e) {
//     const searchString = e.target.value.toLowerCase();

//     let newData = foundData.artObjects.filter(element => {

//         let searchableStrings = `${element.title} ${element.principalOrFirstMaker}`

//         if (searchableStrings.toLowerCase().indexOf(searchString) !== -1) {
//             return true;
//         } else {
//             return false;
//         }
//     })

//     let result = document.querySelector('ul');

//     while (result.lastChild) {
//         result.removeChild(result.lastChild);
//         console.log(resultsremoval)
//     }

//     // searchButton.onclick = () => {
//     //     let results = document.getElementById("ul");
//     //     while (results.firstChild) {
//     //         results.removeChild(results.lastChild);
//     //     }
//     // }

//     for (let i = 0; i < newData.length; i++) {
//         const artImg = newData[i].webImage.url
//         const artTitle = newData[i].longTitle

//     document.querySelector('#home ul').insertAdjacentHTML
//     ('afterbegin', `
//         <li>
//                 <img src='${artImg.slice(0, -3)+'=s1000'}' alt='${artImg[i].title}'>
//                 <section>
//                 <h2>${artTitle}</h2>   
//                 <p> </p>
//                 </section>
//         </li>`)
//     }

//     console.log(newData)

// });
// }) }