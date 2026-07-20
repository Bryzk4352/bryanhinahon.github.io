const profile = document.querySelector('.avatar');
const homeText = document.querySelector('.text');


const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigator');



const paragraph = document.querySelectorAll('.AboutMe');


menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, 100);
    }
  })
});

const elements = [profile, homeText];
elements.forEach((elem) => {
  observer.observe(elem);
})

paragraph.forEach((about) => {
  observer.observe(about);
})
