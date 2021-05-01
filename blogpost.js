let blogPost = document.querySelector(".blogPost");



const qString = window.location.search;
const id = new URLSearchParams (qString).get("id");

if (!id) {window.location ="posts.html";}

let pUrl = "https://flowerpowerlcb.com/wp-json/wp/v2/posts/"+ id;
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
   
    <h1>${data.title.rendered}</h1>
    ${data.excerpt.rendered}
    ${data._links["wp:featuredmedia"][0].href}
   
    
    <a href="posts.html">back to posts</a>
   
    </div>
    <div>
    <img src="${data._links["wp:featuredmedia"][0].href}">
    </div>  
    `

    blogPost.innerHTML = postContent;
    document.title = data.title
}

