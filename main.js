// dropdown desktop
document.querySelectorAll(".dropdown").forEach(drop=>{
drop.querySelector(".nav-btn").addEventListener("click",(e)=>{
document.querySelectorAll(".dropdown").forEach(d=>{
if(d!==drop)d.classList.remove("open");
});
drop.classList.toggle("open");
e.stopPropagation();
});
});

document.addEventListener("click",()=>{
document.querySelectorAll(".dropdown").forEach(d=>d.classList.remove("open"));
});

// mobile menu
hamburger.onclick=()=>mobile.classList.add("active");
close.onclick=()=>mobile.classList.remove("active");



// open mobile menu
hamburger.onclick=()=>{
mobileMenu.classList.add("active");
}

// close mobile
closeMenu.onclick=()=>{
mobileMenu.classList.remove("active");
}

// mobile dropdown accordion
document.querySelectorAll(".m-title").forEach(title=>{
title.addEventListener("click",()=>{
const parent=title.parentElement;

document.querySelectorAll(".m-item").forEach(i=>{
if(i!==parent)i.classList.remove("open");
});

parent.classList.toggle("open");
});
});




document.getElementById("registerForm").addEventListener("submit",function(e){

const pass=this.querySelector("input[type=password]").value;

const strong=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if(!strong.test(pass)){
e.preventDefault();
alert("Password must contain uppercase, lowercase, number and symbol.");
}

});




const scrollBtn = document.getElementById("scrollTopBtn");

/* show after scrolling */
window.addEventListener("scroll", () => {
if (window.scrollY > 300) {
scrollBtn.classList.add("show");
} else {
scrollBtn.classList.remove("show");
}
});

/* scroll to top */
scrollBtn.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});




/* ================= HERO SCROLL REVEAL ================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);




document.addEventListener("DOMContentLoaded", function() {

  const elements = document.querySelectorAll('.fade-up');
  const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){

        entry.target.classList.add("show");

        const counter = entry.target.querySelector(".counter");

        if(counter){
          const target = +counter.getAttribute("data-target");
          let count = 0;
          const speed = 20;
          const increment = target / 100;

          const updateCounter = () => {
            count += increment;
            if(count < target){
              counter.innerText = Math.ceil(count);
              setTimeout(updateCounter, speed);
            } else {
              counter.innerText = target;
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

