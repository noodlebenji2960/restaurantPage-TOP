import { home } from './about';
import { menu } from "./menu";
import { contact } from "./contact"
import './style.css';

import whatsapp from "./assets/whatsapp.png"
import instagram from "./assets/instagram.png"
import facebook from "./assets/facebook.png"


let content = document.getElementById("content")

function tabbedBrowsing(e){
    if(e.target.innerText == "about"){
        content.removeChild(content.children[1])
        content.insertBefore(home, content.children[1]);
    }else if(e.target.innerText == "menu"){
        content.removeChild(content.children[1])
        content.insertBefore(menu, content.children[1]);
    } else if(e.target.innerText == "contact"){
        content.removeChild(content.children[1])
        content.insertBefore(contact, content.children[1]);
    } else {
        
    }
}

function header() {
    const header = document.createElement('header');
    const logoDiv = document.createElement("div")
    logoDiv.innerText  = "The Mistley Grill"
    
    logoDiv.classList.add("logo")
    header.appendChild(logoDiv)
    const nav = document.createElement("nav")
    header.appendChild(nav)
    const ul = document.createElement("ul")
    nav.appendChild(ul)

    for(let i = 0; i <3; i++){
     const li = document.createElement("li")
     ul.appendChild(li)
     const a = document.createElement("a")
     li.appendChild(a)
     a.addEventListener("click", e=>tabbedBrowsing(e))
    }

    ul.children[0].childNodes[0].textContent = "about"
    ul.children[1].childNodes[0].textContent = "menu"
    ul.children[2].childNodes[0].textContent = "contact"

    return header;
}

 function footer() {
    const footer = document.createElement('footer');

    const iconContainer = document.createElement("div")
    footer.appendChild(iconContainer)
    
    const facebookIcon = document.createElement("img")
    facebookIcon.src = facebook
    iconContainer.appendChild(facebookIcon)

    const whatsappIcon = document.createElement("img")
    whatsappIcon.src = whatsapp
    iconContainer.appendChild(whatsappIcon)

    const instagramIcon = document.createElement("img")
    instagramIcon.src = instagram
    iconContainer.appendChild(instagramIcon)

    const span = document.createElement("span")
    const a = document.createElement("a")
    footer.appendChild(span)
    span.textContent = "designed by Ben"
    a.href = "https://github.com/noodlebenji2960"
    span.appendChild(a)
    return footer;
 }

 content.appendChild(header());
 content.appendChild(home);
 content.appendChild(footer());