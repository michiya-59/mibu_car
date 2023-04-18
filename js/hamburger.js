'use strict'

window.addEventListener('load', () => {
  const hamburger = document.getElementById('header-hamburger-menu');
  const mask_menu = document.getElementById('header-mask-menu');
  const mask_top = document.getElementById('header-top');
  const mask_concept = document.getElementById('header-user-car');
  const mask_service = document.getElementById('header-after-maintenance');
  const mask_work = document.getElementById('header-company');
  const mask_contact = document.getElementById('header-contact');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mask_menu.classList.toggle('active');
  });

  mask_menu.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mask_menu.classList.remove('active');
  });

  mask_concept.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mask_menu.classList.remove('active');
  });

  mask_service.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mask_menu.classList.remove('active');
  });

  mask_work.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mask_menu.classList.remove('active');
  });

  mask_contact.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mask_menu.classList.remove('active');
  });
  mask_top.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mask_menu.classList.remove('active');
  });
});