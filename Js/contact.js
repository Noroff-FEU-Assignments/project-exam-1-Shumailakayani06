const contactForm = document.querySelector(".contact-form");
const fName = document.getElementById("name");
const fNameError = document.querySelector("#error-fName");
const subject = document.getElementById("subject");
const subjectError = document.querySelector("#error-subject");
const email = document.getElementById("email");
const emailError = document.querySelector("#error-email");
const message = document.getElementById("bio");
const submessageError = document.querySelector("#error-submessage");
const errorElement = document.getElementById("error");
const succesmessage = document.querySelector(".success-message");

contactForm.addEventListener("submit", verifyForm);

function verifyForm(e){
     

    if (fName.value.length < 5 || fName.value.length === 3) {
        e.preventDefault();
        fNameError.innerHTML="Name is required with at least 5 characters";
    }

    else if(subject.value.length < 14) {
        e.preventDefault();
        subjectError.innerHTML="Subject must contain at least 15 characters";
    }
    else if(!testEmail(email.value)){
        e.preventDefault();
        emailError.innerHTML="Please enter a valid email";
    }

    else if (message.value.length < 25) {
        e.preventDefault();
        submessageError.innerHTML="Your message must contain at least 25 characters";
    } else{
        

        succesmessage.textContent="Your form has been submitted";
        fName.value="";
        subject.value="";
        email.value="";
        message.value="";
        fNameError.innerHTML="";
        subjectError.innerHTML="";
        emailError.innerHTML="";
        submessageError.innerHTML="";
        e.preventDefault();



        

    } 
}

let pattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
    
function testEmail(str){
    if(!str.match(pattern)){

        return false;
    }
    return true;
}


/* Navigration Bar */

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-link");
    const navLinks = document.querySelectorAll(".nav-link li");
    // toggle nav
    burger.addEventListener("click", () => {
        //toggle nav
        nav.classList.toggle("nav-active");
        nav.style.display = "flex";

        //animate links

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation ="";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    //burger animation
    burger.classList.toggle("toggle");
   
    });
}

navSlide();



