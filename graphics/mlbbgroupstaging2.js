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

	group1.innerHTML = 'Group E';
	group2.innerHTML = 'Group F';
	group3.innerHTML = 'Group G';
	group4.innerHTML = 'Group H';

	team1.innerHTML = data[0].GE;
	team2.innerHTML = data[1].GE;
	team3.innerHTML = data[2].GE;
	team4.innerHTML = data[3].GE;
	team5.innerHTML = data[4].GE;
	team6.innerHTML = data[5].GE;
	team7.innerHTML = data[6].GE;
	team8.innerHTML = data[7].GE;
	team9.innerHTML = data[8].GE;
	team10.innerHTML = data[9].GE;
	team11.innerHTML = data[10].GE;
	team12.innerHTML = data[11].GE;

	team13.innerHTML = data[0].GF;
	team14.innerHTML = data[1].GF;
	team15.innerHTML = data[2].GF;
	team16.innerHTML = data[3].GF;
	team17.innerHTML = data[4].GF;
	team18.innerHTML = data[5].GF;
	team19.innerHTML = data[6].GF;
	team20.innerHTML = data[7].GF;
	team21.innerHTML = data[8].GF;
	team22.innerHTML = data[9].GF;
	team23.innerHTML = data[10].GF;
	team24.innerHTML = data[11].GF;

	team25.innerHTML = data[0].GG;
	team26.innerHTML = data[1].GG;
	team27.innerHTML = data[2].GG;
	team28.innerHTML = data[3].GG;
	team29.innerHTML = data[4].GG;
	team30.innerHTML = data[5].GG;
	team31.innerHTML = data[6].GG;
	team32.innerHTML = data[7].GG;
	team33.innerHTML = data[8].GG;
	team34.innerHTML = data[9].GG;
	team35.innerHTML = data[10].GG;
	team36.innerHTML = data[11].GG;

	team37.innerHTML = data[0].GH;
	team38.innerHTML = data[1].GH;
	team39.innerHTML = data[2].GH;
	team40.innerHTML = data[3].GH;
	team41.innerHTML = data[4].GH;
	team42.innerHTML = data[5].GH;
	team43.innerHTML = data[6].GH;
	team44.innerHTML = data[7].GH;
	team45.innerHTML = data[8].GH;
	team46.innerHTML = data[9].GH;
	team47.innerHTML = data[10].GH;
	team48.innerHTML = data[11].GH;
}

var options = {
	key: testURL,
	callback: onLoad,
	simpleSheet: true
};

Tabletop.init(options);

nodecg.listenFor('mlbbgroup2show', () => {
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

nodecg.listenFor('mlbbgroup2stop', () => {
	tl.to([ container ], 1, { width: '50%' });
	tl.to([ container ], 1, { opacity: 0 }, '-=1');

	tl.call(() => {});

	tl.set([ groupname, container ], { width: '' });
});
