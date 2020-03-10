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
	'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';

function onLoad(data, tabletop) {
	console.log(data);

	group1.innerHTML = 'Group A';
	group2.innerHTML = 'Group B';
	group3.innerHTML = 'Group C';
	group4.innerHTML = 'Group D';

	team1.innerHTML = data[0].Name;
	team2.innerHTML = 'Team 2';
	team3.innerHTML = 'Team 3';
	team4.innerHTML = 'team 4';
	team5.innerHTML = 'TBD';
	team6.innerHTML = 'TBD';
	team7.innerHTML = 'TBD';
	team8.innerHTML = 'TBD';
	team9.innerHTML = 'TBD';
	team10.innerHTML = 'TBD';
	team11.innerHTML = 'TBD';
	team12.innerHTML = 'TBD';

	team13.innerHTML = 'team 5';
	team14.innerHTML = 'team 6';
	team15.innerHTML = 'team 7';
	team16.innerHTML = 'team 8';
	team17.innerHTML = 'tbd';
	team18.innerHTML = 'tbd';
	team19.innerHTML = 'tbd';
	team20.innerHTML = 'tbd';
	team21.innerHTML = 'tbd';
	team22.innerHTML = 'tbd';
	team23.innerHTML = 'tbd';
	team24.innerHTML = 'tbd';

	team25.innerHTML = 'team 9';
	team26.innerHTML = 'team 10';
	team27.innerHTML = 'team 11';
	team28.innerHTML = 'team 12';
	team29.innerHTML = 'tbd';
	team30.innerHTML = 'tbd';
	team31.innerHTML = 'tbd';
	team32.innerHTML = 'tbd';
	team33.innerHTML = 'tbd';
	team34.innerHTML = 'tbd';
	team35.innerHTML = 'tbd';
	team36.innerHTML = 'tbd';

	team37.innerHTML = 'team 13';
	team38.innerHTML = 'team 14';
	team39.innerHTML = 'team 15';
	team40.innerHTML = 'team 16';
	team41.innerHTML = 'tbd';
	team42.innerHTML = 'tbd';
	team43.innerHTML = 'tbd';
	team44.innerHTML = 'tbd';
	team45.innerHTML = 'tbd';
	team46.innerHTML = 'tbd';
	team47.innerHTML = 'tbd';
	team48.innerHTML = 'tbd';
}

var options = {
	key: testURL,
	callback: onLoad,
	simpleSheet: true
};

Tabletop.init(options);

nodecg.listenFor('mlbbgroup1show', () => {
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
});
