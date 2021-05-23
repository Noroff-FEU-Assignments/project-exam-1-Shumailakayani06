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
    <h1 specificPostHeading>${data.title.rendered}</h1>
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










