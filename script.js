window.addEventListener('load', () => {
  window.scrollTo({
    left: 0,
    behavior: 'smooth',
  })
});

const pic = document.querySelector('.pic');
const text = document.querySelector('#text');
const name = document.querySelector('#name');

const indicator1 = document.querySelector('.indicator1');
const indicator2 = document.querySelector('.indicator2');
const indicator3 = document.querySelector('.indicator3');

const nameArr = ['Frank, Toyota Camry', 'James Bond, Lexus 360', 'Anna Anderson, Corolla'];

const textArr = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ];
  
  const srcArr = [
    '20230122_95430.jpg',
    '20230122_235126.jpg',
    '20230122_235332.jpg'
    ]
  
var current = -1;

const changeSlide = ()=>{
  ++current;
  pic.src = srcArr[current];
  text.innerHTML = textArr[current];
  name.innerHTML = nameArr[current];
  
  if(name.innerHTML == nameArr[2]) {
    current = -1;
  }
  
  if(name.innerHTML == nameArr[0]){
    indicator1.style.background = '#14ADDD';
    indicator2.style.background = '#999A9E';
    indicator3.style.background = '#999A9E';
  }
  else if(name.innerHTML == nameArr[1]){
    indicator2.style.background = '#14ADDD';
    indicator1.style.background = '#999A9E';
    indicator3.style.background = '#999A9E';
  }
  else if(name.innerHTML == nameArr[2]){
    indicator3.style.background = '#14ADDD';
    indicator2.style.background = '#999A9E';
    indicator1.style.background = '#999A9E';
  }
  
  if(current <= nameArr.length-1){
    setTimeout(changeSlide,2000);
  }
}

setTimeout(changeSlide,2000);

const scrollLink = document.querySelector('.logo');
const homeLink = document.querySelector('.logoImg');

const targetElement = document.querySelector('#home');

scrollLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: targetElement.offsetTop - 120,
      left: 0,
      behavior: 'smooth'
    });
});

homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: targetElement.offsetTop - 120,
      left: 0,
      behavior: 'smooth'
    });
});

const scrollLink1 = document.querySelector('.nav1');
const serviceLink = document.querySelector('.serviceMenu');

const targetElement1 = document.querySelector('#services');

scrollLink1.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: targetElement1.offsetTop - 120,
      left: 0,
      behavior: 'smooth'
    });
});

serviceLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: targetElement1.offsetTop - 120,
      left: 0,
      behavior: 'smooth'
    });
});

const scrollLink2 = document.querySelector('.nav2');
const blogLink = document.querySelector('.blogMenu');

const targetElement2 = document.querySelector('#blog');

scrollLink2.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: targetElement2.offsetTop - 120,
      left: 0,
      behavior: 'smooth'
    });
});

blogLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: targetElement2.offsetTop - 120,
      left: 0,
      behavior: 'smooth'
    });
});

const scrollLink3 = document.querySelector('.nav3');
const testimonyLink = document.querySelector('.testimonyMenu');

const targetElement3 = document.querySelector('#testimonial');

scrollLink3.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: targetElement3.offsetTop - 120,
      left: 0,
      behavior: 'smooth'
    });
});

testimonyLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: targetElement3.offsetTop - 120,
      left: 0,
      behavior: 'smooth'
    });
});

const scrollLink4 = document.querySelector('.nav4');
const contactLink = document.querySelector('.contactMenu');

const targetElement4 = document.querySelector('#contacts');

scrollLink4.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: targetElement4.offsetTop - 120,
      left: 0,
      behavior: 'smooth'
    });
});

contactLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: targetElement4.offsetTop - 120,
      left: 0,
      behavior: 'smooth'
    });
});

const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('#menubar');
const cancelMenu = document.querySelector('#cancel');

const showMenu = ()=>{
  menu.classList.toggle('show');
}

menuBtn.addEventListener('click',showMenu);

cancelMenu.addEventListener('click',showMenu);
