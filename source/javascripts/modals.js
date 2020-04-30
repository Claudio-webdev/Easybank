//modals
const articles = Array.from(document.querySelectorAll('.js-blog-article-card'));
const modales = Array.from(document.querySelectorAll('.js-modal'));
const page = document.querySelector('.js-page');
const quitModal = Array.from(document.querySelectorAll('.js-quit-modal'));
var index = 0;

articles.forEach((el,i)=>{
	el.addEventListener('click',()=>{
		var index = i
		page.classList.add('blur')
		modales[index].classList.remove('hide')
			quitModal[index].addEventListener('click',()=>{
				modales[index].classList.add('hide')
				page.classList.remove('blur')

			})
	})
})

const menuMobile = document.querySelector('.js-menu-modal');
const menuOpen = document.querySelector('#mobile-menu-open');
const menuClose = document.querySelector('#mobile-menu-close');
const filter = document.querySelector('.filter');


menuClose.addEventListener('click', ()=>{
	menuClose.classList.toggle('hide')
	menuOpen.classList.toggle('hide')
	menuMobile.classList.toggle('hide')
	filter.classList.toggle('hide')
})
menuOpen.addEventListener('click', ()=>{
	menuClose.classList.toggle('hide')
	menuOpen.classList.toggle('hide')
	menuMobile.classList.toggle('hide')
	filter.classList.toggle('hide')
})
