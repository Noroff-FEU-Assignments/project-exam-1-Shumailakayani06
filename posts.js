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

     <div class="imgdiv"><img src="${posts[bpost]._embedded["wp:featuredmedia"][0].source_url}"></div>
     <div> <a href="blogpost.html?id=${posts[bpost].id}">
     ${posts[bpost].title.rendered}
     </a></div>
     
    </div>`;

}
   blogPosts.innerHTML = pList;
   
 
}



