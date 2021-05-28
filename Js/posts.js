/*display 10 post section */

let url = "https://flowerpowerlcb.com/wp-json/wp/v2/posts?_embed";
let blogPosts = document.querySelector(".posts");


console.log(blogPosts);

fetch(url)
.then (response => response.json())
.then (data => {
    
    postList(data);
    console.log(data)
})

.catch((error) => {
    console.error('Error:', error);
});

function postList(posts){

let pList ="";
for (let bpost in posts) {
    console.log(posts[bpost]);
    

    pList += `
    
     <div class="postDiv">
     <div> 
     <a href="blogpost.html?id=${posts[bpost].id}">
     <div class="imgdiv"><img src="${posts[bpost]._embedded["wp:featuredmedia"][0].source_url}"></div>
     
     <h3 class="blogPostHeading">${posts[bpost].title.rendered}</h3>
     ${posts[bpost].excerpt.rendered}
     <button class="blogContinueBtn">Contine reading...</button>

     </a></div>
     
    </div>`;

}
   blogPosts.innerHTML = pList;
   
 
}

 /* remaining post section */

const pButton = document.querySelector(".postButton")
remainingPosts = document.querySelector(".remainingPosts")

const uRl = "https://flowerpowerlcb.com/wp-json/wp/v2/posts?_embed&page=2";
fetch(uRl)
.then(response => response.json())
.then(data => {
    getRemainingPosts(data)
    console.log(data);
})
.catch((error)=> {
    console.error('Error', error);
});




let rPostContent ="";
function getRemainingPosts(rPosts) {

    for(let item in rPosts){
    
    rPostContent += `
        
    <div class="postDiv">
    <div> 
    <a href="blogpost.html?id=${rPosts[item].id}">
    <div class="imgdiv"><img src="${rPosts[item]._embedded["wp:featuredmedia"][0].source_url}"></div>
    
    <h3 class="blogPostHeading">${rPosts[item].title.rendered}</h3>
    <p>${rPosts[item].excerpt.rendered}</p>
    <button class="blogContinueBtn">Continue reading...</button>
    </a></div>
    
   </div>`;

   remainingPosts.innerHTML = rPostContent;
}


    }


/* view more button function*/

    pButton.onclick = function(){
        remainingPosts.style.display = "block"
        
        
        
        pButton.style.display ="none"
    }


/* scroll to top button function*/
    const btnScrollToTop = document.querySelector("#btnScrollToTop");

    btnScrollToTop.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });



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


