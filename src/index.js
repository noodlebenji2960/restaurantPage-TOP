import './style.css';

import whatsapp from "./assets/whatsapp.png"
import instagram from "./assets/instagram.png"
import facebook from "./assets/facebook.png"

import burger from "./assets/menu-images/burger.jpg"
import pizza from "./assets/menu-images/pizza.jpg"
import fries from "./assets/menu-images/fries.jpg"
import tortilla from "./assets/menu-images/tortilla.jpg"

import phone from "./assets/phone.svg"
import location from "./assets/location.svg"
import email from "./assets/email.svg"

let content = document.getElementById("content")

function tabbedBrowsing(e){
    if(e.target.innerText == "about"){
        content.removeChild(content.children[1])
        content.insertBefore(mainHome(), content.children[1]);
    }else if(e.target.innerText == "menu"){
        content.removeChild(content.children[1])
        content.insertBefore(mainMenu(), content.children[1]);
    } else if(e.target.innerText == "contact"){
        content.removeChild(content.children[1])
        content.insertBefore(mainContact(), content.children[1]);
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

function mainHome() {
    const main = document.createElement('main');
    main.textContent = "With two Mediterranean restaurants set in the heart of the city, our focus is the delivery of excellent food and drink prepared with traditional methods. Wether you like your tortilla runny or set, we guarantee we have something to tickle your taste buds.";
    return main;
 }

 function mainMenu() {
    const menu =[
                {itemName:"Burger", imageURL:burger, description:"A pie-burger of cheese braised beef patty with pastrami Swiss cheese curds matchstick fries and gorgonzola patty vegan bun with woodfired beetroot ketchup.", price:12.99, spicy:true},
                {itemName:"Pizza", imageURL: pizza, description:"basil, mushrooms, pepperoncini, artichoke hearts, sun-dried tomatoes, arugula, fresh mozzarella fior di latte, goat cheese, shredded mozzarella, Italian sausage, pepperoni, prosciutto, anchovy", price:11.50, spicy:false},
                {itemName:"Tortilla", imageURL: tortilla, description:"Our traditional Spanish tortilla has been awarded 1st prize in contests throughout Spain", price:8, spicy:false},
                {itemName:"Fries", imageURL: fries, description:"Our fries are made from locally sourced, fresh Aussie potatoes, cooked with their skins on in a sustainable non-gmo cottonseed sunflower oil blend and ready to be enjoyed with any of our internationally inspired dipping sauces. They aren’t just incredibly delicious, they’re also 100% vegan without chemicals, toxic preservatives or other nasties. ", price:3.00, spicy:false}
                ]

    const main = document.createElement('main');

    for(let i = 0; i < menu.length;i++){

        const div = document.createElement("div");
        div.classList.add("menu-item");
        main.appendChild(div);

        const img = document.createElement("img")
        img.src = menu[i].imageURL.toString()
        div.appendChild(img)

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("menuItemTitle");
        titleDiv.innerText = menu[i].itemName;
        div.appendChild(titleDiv);

        const descDiv = document.createElement("div");
        descDiv.classList.add("menuItemDesc");
        descDiv.innerText = menu[i].description;
        div.appendChild(descDiv);

        const priceDiv = document.createElement("div");
        priceDiv.innerText = "€" + menu[i].price;
        priceDiv.classList.add("menuItemPrice");
        div.appendChild(priceDiv);
    }
    return main;
 }

 function mainContact() {
    const main = document.createElement('main');
    //contact container
    const div = document.createElement("div");
    div.classList.add("contact-container")
    main.appendChild(div);
    div.innerText = "When we started in our tiny Brighton restaurant, we always said we wanted our guests to end their meal feeling happy and full. It’s still at the heart of the business today. Our guests are everything, which is why we really value feedback. Let us know how we’re doing with eat-in and takeaway, whether it’s good or things we could improve on."

    //contact details
    const contactDetails = document.createElement("div")
    contactDetails.style.display = "flex"

    const tele = document.createElement("div")
    const teleIcon = document.createElement("img")
    teleIcon.src = phone.toString()
    tele.appendChild(teleIcon)
    const span1 = document.createElement("span")
    span1.innerText = "01259 270 662"
    tele.appendChild(span1)
    div.appendChild(tele)

    const address = document.createElement("div")
    const addressIcon = document.createElement("img")
    addressIcon.src = location.toString()
    address.appendChild(addressIcon)
    const span2 = document.createElement("span")
    span2.innerText = "123 Fake Street, Laramie, St Douglas, WY, US"
    address.appendChild(span2)
    div.appendChild(address)

    div.appendChild(contactDetails)

    //google map
    const iframe = document.createElement("iframe")
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2930.0695376454332!2d-105.37980168415751!3d42.744580979163004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8766b5340eae5139%3A0x895ed3dfdc1117e3!2s727%20Laramie%20St%2C%20Douglas%2C%20WY%2082633%2C%20USA!5e0!3m2!1sen!2ses!4v1676291453384!5m2!1sen!2ses"
    div.appendChild(iframe)

    const msg = document.createElement("div");
    msg.classList.add("contact-container")

    const form = document.createElement("form")
    const input = document.createElement("input")
    input.type = "text"
    input.id = "msg-box"
    input.placeholder = "Get in contact!"
    form.appendChild(input)

    const div2 = document.createElement("div")
    const submit = document.createElement("button")
    submit.type = "submit"
    submit.innerText = "Send"
    div2.appendChild(submit)
    
    const clear = document.createElement("button")
    clear.innerText = "Clear"
    div2.appendChild(clear)
    
    form.appendChild(div2)
    msg.appendChild(form)
    
    main.appendChild(msg)


    return main;
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
 content.appendChild(mainHome());
 content.appendChild(footer());