let blogPost = document.querySelector(".blogPost");
let breadbrumbsLink = document.querySelector(".breadcrumbs__link--active");
let reciepe = document.querySelector(".reciepe");





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
let crumbs = "";
let postContent = "";
let recepieP = "";
function specificPost(data){
    console.log(data);
    
    postContent += `
    <div>
    <h1 class="specificPostHeading">${data.title.rendered}</h1>
    </div>
    <div class="imageDiv">
    <a class ="clickImg"><img src="${data._embedded["wp:featuredmedia"][0].source_url}"></a></div>
    <div class="modalDiv"><img class="modalImg" src="${data._embedded["wp:featuredmedia"][0].source_url}"></div>
    
    
    `;

  recepieP += `
  ${data.content.rendered}
  `

    crumbs += 
    `${data.title.rendered}`;

   

    blogPost.innerHTML = postContent;
    breadbrumbsLink.innerHTML = crumbs;
    reciepe.innerHTML = recepieP;
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
              //burger animation
    burger.classList.toggle("toggle");
        });
   
   
    });
}

navSlide();


/* loader */


window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");
    
    loader.className += " hidden";
    
    })










