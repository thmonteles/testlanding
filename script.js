const slider = document.querySelectorAll('.slider')
const back = document.getElementById('prev-button')
const next = document.getElementById('next')
const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.navbar');

menu.addEventListener("click",() => {
  menu.classList.toggle('active');
  nav.classList.toggle('active');
})

let currentSlide = 0;
function hideSlider() {
    slider.forEach(item => item.classList.remove('active'))
  }
  
  function showSlider() {
    slider[currentSlide].classList.add('active')
  }
  
  function nextSlider() {
    hideSlider()
    if(currentSlide === slider.length -1) {
      currentSlide = 0
    } else {
      currentSlide++
    }
    showSlider()
  }
  
  function backSlider() {
    hideSlider()
    if(currentSlide === 0) {
      currentSlide = slider.length -1
    } else {
      currentSlide--
    }
    showSlider()
  }
  
  next.addEventListener('click', nextSlider)
  back.addEventListener('click', backSlider)