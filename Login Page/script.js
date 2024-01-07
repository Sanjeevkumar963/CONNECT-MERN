const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.loginbutton');
const iconClose = document.querySelector('.icon-close');
const welcomeContent = document.getElementById('welcomeContent');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
  welcomeContent.style.display = 'none'; 
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  welcomeContent.style.display = 'block';
});
