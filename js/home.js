const profile = document.querySelector('.avatar');
const homeText = document.querySelector('.text');


const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigator');

const infoCards = document.querySelectorAll('.info-card');
const paragraph = document.querySelectorAll('.AboutMe');

const headingTitle = document.querySelectorAll('.heading-title');



menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
const observer = new IntersectionObserver((entries) => {


  entries.forEach((entry) => {
    
    if(!entry.isIntersecting) return;

    if (entry.classsList.contains('.info-cards')) {

      const delay = [...infoCards].indexOf(entry.target) * 180; //it jobs is for delay animation for cards
      
        setTimeout(() => {
          entry.target.classList.add('show');
        }, delay);
      
    }

     else{
      entry.target.classList.add('show');
     } 
  })
});

const elements = [profile, homeText];
elements.forEach((elem) => {
  observer.observe(elem);
})

infoCards.forEach((cards) => {
  observer.observe(cards);
})

paragraph.forEach((about) => {
  observer.observe(about);
})

headingTitle.forEach((title) => {
  observer.observe(title);
});
