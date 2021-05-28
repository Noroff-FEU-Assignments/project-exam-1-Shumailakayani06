let blogPost = document.querySelector(".blogPost");



const qString = window.location.search;
const id = new URLSearchParams (qString).get("id");

if (!id) {window.location ="posts.html";}

let pUrl = "https://flowerpowerlcb.com/wp-json/wp/v2/posts/"+ id + "?_embed";
fetch(pUrl)
.then (response => response.json())
.then (data => {
    specificPost (data);
    
    
    
})
.catch((error) =>{
    console.error('Error:' , error);
});

let postContent = "";
function specificPost(data){
    console.log(data);
    
    postContent += `
    <div>
    <h1 class="specificPostHeading">${data.title.rendered}</h1>
    </div>
    <div class="imageDiv">
    <a class ="clickImg"><img src="${data._embedded["wp:featuredmedia"][0].source_url}"></a></div>
    <div class="modalDiv"><img class="modalImg" src="${data._embedded["wp:featuredmedia"][0].source_url}"></div>
    <p>${data.content.rendered}</p>
    <a href="posts.html">back to posts</a> 
    
    `;

    blogPost.innerHTML = postContent;
    document.title = data.title.rendered

    let clickIMG = document.querySelector(".clickImg");
    let modalDIV = document.querySelector(".modalDiv");
    console.log(clickIMG);
    console.log(modalDIV);

   
    
    clickIMG.addEventListener("click", function (){
        modalDIV.style.display = "block";
    
    })

    window.addEventListener ("click", function(event){
     if (event.target == modalDIV ){
         modalDIV.style.display ="none";
     }
    })
        



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










