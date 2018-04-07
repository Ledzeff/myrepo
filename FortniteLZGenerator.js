const checkedLandingZones = [
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
const uncheckedLandingZones = []; // I realize this isn't necessary in the code, but its practice and could be used in the future
const landingZones = document.querySelectorAll('input.list');
const button = document.querySelector('button');
const result = document.querySelector('p.display');

function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

button.addEventListener('click', () => {
	for ( let i = 0; i < landingZones.length; i++) {
		let listItem = landingZones[i]
		if (listItem.checked === true) {
			if (checkedLandingZones.indexOf(listItem.value) < 0) {
				checkedLandingZones.push(listItem.value);
				uncheckedLandingZones.splice(uncheckedLandingZones.indexOf(listItem.value), 1);
			} // if listItem is present in checkedLandingZones nothing needs to be done  
		} else {
			if (uncheckedLandingZones.indexOf(listItem.value) < 0) {
				uncheckedLandingZones.push(listItem.value);
				checkedLandingZones.splice(checkedLandingZones.indexOf(listItem.value), 1);
			} //if listItem is present in uncheckedLandingZones nothing needs to be done
		}
	}
    let n = randomNumber(checkedLandingZones.length);
    result.innerHTML = checkedLandingZones[n];
    console.log(checkedLandingZones[n]);
})

console.log(landingZones.length);
