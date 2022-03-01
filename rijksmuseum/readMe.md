# A little about me booklet

https://farrahton.github.io/visitekaart/ 

# The team page I contributed to

https://gekkeboyjeff.github.io/frisbee-dashboard/week1/Geekotron/ 

# User Story for the SPA

As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown Rijksmuseum - RijksData API

# Interface
I'm not going to lie here. I just can't start a project with a sketch or anything. If i would have done it for this assignment i would have spend way too much time changing it up or keep on ending up dissappointed. That's why i just started with a basic interface that isn't too complicated to code for a beginner. 

# Loading data from API
Retrieving data from Rijksmuseum requires getting your own unique API-key. From there on you can personalize the URL to retrieve the type of art you want the data from. I decided to pick based on involved maker and chose artist Katsushika Hokusai with a page size of 20 artworks. the link for the const variable i created with that is: https://www.rijksmuseum.nl/api/nl/collection?key=9c1DbBQC&involvedMaker=Katsushika+Hokusai&ps=20' 

I followed the three steps (variables, story and fuction) and used the fetch method in the code. 


` function giveArt() {
    fetch (artHokusai)
        .then(function(response){
            return response.json();
        })` 


# Render HTML from data
The last step resulted in an array with data. Which meant i had to render HTML from it with the information i wanted to show on my website. To do this i had to make an event loop, so i could get every art object as oppossed to just the date from one singular array.

`for(let i = 0; i < artwork.length; i++) ` 

I created an ul in html and 'referenced' to it with the $, which is kind of an abbrivation for document.querySelector. the artworks will then become li's in html because of the insertAdjacentHTMl part.

` .then(function(items){
            const artwork = items.artObjects;

            const list = $('ul');
            for(let i = 0; i < artwork.length; i++) {
                list.insertAdjacentHTML('afterbegin', `
                <li>
                        <img src='${artwork[i].webImage.ur
                        l.slice(0, -3)+'=s1000'}' alt='${artwork[i].title}'>
                        <section>
                        <h2>${artwork[i].title}</h2>   
                        <p> </p>
                        </section>
                </li>`)
            }
        })`

# Possible loading state

I tried to incorporate a loading state, but I think it's just some display text instead of an actual loading state, but I'm note sure. 

# Details about art object

With the API I've used for the last few parts I can only retrieve some basic information. For more detailed descriptions I need to use seperate API and use the object number from the 'original' API data. 

