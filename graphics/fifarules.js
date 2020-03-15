import { gsap } from '../node_modules/gsap/index.js';

const tl = gsap.timeline();

const container = document.getElementsByClassName('container');

nodecg.listenFor('rulefifaplay', () => {
	tl.from([ container ], { duration: 1, width: '30%', ease: 'back.out(1.7)' });
	tl.to([ container ], 1, { opacity: 1 }, '-=1');
});

nodecg.listenFor('rulefifastop', () => {
	tl.to([ container ], { duration: 1, width: '30%', ease: 'back.in(1.7)' });
	tl.to([ container ], 1, { opacity: 0 }, '-=1');

	tl.call(() => {});

	tl.set([ container ], { width: '' });
});
