// Mobile
const menuIcon = document.querySelector('.site-header__menu-icon');
const menuContent = document.querySelector('.site-header__menu-content');
const siteHeader = document.querySelector('.site-header');

// sticky header
window.addEventListener('scroll', () => {
   if(window.scrollY > 60){
       siteHeader.classList.add('site-header--dark');
   }else{
       siteHeader.classList.remove('site-header--dark');
   }
});


// click the icon
menuIcon.addEventListener('click', () => {
    menuContent.classList.toggle("site-header__menu-content--is-visible")
    siteHeader.classList.toggle("site-header--is-expanded")
    menuIcon.classList.toggle("site-header__menu-icon--close-x")
  });


