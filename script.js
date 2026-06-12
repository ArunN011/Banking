// OPEN MOBILE MENU
function openMenu(){
  document.getElementById("mobileMenu").style.display="flex";
}

// CLOSE MOBILE MENU
function closeMenu(){
  document.getElementById("mobileMenu").style.display="none";
}

// HEADER SCROLL EFFECT
window.addEventListener("scroll", function(){
  const header = document.getElementById("header");
  if(window.scrollY > 80){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }
  });
});

// INITIAL LOAD ANIMATION
window.addEventListener("load", function(){
  const elements = document.querySelectorAll(".animate");
  elements.forEach(el => {
    el.classList.add("show");
  });
});

function toggleMobileDropdown(e){
  e.preventDefault();
  const submenu = e.target.nextElementSibling;
  submenu.style.display =
    submenu.style.display === "block" ? "none" : "block";
}


// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{ threshold:0.2 });

document.querySelectorAll(".animate").forEach(el=>{
  observer.observe(el);
});


const a = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{ threshold:0.3 });

document.querySelectorAll(".animate").forEach(el=>{
  a.observe(el);
});




const elements = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }
  });
});




const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {

    // Close other open items
    accordionItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // Toggle current
    item.classList.toggle("active");
  });
});






function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);





const scrollBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Scroll to top smoothly
scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});





const floatingItems = document.querySelectorAll(".floating");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 50;
  const y = (window.innerHeight / 2 - e.pageY) / 50;

  floatingItems.forEach((item) => {
    item.style.transform = `translate(${x}px, ${y}px)`;
  });
});





document.addEventListener("DOMContentLoaded", function() {

  const elements = document.querySelectorAll('.fade-up');
  const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){

        entry.target.classList.add("show");

        // If element contains counter
        if(entry.target.querySelector('.counter')){
          const counterEl = entry.target.querySelector('.counter');
          const target = +counterEl.getAttribute("data-target");

          let count = 0;
          const speed = 20;
          const increment = target / 100;

          const updateCounter = () => {
            count += increment;
            if(count < target){
              counterEl.innerText = Math.ceil(count);
              setTimeout(updateCounter, speed);
            } else {
              counterEl.innerText = target;
            }
          };

          updateCounter();
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));

});








document.addEventListener("DOMContentLoaded", function(){

  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting){
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

});




document.addEventListener("DOMContentLoaded", function(){

  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting){
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

});




document.addEventListener("DOMContentLoaded", function(){

  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting){
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

});



document.addEventListener("DOMContentLoaded", function(){

  // Accordion
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // Scroll Animation
  const elements = document.querySelectorAll('.fade-up, .fade-left');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

});





document.addEventListener("DOMContentLoaded", function(){

  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.2});

  elements.forEach(el=>{
    observer.observe(el);
  });

});