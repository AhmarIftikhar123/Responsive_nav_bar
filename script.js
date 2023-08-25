let manue = document.querySelector('.manu');
let ul = document.querySelector('ul');

let img_location = document.querySelector('.manu li img')
let close_img = 'intro-section-with-dropdown-navigation-main/images/icon-close-menu.svg';
let open_img ='intro-section-with-dropdown-navigation-main/images/icon-menu.svg'

manue.addEventListener('click',()=>{
    ul.classList.toggle('show_nav');

    if(ul.classList.contains('show_nav')){
        img_location.setAttribute('src',close_img);
    }else{
        img_location.setAttribute('src',open_img);

    }

});