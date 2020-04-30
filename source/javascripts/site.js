//animations
const paragraphs = Array.from(document.querySelectorAll('p'))

scroll_animations()
setP()
window.addEventListener('scroll', function() {
    scroll_animations() 
    
})
function scroll_animations() {
    const y = window.scrollY
	animationP(y)
}
 function animationP(y) {
    paragraphs.forEach((el) => {
      if (verge.inY(el) && !el.animated) {
        el.animated = true
        gsap.to(el,{
          y:0,
          opacity: 1,
          duration: .7,
          delay: .2
        })
      }
    })
}
 function setP() {
    paragraphs.forEach((el) => {
        gsap.to(el,{
          y:10,
          opacity: 0,
          duration: 0,
        })
    })
}

const imgBack = document.querySelector('.home-back-img')
const imgFront = document.querySelector('.home-front-img')

setPage()
animation()
animation2()
function animation(){
	gsap.to(imgBack,{
		x:0,
		duration: 5
	})
}
function animation2(){
	gsap.to(imgFront,{
		x:0,
		duration: 5
	})
}

function setPage(){
	gsap.to(imgBack,{
		x:150,
		duration: 0
	})
	gsap.to(imgFront,{
		x:-150,
		duration: 0
	})
}




