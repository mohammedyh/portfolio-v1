import { gsap, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ defaults: { ease: Expo.easeOut } });
tl.from('.main__container', { scale: 0.6, duration: 2, opacity: 0 })
	.from('.logo-container', { duration: 1, y: -40, opacity: 0 }, '-=1.4')
	.from('.nav__container ul li', { duration: 0.5, y: -40, opacity: 0, stagger: 0.2 }, '-=1')
	.from(
		'.hero__title',
		{
			duration: 1.75,
			y: -40,
			opacity: 0,
		},
		'-=0.5'
	)
	.from(
		'.hero__subtitle',
		{
			duration: 1.4,
			y: -40,
			opacity: 0,
		},
		'-=1.3'
	)
	.from('.hero__links-container i', { duration: 0.5, y: -20, opacity: 0, stagger: 0.15 }, '-=0.9');

const tl2 = gsap.timeline({
	scrollTrigger: {
		trigger: '#work',
		start: 'top center',
	},
});

tl2.from('article.wrapper', { duration: 1, x: 200, opacity: 0, stagger: 0.4 });

const tl3 = gsap.timeline({
	scrollTrigger: {
		trigger: '#about',
		start: 'center center',
	},
});

tl3
	.from('.about .section__title', { duration: 0.75, y: -40, opacity: 0 })
	.from('.about .section__subtitle', { duration: 0.75, y: -40, opacity: 0 }, '-=0.5')
	.from('.skills__row li', { duration: 0.3, y: -40, opacity: 0, stagger: 0.1 }, '-=0.4');

const tl4 = gsap.timeline({
	scrollTrigger: {
		trigger: '#contact',
		start: 'center center',
	},
});

tl4
	.from('.contact .section__title', { duration: 0.75, y: -40, opacity: 0 })
	.from('.contact .section__subtitle', { duration: 0.75, y: -40, opacity: 0 }, '-=0.5')
	.from('.contact__btn', { y: -40, opacity: 0 }, '-=0.5');
