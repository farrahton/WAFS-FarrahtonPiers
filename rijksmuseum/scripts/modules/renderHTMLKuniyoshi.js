import { $ } from "../script.js";

export function renderKuniyoshi(items) {
    console.log(items)
    const artwork = items.artObjects;

    const list = $('#kuniyoshi');
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
}