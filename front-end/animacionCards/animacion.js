const scrollOffset = 100;
 
const scrollElement = document.querySelector(".js-scroll");

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}
 
const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}
 
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}

 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})


// Echo por mi
const scrollRight = document.querySelector(".js-scroll-r")

const displayScrollRight = () =>{
  scrollRight.classList.add('scrolled');
}

const hideScrollRight = () =>{
  scrollRight.classList.remove('scrolled');
}

const Scrollright = () =>{
  if(elementInView(scrollRight, scrollOffset)){
    displayScrollRight();
  }else{
    hideScrollRight();
  }
}

window.addEventListener('scroll', ()=>{
  Scrollright();
})

