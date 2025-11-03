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

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".skills-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.style.display = "none");

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).style.display = "grid";

    // Animate bars
    const progressBars = document.querySelectorAll(`#${tab.dataset.tab} .progress`);
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute("style").match(/width:\s*([\d.]+%)/)[1];
      bar.style.width = "0";
      setTimeout(() => { bar.style.width = targetWidth; }, 100);
    });
  });
});

// Animate initially visible bars
document.querySelectorAll("#frontend .progress").forEach(bar => {
  const targetWidth = bar.getAttribute("style").match(/width:\s*([\d.]+%)/)[1];
  bar.style.width = "0";
  setTimeout(() => { bar.style.width = targetWidth; }, 200);
});

// Soft Skills Tabs Interactivity
document.addEventListener("DOMContentLoaded", () => {
  const stabs = document.querySelectorAll(".stab");
  const contents = document.querySelectorAll(".Softskills-content");

  stabs.forEach(stab => {
    stab.addEventListener("click", () => {
      // remove active class from all tabs
      stabs.forEach(t => t.classList.remove("active"));
      // hide all content
      contents.forEach(content => (content.style.display = "none"));

      // activate the clicked tab
      stab.classList.add("active");

      // show corresponding content with fade effect
      const targetId = stab.getAttribute("data-tab");
      const targetContent = document.getElementById(targetId);
      targetContent.style.display = "grid";
      targetContent.style.opacity = 0;
      targetContent.style.transition = "opacity 0.4s ease-in-out";

      // delay to trigger fade-in
      setTimeout(() => {
        targetContent.style.opacity = 1;
      }, 50);
    });
  });
});
