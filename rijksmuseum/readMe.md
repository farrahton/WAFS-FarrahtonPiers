# A little 'about me' booklet

https://farrahton.github.io/visitekaart/ 

# The team page I contributed to

https://gekkeboyjeff.github.io/frisbee-dashboard/week1/Geekotron/ 

# User Story for the SPA

As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown Rijksmuseum - RijksData API

# Interface
I'm not going to lie here. I just can't start a project with a sketch or anything. If i would have done it for this assignment I would have spend way too much time changing it up or keep on ending up dissappointed. Since the things I initially would want are most likely too complicated for a noob. That's why I just started with a basic interface with a grid of pictures and text as a result of an option in the navigation bar.

# Loading data from API
Retrieving data from Rijksmuseum requires getting your own unique API-key. From there on you can personalize the URL to retrieve the type of art you want the data from. I decided to pick based on involved maker and chose artist Katsushika Hokusai with a page size of 20 artworks. the link for the const variable i created with that is: https://www.rijksmuseum.nl/api/nl/collection?key=9c1DbBQC&involvedMaker=Katsushika+Hokusai&ps=20' 

I followed the three steps (variables, story and fuction) and used the fetch method in the code. 

` function giveArt() {
    fetch (artHokusai)
        .then(function(response){
            return response.json();
        })` 


# Render HTML from data
The last step resulted in an array with data. Which meant i had to render HTML from it with the information i wanted to show on my website. To do this I had to make an event loop, so I could get every art object as oppossed to just the date from one singular array.

`for(let i = 0; i < artwork.length; i++) ` 

I created an ul in html and 'referenced' to it with the $, which is kind of an abbrivation for document.querySelector. the artworks will then become li's in html because of the insertAdjacentHTMl part.

`
    .then(function(items){
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
})
`

# Implementing UI stack states

<strong> loading</strong>>
One of the lectures was about the UI stack with multiple states. I tried to incorporate a loading state. At first I just used some display text for an HTML article :

`const display = document.querySelector('article');
display.textContent = 'We are loading for you'; ` 

However, I soon realized with this approach I was only displaying some text. Since visualizing stuff is more common nowadays I wanted to show a loading animation instead. That's why I created a simple CSS keyframe of a spinning circle and changed my JavaScript to add and remove a classList that changes it to CSS display:hidden; during the fetch and before the return of json so it will show up on the screen.

<strong> error </strong>
When there's no WiFi an error state will show up.
I used catch for this and innerAdjacentHTML.

Catch is a method used when a promise has been rejected and it is executed immediately after a promise's reject method is called.

# Getting artwork details

With the API I've used for the last few parts I can only retrieve some basic information. For more detailed descriptions I need to use seperate API and use the object number from the 'original' API data. 

# Using hashes
I kind of realized too late that I approached the hash changes with CSS as opposed to JavaScript. Since small changes can cause big consequences in code I decided to keep it that way. Just in case though I'll tell you that I do know how it would work with JavaScript instead. It would just be with an EventListener and a click.

Currently I approached it in a 'reimagined progressive enhanced' way, according so smashingmagine.com.

The :target selector can be used to style the current active target element. 
The child selector (>) selects all elements that are the children of a specified element.

https://www.smashingmagazine.com/2015/12/reimagining-single-page-applications-progressive-enhancement/ 
This is the article I used to create the nav bar with the different artists.

# Tried to filter with map

Since I have a Japanese themed art website I wanted to filter out the 'general' API URL 'https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=[api-key]' to just the artobjects that were made in a specific place, which would obiously be Japan. In the array I could definitely go to the specific PROPERTY????????????? with the following:

`.then(data => {
    console.log(data.facets)
        let artwork = data.map(element => { 
            return { 
            artwork: element.facets[3].facets[14] }
          
`

However, the only thing in there is the key with the value Japan. I can't see any artObjects in there. So after involving Daan Kover and Robert Spier I gave up hope for this approach, since we came up with the conclusion that it isn't possible this way. 

But I am not a quitter, so I came up with something else. However, that too ended up not working for me... I wanted to use the user-generated content API. Figuring out how to even set up the URL the correct way took some time already. 

This is a regular link:
https://www.rijksmuseum.nl/en/rijksstudio/2513578--saraichi/collections/japans?ii=0&p=0 

This is the API link:
https://www.rijksmuseum.nl/api/nl/usersets/2513578-japans?key=9c1DbBQC&format=json

In the first one it's a number two dashes and then the <u> username</u> of the creator. In the second one you have to use the name of the <u>set</u> as opposed to the username. 

Then when i tried to renderHTML i found out that in the array you get from this approach there's only an image and no title of the artwork. Therefore, it's not really that useful for what i wanted to do. The only thing I might be able to do is use the ID of the artObject that is in the array to get that information.

<img src='./imagesReadMe/array.png'> 

# Favicon

In the head I put an image of the japanese flag with one of the most iconic japanese artworks: The Great Wave. I will admit I turned it into an ico file with the great help of https://favicon.io/favicon-converter/ 

` <link rel="icon" type="image/x-icon" href="images/favicon.ico"/>`

# Activity diagram






