let url = "https://flowerpowerlcb.com/wp-json/wp/v2/posts?_embed&per_page=12";




const carouselImages = document.querySelector (".carousel__images");
const carouselButtons = document.querySelectorAll(".carousel__button");


let apiImages = [];



fetch(url)
.then (response => response.json())
.then (data => {

    homePosts(data);
    console.log(data)
    for(let element in data){
        let imageSrc = data[element]._embedded["wp:featuredmedia"][0].source_url;
        apiImages.push(imageSrc)


        const numberOfImages = imageSrc.length;
        let imageIndex = 1;
        let translateX = 0;
       
        carouselButtons.forEach(button =>{
       button.addEventListener("click", Event => {
           if(Event.target.id === "previous"){
               if(imageIndex !== 1){
                   imageIndex--;
                   translateX += 350;
               }
           } else{
               if (imageIndex !== numberOfImages) {
                   imageIndex++;
                   translateX -=300;
               }
           }
       });
        })
       ;



        // const numberOfImages = data[element]._embedded["wp:featuredmedia"][0].source_url.lenght;
        

      

        console.log(imageSrc.length);
     
    }

    
})


.catch((error) => {
    console.error('Error:', error);
});

console.log(apiImages.length);






function homePosts (hPost){

    let homeBlogPosts ="";
    for (let posts in hPost) {
        console.log(hPost[posts]);

        homeBlogPosts += `
       
        <img class="carousel_image" src="${hPost[posts]._embedded["wp:featuredmedia"][0].source_url}" alt="blog post images">
        
        `;

      
   

    
        

    }
    carouselImages.innerHTML= homeBlogPosts;



 }





//  /* remaining post section */



// /* Carousel slide */




//carousel btns



// counter

 







/* Navigration Bar */

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-link");
    const navLinks = document.querySelectorAll(".nav-link li");
    // toggle nav
    burger.addEventListener("click", () => {
        //toggle nav
        nav.classList.toggle("nav-active");

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