
const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);
const slidesBtnLeft = $(".slides__leftBtn");
const slidesBtnRight = $(".slides__rightBtn");
const slides = $$(".slides__slide");
const currentSlide=$(".slides__slide.active");
const dots=$$(".dots span");
let currentSlideIndex;
let transitionTT=0;

//vòng for để tìm currentslideIndex
for(currentSlideIndex=0;slides[currentSlideIndex]!=currentSlide;currentSlideIndex++){}
let interval =setInterval(() => {
    dots[currentSlideIndex].classList.remove("active");
    slides[currentSlideIndex].classList.remove("active");
    if(currentSlideIndex==slides.length-1) currentSlideIndex=0;
    else currentSlideIndex++;
    dots[currentSlideIndex].classList.add("active");
    slides[currentSlideIndex].classList.add("active");

    slides[currentSlideIndex].addEventListener("webkitTransitionEnd", ()=> {transitionTT=0;},false); 
},4000);

    slidesBtnLeft.onclick = function() {
        // Object.values( một object ) thì nó sẽ trả về thuộc tính của object đó dưới dạng array
        // console.log( Object.values(currentSlide.classList).includes("active") );
        if(transitionTT==1) return false;
        transitionTT=1;

        dots[currentSlideIndex].classList.remove("active");
        slides[currentSlideIndex].classList.remove("active");
        if(currentSlideIndex==0) currentSlideIndex=slides.length-1;
        else currentSlideIndex--;
        dots[currentSlideIndex].classList.add("active");
        slides[currentSlideIndex].classList.add("active");

        slides[currentSlideIndex].addEventListener("webkitTransitionEnd", ()=> {transitionTT=0;},false); 
    }
    slidesBtnRight.onclick = function() {
        if(transitionTT==1) return false;
        transitionTT=1;
        dots[currentSlideIndex].classList.remove("active");
        slides[currentSlideIndex].classList.remove("active");
        if(currentSlideIndex==slides.length-1) currentSlideIndex=0;
        else currentSlideIndex++;
        dots[currentSlideIndex].classList.add("active");
        slides[currentSlideIndex].classList.add("active");

        slides[currentSlideIndex].addEventListener("webkitTransitionEnd", ()=> {transitionTT=0;},false); 

    }

