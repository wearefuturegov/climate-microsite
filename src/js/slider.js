import $ from "jquery"

export default () => {

    $(".slider").hover(
        () => { paused = true }, 
        () => { paused = false }
    );

    const slides = document.querySelectorAll(".slider__slide")

    let paused = false
    let currentSlide = 0

    setInterval(() => {
        if(!paused){
            if(currentSlide === slides.length-1) {
                currentSlide = 0 
            } else {
                currentSlide += 1
            }
            console.log(currentSlide)
            advanceSlide(currentSlide)
        }
    }, 4000)

    const advanceSlide = (newSlideIndex) => {
        slides.forEach(slide => {
            slide.setAttribute("hidden", "true")
        })
        slides[newSlideIndex].removeAttribute("hidden")
    }
}


 