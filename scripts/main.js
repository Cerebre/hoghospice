// Country Code Input
document.addEventListener('DOMContentLoaded', function () {
  var input = document.querySelector('.country-code-input');
  var iti = window.intlTelInput(input, {
    preferredCountries: ['ng'],
    separateDialCode: true,
    nationalMode: false,
  });
});

// Play and Popup Video
function playStory() {
  var trailer = document.querySelector('.video-player');
  var video = document.querySelector('video');
  trailer.classList.toggle('active');
  video.currentTime = 0;
  video.play();
}

// Card Testimonial Code
const buttons = document.querySelectorAll('.custom-card');
const slide = document.querySelectorAll('.story-container');

let activeBtn = buttons[0];

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    activeBtn.classList.remove('active');
    activeBtn = button;
    activeBtn.classList.add('active');
    const activeContent = document.getElementById(`${button.id}-content`);
    slide.forEach((content) => {
      content.classList.remove('active');
      gsap.to(content, 0.8, {
        opacity: 0,
      });
    });
    activeContent.classList.add('active');
    gsap.to(activeContent, 0.8, {
      opacity: 1,
    });
  });
});
