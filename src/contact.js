import phone from "./assets/phone.svg"
import location from "./assets/location.svg"
import email from "./assets/email.svg"

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

    const emailAddress = document.createElement("div")
    const emailAddressIcon = document.createElement("img")
    emailAddressIcon.src = email.toString()
    emailAddress.appendChild(emailAddressIcon)
    const span2 = document.createElement("span")
    span2.innerText = "contact@themistley.com"
    emailAddress.appendChild(span2)
    div.appendChild(emailAddress)

    const address = document.createElement("div")
    const addressIcon = document.createElement("img")
    addressIcon.src = location.toString()
    address.appendChild(addressIcon)
    const span3 = document.createElement("span")
    span3.innerText = "123 Fake Street, Laramie, St Douglas, WY, US"
    address.appendChild(span3)
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

 export const contact = mainContact()