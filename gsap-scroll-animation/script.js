const cards = document.querySelectorAll('.img')

let timeline = new gsap.timeline({
	scrollTrigger: {
		trigger: '.work',
		start: 'top bottom',
		end: '+=700',
		scrub: 1,
	},
})
