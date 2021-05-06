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
     
     ${posts[bpost].title.rendered}
     </a></div>
     
    </div>`;

}
   blogPosts.innerHTML = pList;
   
 
}

 /* remaining post section */

const pButton = document.querySelector(".postButton")
remainingPosts = document.querySelector(".remainingPosts")

const uRl = "http://flowerpowerlcb.com/wp-json/wp/v2/posts?_embed&page=2";
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
    
    ${rPosts[item].title.rendered}
    </a></div>
    
   </div>`;

   remainingPosts.innerHTML = rPostContent;
}


    }


/* view more button function*/

    pButton.onclick = function(){
        remainingPosts.style.display = "inline-block"
        pButton.style.display ="none"
    }


/* scroll to top button function*/
    const btnScrollToTop = document.querySelector("#btnScrollToTop");

    btnScrollToTop.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });


