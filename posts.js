let url = "https://flowerpowerlcb.com/wp-json/wp/v2/posts";
let blogPosts = document.querySelector(".posts");
console.log(blogPosts);

fetch(url)
.then (response => response.json())
.then (data => {
    console.log(data)
    postList(data);
})

.catch((error) => {
    console.error('Error:', error);
});

function postList(posts){

let pList ="";
for (let bpost in posts) {
    console.log(posts[bpost].content.rendered);
    

    pList += `
    <div>
    
    <li>
    <a href="blogpost.html?id=${posts[bpost].id}">
     ${posts[bpost].title.rendered}
     ${posts[bpost].content.rendered}
     
     

     </a>
     </li>
     
    </div>`;

}
   blogPosts.innerHTML = pList;
   
 
}



