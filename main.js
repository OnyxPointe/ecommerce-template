console.log('something happened');
// FAQ Dropdown
const buttons = document.querySelectorAll('.expand-button')
const expandingSection = document.querySelectorAll('.expandable')

function showMore(){
  let targetExpandableDiv = this.dataset.targetButton;
  expandingSection.forEach(section => {
    if (targetExpandableDiv == section.dataset.targetMore){
      section.classList.toggle('hidden');
    } else {
      section.classList.add('hidden');
    }
  })
}

buttons.forEach(button => {
  button.addEventListener('click', showMore)
})


// Sticky Header
const header = document.querySelector ('.sticky-header');

const stickyNav = document.querySelector('.sticky-nav');

let scrollHeight

function stickyScroll(){
  let navToTop = header.getBoundingClientRect().top;
  if (navToTop < -1){
    stickyNav.classList.add('fixed')
  } else {
    stickyNav.classList.remove('fixed')
  }
console.log(scrollHeight);
  if (window.scrollY > scrollHeight){
    if(navToTop < -30){
      stickyNav.style.top = '-80px';
      // stickyNav.classList.add('hide');
    } else {
      // stickyNav.classList.remove('hide');
      stickyNav.style.top = '0px';
    }
  } else {
    // stickyNav.classList.remove('hide');
    stickyNav.style.top = '0px';
  }

  scrollHeight = window.scrollY
};

window.addEventListener('scroll', stickyScroll);


// Slick slider
$(document).ready(function(){
  $('.slider-container').slick({
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 200,
    arrows: false,
    accessibility: true,
    dots: true, 
    fade: true,
    infinite: true,
    pauseOnHover: true,
    pauseOnDotHover: true
  });
});
