import { gsap } from '../node_modules/gsap/index.js';

const tl = gsap.timeline();

const group1 = document.getElementById('group1'),
	group2 = document.getElementById('group2'),
	group3 = document.getElementById('group3'),
	group4 = document.getElementById('group4');

const team1 = document.getElementById('team1'),
	team2 = document.getElementById('team2'),
	team3 = document.getElementById('team3'),
	team4 = document.getElementById('team4'),
	team5 = document.getElementById('team5'),
	team6 = document.getElementById('team6'),
	team7 = document.getElementById('team7'),
	team8 = document.getElementById('team8'),
	team9 = document.getElementById('team9'),
	team10 = document.getElementById('team10'),
	team11 = document.getElementById('team11'),
	team12 = document.getElementById('team12'),
	team13 = document.getElementById('team13'),
	team14 = document.getElementById('team14'),
	team15 = document.getElementById('team15'),
	team16 = document.getElementById('team16'),
	team17 = document.getElementById('team17'),
	team18 = document.getElementById('team18'),
	team19 = document.getElementById('team19'),
	team20 = document.getElementById('team20'),
	team21 = document.getElementById('team21'),
	team22 = document.getElementById('team22'),
	team23 = document.getElementById('team23'),
	team24 = document.getElementById('team24'),
	team25 = document.getElementById('team25'),
	team26 = document.getElementById('team26'),
	team27 = document.getElementById('team27'),
	team28 = document.getElementById('team28'),
	team29 = document.getElementById('team29'),
	team30 = document.getElementById('team30'),
	team31 = document.getElementById('team31'),
	team32 = document.getElementById('team32'),
	team33 = document.getElementById('team33'),
	team34 = document.getElementById('team34'),
	team35 = document.getElementById('team35'),
	team36 = document.getElementById('team36'),
	team37 = document.getElementById('team37'),
	team38 = document.getElementById('team38'),
	team39 = document.getElementById('team39'),
	team40 = document.getElementById('team40'),
	team41 = document.getElementById('team41'),
	team42 = document.getElementById('team42'),
	team43 = document.getElementById('team43'),
	team44 = document.getElementById('team44'),
	team45 = document.getElementById('team45'),
	team46 = document.getElementById('team46'),
	team47 = document.getElementById('team47'),
	team48 = document.getElementById('team48');

const groupname = document.getElementsByClassName('groupname');
const container = document.getElementsByClassName('container'),
	baseEl = document.getElementsByClassName('base'),
	tophalf = document.getElementsByClassName('tophalf'),
	bottomhalf = document.getElementsByClassName('bottomhalf'),
	round1 = document.getElementsByClassName('round1'),
	round2 = document.getElementsByClassName('round2'),
	round3 = document.getElementsByClassName('round3'),
	lower1 = document.getElementsByClassName('lower1'),
	lower2 = document.getElementsByClassName('lower2'),
	lower3 = document.getElementsByClassName('lower3'),
	groups = document.getElementsByClassName('groups'),
	top = document.getElementsByClassName('top'),
	bottom = document.getElementsByClassName('bottom'),
	topW = document.getElementsByClassName('topW'),
	bottomW = document.getElementsByClassName('bottomW');

var testURL =
	// 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';
	'https://docs.google.com/spreadsheets/d/1cuwm6JcQGsAPPnqG16eQp_xCcvYVt0MtSF3uBuYvuLc/edit?usp=sharing';

function onLoad(data, tabletop) {
	// console.log(data);

	group1.innerHTML = 'Group A';
	group2.innerHTML = 'Group B';
	group3.innerHTML = 'Group C';
	group4.innerHTML = 'Group D';

	team1.innerHTML = data[0].GA;
	team2.innerHTML = data[1].GA;
	team3.innerHTML = data[2].GA;
	team4.innerHTML = data[3].GA;
	team5.innerHTML = data[4].GA;
	team6.innerHTML = data[5].GA;
	team7.innerHTML = data[6].GA;
	team8.innerHTML = data[7].GA;
	team9.innerHTML = data[8].GA;
	team10.innerHTML = data[9].GA;
	team11.innerHTML = data[10].GA;
	team12.innerHTML = data[11].GA;

	team13.innerHTML = data[0].GB;
	team14.innerHTML = data[1].GB;
	team15.innerHTML = data[2].GB;
	team16.innerHTML = data[3].GB;
	team17.innerHTML = data[4].GB;
	team18.innerHTML = data[5].GB;
	team19.innerHTML = data[6].GB;
	team20.innerHTML = data[7].GB;
	team21.innerHTML = data[8].GB;
	team22.innerHTML = data[9].GB;
	team23.innerHTML = data[10].GB;
	team24.innerHTML = data[11].GB;

	team25.innerHTML = data[0].GC;
	team26.innerHTML = data[1].GC;
	team27.innerHTML = data[2].GC;
	team28.innerHTML = data[3].GC;
	team29.innerHTML = data[4].GC;
	team30.innerHTML = data[5].GC;
	team31.innerHTML = data[6].GC;
	team32.innerHTML = data[7].GC;
	team33.innerHTML = data[8].GC;
	team34.innerHTML = data[9].GC;
	team35.innerHTML = data[10].GC;
	team36.innerHTML = data[11].GC;

	team37.innerHTML = data[0].GD;
	team38.innerHTML = data[1].GD;
	team39.innerHTML = data[2].GD;
	team40.innerHTML = data[3].GD;
	team41.innerHTML = data[4].GD;
	team42.innerHTML = data[5].GD;
	team43.innerHTML = data[6].GD;
	team44.innerHTML = data[7].GD;
	team45.innerHTML = data[8].GD;
	team46.innerHTML = data[9].GD;
	team47.innerHTML = data[10].GD;
	team48.innerHTML = data[11].GD;
}

var options = {
	key: testURL,
	callback: onLoad,
	simpleSheet: true
};

Tabletop.init(options);

nodecg.listenFor('mlbbgroup1show', () => {
	Tabletop.init(options);

	tl.from([ container ], 1, { width: '50%' });
	tl.to([ container ], 1, { opacity: 1 }, '-=1');

	tl.from([ groupname, baseEl ], 1, { opacity: 0, stagger: { each: 0.2, from: 'random' } });

	// tl.from([ tophalf ], 1, { opacity: 0 });
	// tl.from([ bottomhalf ], 1, { opacity: 0 });

	tl.from([ round1, lower1 ], 0.5, { opacity: 0, stagger: { each: 0.1, from: 'random' } });
	tl.from([ round2, lower2 ], 0.5, { opacity: 0, stagger: { each: 0.2, from: 'random' } });
	tl.from([ round3, lower3 ], 0.5, { opacity: 0 });
});

nodecg.listenFor('mlbbgroup1stop', () => {
	tl.to([ container ], 1, { width: '50%' });
	tl.to([ container ], 1, { opacity: 0 }, '-=1');

	tl.call(() => {});

	tl.set([ groupname, container ], { width: '' });

	Tabletop.init(options);
});
