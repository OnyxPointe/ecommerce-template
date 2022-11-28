// -----------FAQ DROPDOWN
const buttons = document.querySelectorAll('.expand-button')
const expandingSection = document.querySelectorAll('.expandable')

function showMore(){
  let targetExpandableDiv = this.dataset.targetButton;

  buttons.forEach(button => {
    if (targetExpandableDiv == button.dataset.targetButton){
      button.classList.toggle('active');
    } else {
      button.classList.remove('active');
    }
  })

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


// -----------STICKY HEADER
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
      stickyNav.style.top = '-120px';
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

// -----------SLICK SLIDER
$('.slider-container').slick({
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 200,
  arrows: false,
  accessibility: true,
  dots: true, 
  fade: true,
  infinite: true,
  pauseOnHover: true,
  pauseOnDotHover: true
});

// -----------BEFORE/AFTER SLIDER
$("#ba-slider").on("change", (e)=>{
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $('.ba-foreground-img').css('width', `${sliderPos}%`)
  // Update the position of the slider button
  $('.ba-slider-button').css('left', `calc(${sliderPos}% - 18px)`)
});

// // -----------DARK MODE
// // Step #1. Let's start by defining all the const we need. In this activity we need the body and our dark mode button 
//     const body = document.querySelector('body');
//     const darkModeButton = document.querySelector('#dark-btn');

//     // Step #8. Now because we are playing with cookies we want to run some code when the page loads to see if our dark mode cookie is active. To do this we use a classic If statement.
//     // this is checking what state the cookie is in on page load 
//     if (document.cookie.includes('dark-mode=active')) {
//         // Step #9. If was active then we want to add darkMode to the body's class list and we are done
//         // if the cookie says darkMode active then add the class of darkMode to the body 
//         body.classList.add('darkMode');
//     }

//     // Step #2. Just like our classic darkMode button lets start with the toggleDarkMode function
//     // this is new function for flipping between light and dark mode
//     function toggleDarkMode() {
//         // this adds or removes darkMode from the body's class list 
//         // Step #3. Lets toggle the body's darkMode class using   
//         body.classList.toggle('darkMode');
//         // this is checking the classlist again
//         // Step #4. So that should all look similar to the button we did on the only course but now we get to the fun/scary part. First we are going to use an If statement to look at the body's classlist for darkMode
//         if (body.classList.contains('darkMode')) {
//             //if the body contains darkMode then we want to make a cookie that says its active 
//             //if its set to darkMode then make a cookie saying its active
//             document.cookie = "dark-mode=active";
//         }
//         //otherwise we want to make our cookie say that darkMode is deactivated
//         else {
//             // If its not then it is setting it to de-active
//             document.cookie = "dark-mode=de-active";
//         };
//             // This is more troubleshooting code
//             console.log('clicked on ' + document.cookie)
//     };

//     // Step #5. This is tying the darkMode button to the toggleDarkMode function
//     darkModeButton.addEventListener('click', toggleDarkMode);
