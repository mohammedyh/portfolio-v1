import { Expo, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const analytics = document.createElement('script');
analytics.setAttribute('defer', '');

if (window.location.host === 'mohammedcodes.dev') {
	analytics.setAttribute('src', 'https://mohammedcodes.dev/_vercel/insights/script.js');
	document.head.append(analytics);
} else if (window.location.host === 'www.myhdigital.co.uk') {
	analytics.setAttribute('src', 'https://myhdigital.co.uk/_vercel/insights/script.js');
	document.head.append(analytics);
}


gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ defaults: { ease: Expo.easeOut } });
tl.from('.main__container', { scale: 0.6, duration: 2, opacity: 0 })
	.from('.logo-container', { duration: 0.8, y: -40, opacity: 0 }, '-=1.4')
	.from('.nav__container ul li', { duration: 0.5, y: -40, opacity: 0, stagger: 0.15 }, '-=1')
	.from(
		'.hero__title',
		{
			duration: 1.5,
			y: -25,
			opacity: 0,
		},
		'-=0.5'
	)
	.from(
		'.hero__subtitle',
		{
			duration: 1.4,
			y: -25,
			opacity: 0,
		},
		'-=1.2'
	)
	.from('.hero__links-container i', { duration: 0.5, y: -20, opacity: 0, stagger: 0.15 }, '-=1');

const projects = document.querySelectorAll('article.wrapper');
projects.forEach(project => {
	gsap.from(project, {
		scrollTrigger: {
			trigger: project,
			start: 'top center',
		},
		duration: 1,
		y: 40,
		opacity: 0,
	});
});

const tl2 = gsap.timeline({
	scrollTrigger: {
		trigger: '#about',
		start: 'center center',
	},
});

tl2
	.from('.about .section__title', { duration: 0.75, y: -40, opacity: 0 })
	.from('.about .section__subtitle', { duration: 0.75, y: -40, opacity: 0 }, '-=0.5')
	.from('.skills__row li', { duration: 0.3, y: -40, opacity: 0, stagger: 0.1 }, '-=0.4');

const tl3 = gsap.timeline({
	scrollTrigger: {
		trigger: '#contact',
	},
});

tl3
	.from('.contact .section__title', { duration: 0.75, y: -40, opacity: 0 })
	.from('.contact .section__subtitle', { duration: 0.75, y: -40, opacity: 0 }, '-=0.5')
	.from('.contact__btn', { y: -40, opacity: 0 }, '-=0.5');
