let url = "https://flowerpowerlcb.com/wp-json/wp/v2/posts?_embed";



let homePostSection = document.querySelector(".homePostSection");

console.log(homePostSection);

fetch(url)
.then (response => response.json())
.then (data => {

    homePosts(data);
    console.log(data)
})

.catch((error) => {
    console.error('Error:', error);
});

function homePosts (hPost){

    let homeBlogPosts ="";
    for (let posts in hPost) {
        console.log(hPost[posts]);

        homeBlogPosts += `
        <div class"carousel">
        <div class="carouselSlider">
       
       <div class="slideImg"><img src="${hPost[posts]._embedded["wp:featuredmedia"][0].source_url}">
        
        </div>
        </div>
        </div>`;

    }
    homePostSection.innerHTML= homeBlogPosts;

}

 /* remaining post section */

let plusPosts = document.querySelector(".plusPost");

console.log(plusPosts);

let uRl = "https://flowerpowerlcb.com/wp-json/wp/v2/posts?_embed&page=2";
fetch(uRl)
.then(response => response.json())
.then(data => {
    getPlusPosts(data)
    console.log(data);
})
.catch((error)=> {
    console.error('Error', error);
});

let getPlusContent ="";
function getPlusPosts(getPlus){
    for(let item in getPlus){
        getPlusContent += `
        <div class"carousel">
        <div class="carouselSlider">
        <div class="slideImg">
        <img src="${getPlus[item]._embedded["wp:featuredmedia"][0].source_url}">
        
        </div>
        </div>
        </div>
        `
        ;
    }

    plusPosts.innerHTML= getPlusContent;
}





