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
const backButton = document.getElementById('backButton');

if (backButton) {
  if (window.location.href.indexOf('./donate/') == -1) {
    backButton.addEventListener('click', function () {
      window.location = '/donate.html';
    });
  }
}

// Gallery Sorting
const yearSelect = document.getElementById('year-select');
const imageContainer = document.getElementById('grid-container');
const imageItems = imageContainer.querySelectorAll('.grid-items');
const dataAvailable = document.querySelector('.data-unavailable');
const currentButton = document.getElementsByClassName('gallery-button');

const filterImages = function (selectedYear) {
  let visibleImageItems = 0;
  imageItems.forEach(function (imageItem) {
    if (
      selectedYear === 'all' ||
      imageItem.getAttribute('data-year') === selectedYear
    ) {
      imageItem.style.display = 'block';
      visibleImageItems += 1;
    } else {
      imageItem.style.display = 'none';
    }
  });
  if (visibleImageItems === 0) {
    dataAvailable.style.display = 'block';
    // console.log('No images available');
  } else {
    dataAvailable.style.display = 'none';
    // console.log('Images available');
  }
};

yearSelect.addEventListener('change', function () {
  filterImages(this.value);
});

// Filter By Year Button
const filterAllButton = document.getElementById('filter-all');
const filter2023Button = document.getElementById('filter-2023');
const filter2022Button = document.getElementById('filter-2022');
const filter2021Button = document.getElementById('filter-2021');
const filter2020Button = document.getElementById('filter-2020');
const filter2019Button = document.getElementById('filter-2019');
const filter2018Button = document.getElementById('filter-2018');
const filter2017Button = document.getElementById('filter-2017');
const filter2016Button = document.getElementById('filter-2016');
const filter2015Button = document.getElementById('filter-2015');
const filter2014Button = document.getElementById('filter-2014');
const filter2013Button = document.getElementById('filter-2013');
const filter2012Button = document.getElementById('filter-2012');
const filter2011Button = document.getElementById('filter-2011');
const filter2010Button = document.getElementById('filter-2010');
const filter2009Button = document.getElementById('filter-2009');
const filter2008Button = document.getElementById('filter-2008');
const filter2007Button = document.getElementById('filter-2007');
const filter2006Button = document.getElementById('filter-2006');
const filter2005Button = document.getElementById('filter-2005');

filterAllButton.addEventListener('click', function () {
  filterImages('all');
});

filter2023Button.addEventListener('click', function () {
  filterImages('2023');
});
filter2022Button.addEventListener('click', function () {
  filterImages('2022');
});
filter2021Button.addEventListener('click', function () {
  filterImages('2021');
});
filter2020Button.addEventListener('click', function () {
  filterImages('2020');
});
filter2019Button.addEventListener('click', function () {
  filterImages('2019');
});
filter2018Button.addEventListener('click', function () {
  filterImages('2018');
});
filter2017Button.addEventListener('click', function () {
  filterImages('2017');
});
filter2016Button.addEventListener('click', function () {
  filterImages('2016');
});
filter2015Button.addEventListener('click', function () {
  filterImages('2015');
});
filter2014Button.addEventListener('click', function () {
  filterImages('2014');
});
filter2013Button.addEventListener('click', function () {
  filterImages('2013');
});
filter2012Button.addEventListener('click', function () {
  filterImages('2012');
});
filter2011Button.addEventListener('click', function () {
  filterImages('2011');
});
filter2010Button.addEventListener('click', function () {
  filterImages('2010');
});
filter2009Button.addEventListener('click', function () {
  filterImages('2009');
});
filter2008Button.addEventListener('click', function () {
  filterImages('2008');
});
filter2007Button.addEventListener('click', function () {
  filterImages('2007');
});
filter2006Button.addEventListener('click', function () {
  filterImages('2006');
});
filter2005Button.addEventListener('click', function () {
  filterImages('2005');
});
