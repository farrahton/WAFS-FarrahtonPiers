
// 

// var domGeladen = document.addEventListener

const loader = document.querySelector('#loader');

// window.addEventListener("load", loadingState()
//     //dom is fully loaded, but maybe waiting on images & css files

// )

// function loadingState(){
//     loader.classList.remove('hidden'); 
// }


// uitroepteken voor een vergelijker betekent niet gelijk aan, meer dan etc not the original meaning
document.onreadystatechange = fixLoader();  

export function fixLoader(){
    if (document.readyState !== "complete") {
        loader.classList.remove('hidden');  
    }
    else {
        loader.classList.add('hidden');
    }
}



