// 1. The variables 
export function mySearch() { 
const APIink = 'https://www.rijksmuseum.nl/api/en/collection?key=9c1DbBQC&ps=20';
const searchField = document.getElementById('searchField');
const searchAPI = 'https://www.rijksmuseum.nl/api/nl/collection?key=9c1DbBQC&ps=10&imgonly=true&q=';

// const APIink = 'https://www.rijksmuseum.nl/api/nl/usersets/1692920-japan-alles?key=9c1DbBQC&ps=255&format=json';
// const searchField = document.getElementById('searchField');
// const searchAPI = 'https://www.rijksmuseum.nl/api/nl/usersets/1692920-japan-alles?key=GnjcnmeH&ps=10&imgonly=true&q=';



let fullCollection;
 
fetch (APIink)
.then(function(response){
    return response.json()
})

// Function logging the response of requested data 
.then(function(data) {
    fullCollection = data;
    console.log(data);
   
// Function rendering objects in HTML 
    for (let i = 0; i <data.artObjects.length; i++) {
        const  artwork = data.artObjects[i].webImage.url
        const  artworkTitle = data.artObjects[i].longTitle
        const  titleShort = data.artObjects[i].title
        document.querySelector('#home ul').insertAdjacentHTML(`beforeend` ,`
            <li>
                <img src='${artwork.slice(0, -3)+'=s1000'}' alt='${titleShort}'>
                <section>
                    <h2>${artworkTitle}</h2>   
                    <p> </p>
                </section>

            </li>`
        )  
        console.log(data.artObjects[i]);              
    }                
})

// Function requesting data from searchAPI link & return response; 
fetch (searchAPI)
.then(function(response){
    return response.json()
})

// keyAdvent searchBar
searchField.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase(); // toLowerCase >> to search case sensitive objects

    let resultsData = fullCollection.artObjects.filter(element => {
        // console.log(resultsData)
        let thisIsWhatYouCanSearch = `${element.title} ${element.principalOrFirstMaker} `
        console.log(thisIsWhatYouCanSearch)
        if(thisIsWhatYouCanSearch.toLowerCase().indexOf(searchString) !== -1) {
            return true;
        } else {
            return false;
        }
    })

    let parent = document.querySelector('#home ul');

    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }

    for (let i = 0; i <resultsData.length; i++) {
        const  artwork = resultsData[i].webImage.url
        const  artworkTitle = resultsData[i].longTitle
        
        document.querySelector('#home ul').insertAdjacentHTML(`beforeend` ,`<li>
        <img src='${artwork.slice(0, -3)+'=s1000'}' alt='${artworkTitle}'>
        <section>
            <h2>${artworkTitle}</h2>   
            <p> </p>
        </section>
            </li>`
        )  
    }   

    console.log(resultsData)
});
}
// for reloading the browser >> //     e.preventDefault();




// // 1. The variables 
// export function mySearch() { 
//     const endpoint = 'https://www.rijksmuseum.nl/api/en/collection?key=9c1DbBQC&ps=100';
//     const searchField = document.getElementById('searchField');
//     const searchAPI = 'https://www.rijksmuseum.nl/api/nl/collection?key=9c1DbBQC&ps=10&imgonly=true&q=';
    
    
//     let theData;
     
//     fetch (endpoint)
//     .then(function(response){
//         return response.json()
//     })
    
//     // Function logging the response of requested data 
//     .then(function(data) {
//         theData = Data;
//         console.log(Data);
       
//     // Function rendering objects in HTML 
//         for (let i = 0; i <Data.artObjects.length; i++) {
//             const  kunstImg = Data.artObjects[i].webImage.url
//             const  kunstTitel = Data.artObjects[i].longTitle
//             const  titleShort = Data.artObjects[i].title
//             document.querySelector('#home ul').insertAdjacentHTML(`beforeend` ,`
//                 <li>
//                     <img src='${kunstImg.slice(0, -3)+'=s1000'}' alt='${titleShort}'>
//                     <section>
//                         <h2>${kunstTitel}</h2>   
//                         <p> </p>
//                     </section>
    
//                 </li>`
//             )  
//             console.log(Data.artObjects[i]);              
//         }                
//     })
    
//     // Function requesting data from searchAPI link & return response; 
//     fetch (searchAPI)
//     .then(function(response){
//         return response.json()
//     })
    
//     // keyAdvent searchBar
//     searchField.addEventListener('keyup', (e) => {
//         const searchString = e.target.value.toLowerCase(); // toLowerCase >> to search case sensitive objects
    
//         let newData = theData.artObjects.filter(element => {
//             console.log(newData)
//             let searchableStrings = `${element.title} ${element.principalOrFirstMaker} `
//             console.log(searchableStrings)
//             if(searchableStrings.toLowerCase().indexOf(searchString) !== -1) {
//                 return true;
//             } else {
//                 return false;
//             }
//         })
    
//         let parent = document.querySelector('#home ul');
    
//         while (parent.lastChild) {
//             parent.removeChild(parent.lastChild);
//         }
    
//         for (let i = 0; i <newData.length; i++) {
//             const  kunstImg = newData[i].webImage.url
//             const  kunstTitel = newData[i].longTitle
//             const  titleShort = newData[i].title
//             document.querySelector('#home ul').insertAdjacentHTML(`beforeend` ,`<li>
//             <img src='${kunstImg.slice(0, -3)+'=s1000'}' alt='${titleShort}'>
//             <section>
//                 <h2>${kunstTitel}</h2>   
//                 <p> </p>
//             </section>
//                 </li>`
//             )  
//         }   
    
//         console.log(newData)
//     });
//     }
//     // for reloading the browser >> //     e.preventDefault();
    
    
    
    
    