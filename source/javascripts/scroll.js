//scroll
const menuList = Array.from(document.querySelectorAll('.js-menu'));
const sections = Array.from(document.querySelectorAll('.js-section'));

if (menuList){
	menuList.forEach((el,i)=>{
		el.addEventListener('click',()=>{
			sections[i].scrollIntoView({
	        	behavior: 'smooth'
			})
		})
	})
}