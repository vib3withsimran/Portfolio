let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.button-container a');
let navbar = document.querySelector('.button-container');
let menubtn = document.querySelector('.menu-btn');

//navbar toggle function
menubtn.addEventListener('click', () => {
    navbar.classList.toggle('mobile-screen');
    menubtn.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('mobile-screen');
        menubtn.classList.remove('active');
    });
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    })
}

//education flip setting
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
});

// type snippet
var typed = new Typed('#typed-text', {
    strings: ['Web Developer', 'Software Developer', 'B.Tech CSE Student', 'Creative Thinker'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
  
// particles 
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 30
    },
    "size": {
      "value": 2
    },
    "color": {
      "value": "#ffffff"
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "speed": 0.4
    }
  }
});