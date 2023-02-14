import burger from "./assets/menu-images/burger.jpg"
import pizza from "./assets/menu-images/pizza.jpg"
import fries from "./assets/menu-images/fries.jpg"
import tortilla from "./assets/menu-images/tortilla.jpg"

function mainMenu() {
    const menuArray =[
                {itemName:"Burger", imageURL:burger, description:"A pie-burger of cheese braised beef patty with pastrami Swiss cheese curds matchstick fries and gorgonzola patty vegan bun with woodfired beetroot ketchup.", price:12.99, spicy:true},
                {itemName:"Pizza", imageURL: pizza, description:"basil, mushrooms, pepperoncini, artichoke hearts, sun-dried tomatoes, arugula, fresh mozzarella fior di latte, goat cheese, shredded mozzarella, Italian sausage, pepperoni, prosciutto, anchovy", price:11.50, spicy:false},
                {itemName:"Tortilla", imageURL: tortilla, description:"Our traditional Spanish tortilla has been awarded 1st prize in contests throughout Spain", price:8, spicy:false},
                {itemName:"Fries", imageURL: fries, description:"Our fries are made from locally sourced, fresh Aussie potatoes, cooked with their skins on in a sustainable non-gmo cottonseed sunflower oil blend and ready to be enjoyed with any of our internationally inspired dipping sauces. They aren’t just incredibly delicious, they’re also 100% vegan without chemicals, toxic preservatives or other nasties. ", price:3.00, spicy:false}
                ]

    const main = document.createElement('main');

    for(let i = 0; i < menuArray.length;i++){

        const div = document.createElement("div");
        div.classList.add("menu-item");
        main.appendChild(div);

        const img = document.createElement("img")
        img.src = menuArray[i].imageURL.toString()
        div.appendChild(img)

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("menuItemTitle");
        titleDiv.innerText = menuArray[i].itemName;
        div.appendChild(titleDiv);

        const descDiv = document.createElement("div");
        descDiv.classList.add("menuItemDesc");
        descDiv.innerText = menuArray[i].description;
        div.appendChild(descDiv);

        const priceDiv = document.createElement("div");
        priceDiv.innerText = "€" + menuArray[i].price;
        priceDiv.classList.add("menuItemPrice");
        div.appendChild(priceDiv);
    }
    return main;
 }


export const menu = mainMenu()