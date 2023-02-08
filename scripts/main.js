// Country Code Input
if (
  window.location.href.indexOf('./contact.html') == -1 &&
  window.location.href.indexOf('./volunteer.html') == -1
) {
  // Your JavaScript code here
  if (document) {
    document.addEventListener('DOMContentLoaded', function () {
      var input = document.querySelector('.country-code-input');
      var iti = window.intlTelInput(input, {
        preferredCountries: ['ng'],
        separateDialCode: true,
        nationalMode: false,
      });
    });
  }
}

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
if (buttons) {
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
}

// Hamburger Controllers
const barControl = document.querySelector('.bars');
const bodyElement = document.querySelector('body');
if (barControl) {
  barControl.addEventListener('click', function () {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      gsap.to('.bar-one', {
        rotate: '45deg',
        top: '50%',
        y: '-50%',
        transformOrigin: 'center',
      });
      gsap.to('.bar-three', {
        rotate: '-45deg',
        top: '50%',
        y: '-50%',
        transformOrigin: 'center',
      });
      gsap.to('.bar-two', {
        scale: '0',
        // opacity: 0,
      });
      gsap.to('.menu', {
        right: '0',
      });
      gsap.to('body', {
        overflow: 'hidden',
      });
    } else {
      gsap.to('.bar-one', {
        rotate: '0deg',
        top: '25%',
        y: '0%',
        transformOrigin: 'center',
      });
      gsap.to('.bar-three', {
        rotate: '0deg',
        top: '75%',
        y: '-75%',
        transformOrigin: 'center',
      });
      gsap.to('.bar-two', {
        scale: '1',
      });
      gsap.to('.menu', {
        right: '-100%',
      });
      gsap.to('body', {
        overflow: 'scroll',
      });
    }
  });
}

// Shortening Texts On Mobile
const mq = window.matchMedia('(max-width: 768px)');

if (mq.matches) {
  const shortTitle = document.getElementsByClassName('checkTextLenght');

  for (let i = 0; i < shortTitle.length; i++) {
    let shortTitles = shortTitle[i];
    if (shortTitles.innerText.length > 46) {
      shortTitles.innerText = shortTitles.innerText.substring(0, 46) + '...';
    }
  }

  const shortExerpt = document.getElementsByClassName('excerpt');

  for (let i = 0; i < shortExerpt.length; i++) {
    let shortExerpts = shortExerpt[i];
    if (shortExerpts.innerText.length > 127) {
      shortExerpts.innerText = shortExerpts.innerText.substring(0, 112) + '...';
    }
  }
}

// Shortening Texts on 1366px
const screenSize1366px = window.matchMedia('(width: 1366px)');

if (screenSize1366px.matches) {
  const shortTitle = document.getElementsByClassName('checkTextLenght');

  for (let i = 0; i < shortTitle.length; i++) {
    let shortTitles = shortTitle[i];
    if (shortTitles.innerText.length > 46) {
      shortTitles.innerText = shortTitles.innerText.substring(0, 46) + '...';
    }
  }

  const shortExerpt = document.getElementsByClassName('excerpt');

  for (let i = 0; i < shortExerpt.length; i++) {
    let shortExerpts = shortExerpt[i];
    if (shortExerpts.innerText.length > 127) {
      shortExerpts.innerText = shortExerpts.innerText.substring(0, 112) + '...';
    }
  }
}

// Back Button Donation Page
if (window.location.href.indexOf('./donate/') == -1) {
  // Your JavaScript code here
  const backButton = document.getElementById('backButton');

  backButton.addEventListener('click', function () {
    window.location = '/donate.html';
  });
}
