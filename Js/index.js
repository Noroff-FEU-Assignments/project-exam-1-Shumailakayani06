let url = "https://flowerpowerlcb.com/wp-json/wp/v2/posts?_embed&per_page=12";



let carousel_track_container = document.querySelector(".carousel_track_container");

console.log(carousel_track_container);

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
        <ul class="carousel_track">
        <li class="carousel_slide">
        <img class="carousel_image" src="${hPost[posts]._embedded["wp:featuredmedia"][0].source_url}" alt="blog post images">
        </li>
        </ul>
        `;

    }
    carousel_track_container.innerHTML= homeBlogPosts;
    

}

 /* remaining post section */

//

// 

// let uRl = "https://flowerpowerlcb.com/wp-json/wp/v2/posts?_embed&page=2";
// fetch(uRl)
// .then(response => response.json())
// .then(data => {
//     getPlusPosts(data)
//     console.log(data);
// })
// .catch((error)=> {
//     console.error('Error', error);
// });

// let getPlusContent ="";
// function getPlusPosts(getPlus){
//     for(let item in getPlus){
//         getPlusContent += `
//         <ul class="carousel_track">
//         <li class="carousel_slide">
//         <img src="${getPlus[item]._embedded["wp:featuredmedia"][0].source_url}">
//         </li>
//         </ul>
//         `
//         ;
//     }

//     carousel_track_container.innerHTML= getPlusContent;
//     console.log(getPlusContent);
// }


//carousel //

const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".BtnRight");
const prevButton = document.querySelector(".BtnLeft");
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

console.log(slideWidth);




console.log(track);
console.log(slides);





//arrange the lsides next to one another

// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + "px";
// };
// slides.forEach(setSlidePosition);

// //when i click left, move slides to the left
// //when i click right, move slides to the right

// nextBtn.addEventListener("click", e => {
//     const currentSlide = track.querySelector(".current-slide")
//     console.log(currentSlide);
//     const nextSlide = currentSlide.nextElementSibling;
//     const amountToMove = nextSlide
//     console.log(nextSlide);

//     track.style.transform ="translateX("+ amountToMove + ")";
    
// })

//when i click the nav indicators, move to that slide










