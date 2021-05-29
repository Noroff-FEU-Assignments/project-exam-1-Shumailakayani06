let url = "https://flowerpowerlcb.com/wp-json/wp/v2/posts?_embed&per_page=12";


const carouselImages = document.querySelector (".carousel__images");
const carouselButtons = document.querySelectorAll(".carousel__button");
const body = document.getElementsByTagName("body")
const carouselImagesMob = document.querySelector(".carousel__images--mob")
const carouselImagesIpad = document.querySelector(".carousel__images--ipad")
const carouselButtonMob = document.querySelector(".carousel__buttonmob")
const carouselButtonIpad= document.querySelector(".carousel__buttonipad")


/* loader */


window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");
    
    loader.className += " hidden";
    
    })
    

let apiImages = [];

fetch(url)
.then (response => response.json())
.then (data => {

    homePosts(data);
    console.log(data)
 
})

.catch((error) => {
    console.error('Error:', error);
});

console.log(apiImages);
let carouselMob = [];
let carouselIpad = [];
function homePosts(data){
let homeBlogPosts =[];
for(let element in data){
    let imageSrc = data[element]._embedded["wp:featuredmedia"][0].source_url;
    apiImages.push(imageSrc)

    homeBlogPosts += `
    
    <a href="blogpost.html?id=${data[element].id}">
    <img class="carousel_image" src="${data[element]._embedded["wp:featuredmedia"][0].source_url}" alt="blog post images">
    </a>
    
    `
    ;

    carouselMob +=`
    <a href="blogpost.html?id=${data[element].id}">
    <img class="carousel_image" src="${data[element]._embedded["wp:featuredmedia"][0].source_url}" alt="blog post images">
    </a>
    `;

    carouselIpad += ` <a href="blogpost.html?id=${data[element].id}">
    <img class="carousel_image" src="${data[element]._embedded["wp:featuredmedia"][0].source_url}" alt="blog post images">
    </a> `
 

    console.log(data[element]);
    console.log(apiImages.length);
}
carouselImages.innerHTML= homeBlogPosts;
carouselImagesMob.innerHTML =carouselMob;
carouselImagesIpad.innerHTML= carouselIpad;



/* carousel slider */

const numberOfImages = apiImages.length/3-1;
let imageIndex = 1;
let translateX = 0;








carouselButtons.forEach(buttons =>{
    buttons.addEventListener("click", event => {
        
       if(event.target.id === "previouss" ){
           if(imageIndex !== 1){
               imageIndex--;
               translateX += 1080;
           }
       } else{
           if (imageIndex !== numberOfImages) {
               imageIndex++;
               translateX -= 1080;
           }
       }
       carouselImages.style.transform = `translateX(${translateX}px)`;
    });
    })
    ;
    
    }




    /* carousel mob */
carouselButtonMob.forEach(buttons =>{
    buttons.addEventListener("click", event => {
        
       if(event.target.id === "previoussmob" ){
           if(imageIndex !== 1){
               imageIndex--;
               translateX += 1080;
           }
       } else{
           if (imageIndex !== carouselImagesMob ) {
               imageIndex++;
               translateX -= 1080;
           }
       }
       carouselImagesMob.style.transform = `translateX(${translateX}px)`;
    });
    })
    ; 






/* carousel Ipad */




carouselButtonIpad.forEach(buttons =>{
    buttons.addEventListener("click", event => {
        
       if(event.target.id === "previoussipad" ){
           if(imageIndex !== 1){
               imageIndex--;
               translateX += 1080;
           }
       } else{
           if (imageIndex !== carouselImagesIpad ) {
               imageIndex++;
               translateX -= 1080;
           }
       }
       carouselImagesIpad.style.transform = `translateX(${translateX}px)`;
    });
    })
    ;




    


















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
        nav.style.overflow = "hidden";
        
        //animate links

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation ="";
                nav.style.overflow ="hidden";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                
            }
        });
    //burger animation
    burger.classList.toggle("toggle");
   
    });
}

navSlide();










