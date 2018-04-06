const landingZones = [
	'Anarchy Acres', 
	'Pleasant Park', 
	'Tilted Towers', 
	'Retail Row', 
	'Dusty Depot', 
	'Fatal Fields', 
	'Flush Factory', 
	'Lucky Landing', 
	'Greasy Grove', 
	'Haunted Hills', 
	'Junk Junction', 
	'Lonely Lodge', 
	'Loot Lake', 
	'Moisty Mire', 
	'Salty Springs', 
	'Shifty Shafts', 
	'Snobby Shores', 
	'Tomato Town', 
	'Wailing Woods',
	'Metal Town'
];
const button = document.querySelector('button');
const result = document.querySelector('p.display');

function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

button.addEventListener('click', () => {
    let n = randomNumber(landingZones.length);
    result.innerHTML = landingZones[n];
    console.log(landingZones[n]);
})


