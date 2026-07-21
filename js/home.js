const profile = document.querySelector('.avatar');
const homeText = document.querySelector('.text');


const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigator');

const infoCards = document.querySelectorAll('.info-card');
const paragraph = document.querySelectorAll('.AboutMe');


menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
const observer = new IntersectionObserver((entries) => {


  entries.forEach((entry) => {

    const delay = [...infoCards].indexOf(entry.target) * 180; //it jobs is for delay animation for cards
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  })
});

const elements = [profile, homeText];
elements.forEach((elem) => {
  observer.observe(elem);
})

infoCards.forEach((cards)=>{
  observer.observe(cards);
})

paragraph.forEach((about) => {
  observer.observe(about);
})
