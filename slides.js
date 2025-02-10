const slides = document.querySelectorAll(".slide")
var counter = 0;

let index = 0;
for (const slide of slides) {
    slide.style.left= `${index * 100}%`
    index++;
}

const goPrev = () => {
    counter--;
    slideImage();
}

const goNext = () => {
    counter++;
    slideImage();
}

const slideImage = () => {
    for (const slide of slides) {
        slide.style.transform = `translatex(-${counter * 100}%)`;
    }
}



// const slides = document.querySelectorAll(".slide")
// var counter = 0;
// // console.log(slides)
// slides.forEach(
//     (slide, index) => {
//         slide.style.top = `${index * 100}%`
//     }
// )

// const goPrev = () => {
//     counter--
//     slideImage()
// }

// const goNext = () => {
//     counter++
//     slideImage()
// }

// const slideImage = () => {
//     slides.forEach(
//         (slide) => {
//             slide.style.transform = `translateY(-${counter * 100}%)`
//         }
//     )
// }
