import { gsap } from '../node_modules/gsap/index.js';

const tl = gsap.timeline();

const container = document.getElementsByClassName('container');

nodecg.listenFor('pubgruleplay', () => {
	tl.from([ container ], { duration: 1, width: '50%', ease: 'back.out(1.7)' });
	tl.to([ container ], 1, { opacity: 1 }, '-=1');
});

nodecg.listenFor('pubgrulestop', () => {
	tl.to([ container ], { duration: 1, width: '50%', ease: 'back.in(1.7)' });
	tl.to([ container ], 1, { opacity: 0 }, '-=1');

	tl.call(() => {});

	tl.set([ container ], { width: '' });
});
