'use strict';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const button = document.querySelector('.the-button');
const divs = document.querySelectorAll('.background-div');
const title = document.querySelector('.h1');
const subTitle = document.querySelector('.h3');
const footeerP = document.querySelector('.footer-p');

button.addEventListener('click', function (e) {
  console.log(e.target);

  e.preventDefault();

  const randomColor = `rgb(${Math.trunc(Math.random() * 255)}, ${Math.trunc(
    Math.random() * 255
  )},${Math.trunc(Math.random() * 255)})`;

  divs.forEach(div => {
    div.style.backgroundColor = `rgb(${Math.trunc(
      Math.random() * 255
    )}, ${Math.trunc(Math.random() * 255)},${Math.trunc(Math.random() * 255)})`;
  });

  button.style.backgroundColor = `rgb(${Math.trunc(
    Math.random() * 255
  )}, ${Math.trunc(Math.random() * 255)},${Math.trunc(Math.random() * 255)})`;

  [title, subTitle, footeerP].forEach(function (element) {
    element.style.color = `rgb(${Math.trunc(Math.random() * 255)}, ${Math.trunc(
      Math.random() * 255
    )},${Math.trunc(Math.random() * 255)})`;
  });

  main.style.backgroundColor = `rgb(${Math.trunc(
    Math.random() * 255
  )}, ${Math.trunc(Math.random() * 255)},${Math.trunc(Math.random() * 255)})`;
});
