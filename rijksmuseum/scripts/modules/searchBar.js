const searchtyping= input.value 

fetch(searchAPI + input.value)

.then(function(response) {

return response.json();

})

.then(function(collection) {

console.log(collection)

searchResults(collection);

})



export function mySearch(); { 

searchField.addEventListener('keyup', function(e) {
    const searchString = e.target.value.toLowerCase();

    let newData = theData.artObjects.filter(element => {

        let searchableStrings = `${element.title} ${element.principalOrFirstMaker}`

        if (searchableStrings.toLowerCase().indexOf(searchString) !== -1) {
            return true;
        } else {
            return false;
        }
    })

    let parent = document.querySelector('ul');

    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }

    for (let i = 0; i < newData.length; i++) {
        const artImg = newData[i].webImage.url
        const artTitle = newData[i].longTitle

    document.querySelector('ul').insertAdjacentHTML
    ('afterbegin', `
        <li>
                <img src='${artImg.slice(0, -3)+'=s1000'}' alt='${artwork[i].title}'>
                <section>
                <h2>${artTitle}</h2>   
                <p> </p>
                </section>
        </li>`)
    }

    console.log(newData)

});

// search function

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    practiceSearch();
});

} 