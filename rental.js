const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {

    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 3000);
  }

}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides
      .length - 1;
  }


  slides.forEach(slide => {
    slide.classList.remove("displaySlide")
  })
  slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
  clearInterval(intervalId)
  slideIndex--
  showSlide(slideIndex)
}
function nextSlide() {
  slideIndex++
  showSlide(slideIndex)
}

const slides2 = document.querySelectorAll(".slides2 img")
let slideIndex2 = 0;
let intervalId2 = null;

document.addEventListener("DOMContentLoaded", initializeSlider2);

function initializeSlider2() {
  if (slides.length > 0) {

    slides2[slideIndex2].classList.add("displaySlide2");
    intervalId2 = setInterval(nextSlide2, 3000);
  }

}

function showSlide2(index) {
  if (index >= slides2.length) {
    slideIndex2 = 0;
  } else if (index < 0) {
    slideIndex2 = slides2
      .length - 1;
  }


  slides2.forEach(slide => {
    slide.classList.remove("displaySlide2")
  })
  slides2[slideIndex2].classList.add("displaySlide2");
}
function prevSlide2() {
  clearInterval(intervalId2)
  slideIndex2--
  showSlide2(slideIndex2)
}
function nextSlide2() {
  slideIndex2++
  showSlide2(slideIndex2)
}

const slides3 = document.querySelectorAll(".slides3 img")
let slideIndex3 = 0;
let intervalId3 = null;

document.addEventListener("DOMContentLoaded", initializeSlider3);

function initializeSlider3() {
  if (slides3.length > 0) {

    slides3[slideIndex3].classList.add("displaySlide3");
    intervalId3 = setInterval(nextSlide3, 3000);
  }

}

function showSlide3(index) {
  if (index >= slides3.length) {
    slideIndex3 = 0;
  } else if (index < 0) {
    slideIndex3 = slides3
      .length - 1;
  }


  slides3.forEach(slide => {
    slide.classList.remove("displaySlide3")
  })
  slides3[slideIndex3].classList.add("displaySlide3");
}
function prevSlide3() {
  clearInterval3(intervalId)
  slideIndex3--
  showSlide3(slideIndex)
}
function nextSlide3() {
  slideIndex3++
  showSlide3(slideIndex3)
}
const navSlide=()=>{
  const burger= document.querySelector('.burger')
  const nav=document.querySelector('.links')
  const navLinks =document.querySelectorAll('.links a')
  
  burger.addEventListener('click',()=>{
   nav.classList.toggle('nav-active');
   navLinks.forEach((link, index)=>{
    if (link.style.animation) {
      link.style.animation='';
  } else{
 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`}
   })
 
})
  }

navSlide();

const WhyLinksAnimate=()=>{
  const WhyList= document.querySelectorAll('.Why ul li');
  
  WhyList.forEach((list, index)=>{
  list.style.animation=`slideleft 0.5s ease forwards ${index / 5 + 0.5}s`
  })
 }
 WhyLinksAnimate();


/*leftSlideSlogan-animation */
const leftSlideSloganAnimate= ()=>{
const leftSldeSlogan=document.querySelector('.leftSlideSlogan');
const observer= new IntersectionObserver (entries =>{
  entries.forEach(entry=>{
    if (entry.isIntersecting) {
      leftSldeSlogan.classList.add('animate')
      observer.unobserve(entry.target)
    }
  })
});
observer.observe(leftSldeSlogan);
}
leftSlideSloganAnimate();

const servicesHAnimate=()=>{
  const servicesH= document.querySelector('.servicesH');
  const observer= new IntersectionObserver (entries=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        servicesH.classList.add('animate')
        observer.unobserve(entry.target)
      }
  })
})
  observer.observe(servicesH)
}
servicesHAnimate();

/*Why Choose Us Animation*/
/*Image.img Animation*/
const WhyImageAnimation=()=>{
  const WhyImage=document.querySelector('.image img')
  const Observer= new IntersectionObserver (entries=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        WhyImage.classList.add('animate')
        Observer.unobserve(entry.target)
      }
  })
})
Observer.observe(WhyImage)
}
WhyImageAnimation();

const ContactLogoAnimate=()=>{
  const ContactLogo= document.querySelector('.contactLogoCon');
  const observer= new IntersectionObserver (entries=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        ContactLogo.classList.add('animate')
        observer.unobserve(entry.target)
      }
  })
})
  observer.observe(ContactLogo)
}
ContactLogoAnimate();

const ContactSloganAnimate=()=>{
  const ContactText= document.querySelector('.contactSlogan');
  const observer= new IntersectionObserver (entries=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        ContactText.classList.add('animate')
        observer.unobserve(entry.target)
      }
  })
})
  observer.observe(ContactText)
}
ContactSloganAnimate();

const ContactUsAnimate=()=>{
  const ContactUs= document.querySelector('.contact-us');
  const observer= new IntersectionObserver (entries=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        ContactUs.classList.add('animate')
        observer.unobserve(entry.target)
      }
  })
})
  observer.observe(ContactUs)
}
ContactUsAnimate();
 
const ContactlastPhrase=()=>{
  const Contactlast= document.querySelector('.contact-last');
  const observer= new IntersectionObserver (entries=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        Contactlast.classList.add('animate')
        observer.unobserve(entry.target)
      }
  })
})
  observer.observe(Contactlast)
}
ContactlastPhrase();
 
