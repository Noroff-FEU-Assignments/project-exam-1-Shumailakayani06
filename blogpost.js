let blogPost = document.querySelector(".blogPost");



const qString = window.location.search;
const id = new URLSearchParams (qString).get("id");

if (!id) {window.location ="posts.html";}

let pUrl = "http://flowerpowerlcb.com/wp-json/wp/v2/posts/" + id;
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
    
    postContent += `
    <div>
    <h2>${data.title.rendered}</h2>
    <p>${data.content.rendered}</p>
    <a href="posts.html">back to posts</a>
    </div>
    
    `

    blogPost.innerHTML = postContent;
    document.title = data.title.rendered
}