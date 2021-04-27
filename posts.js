let url = "http://flowerpowerlcb.com/wp-json/wp/v2/posts";
let blogPosts = document.querySelector(".posts");
console.log(blogPosts);

fetch(url)
.then (response => response.json())
.then (data => {
    postList(data);
})

.catch((error) => {
    console.error('Error:', error);
});

function postList(posts){

let pList ="";
for (let bpost in posts) {
    console.log(posts);

    pList += `
    <div>
    
    <li>
    <a href="blogpost.html?id=${posts[bpost].id}">
     ${posts[bpost].slug}
     </a>
     </li>
     
    </div>`;

}
   blogPosts.innerHTML = pList;
 
}

