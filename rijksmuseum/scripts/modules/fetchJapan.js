    const artJapan = `https://www.rijksmuseum.nl/api/nl/collection?key=9c1DbBQC&ps=10&imgonly=true&q=%27`;
    const loader = document.querySelector('#loaderContain');
    loader.classList.remove('hidden'); 

    console.log('hi');
    //2 the story
    giveJapan();
    
    //3 fuction
    function giveJapan() {
        fetch (artJapan)
            .then(function(response){
                loader.classList.add('hidden');
                // empty.classList.add('hidden');
                return response.json();
            })
            .then(data => {
                
            })
            .then(function(items){
                renderHTML(items, selector);
            })
    }

    export function $(element) {
        return document.querySelector(element)
    }

