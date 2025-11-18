// image slider (SOURCE: https://www.codingnepalweb.com/responsive-image-slider-html-css-javascript/)
document.addEventListener('DOMContentLoaded', function() {
    const sliderWrappers = document.querySelectorAll('.slider-wrapper');
    
    sliderWrappers.forEach(wrapper => {
        const imageList = wrapper.querySelector('.image-list');
        const prevButton = wrapper.querySelector('.prev-slide');
        const nextButton = wrapper.querySelector('.next-slide');
        
        nextButton.addEventListener('click', () => {
            const scrollAmount = imageList.clientWidth;
            imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        prevButton.addEventListener('click', () => {
            const scrollAmount = imageList.clientWidth;
            imageList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    });
});

// nav bar menu for smaller screens
function openMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

// make navbar transparent on scroll
window.addEventListener('scroll', function() {
  const nav = document.getElementById('myTopnav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});