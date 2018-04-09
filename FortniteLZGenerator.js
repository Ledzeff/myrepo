window.onload = createCheckboxList(checkedLandingZones);

const uncheckedLandingZones = []; // I realize this isn't necessary in the code, but its practice and could be used in the future
const landingZones = document.querySelectorAll('input.list');
const button = document.querySelector('button');
const result = document.querySelector('p.display');

function createCheckboxList(list) {
	for ( let i = 0; i < list.length; i++ ) {
		let li = document.createElement('li');
		let listItem = document.createElement('input');
		let ul = document.querySelector('ul.list');
		listItem.setAttribute('type', 'checkbox');
		listItem.setAttribute('value', list[i]);
		listItem.setAttribute('checked', " ");
		listItem.classList.add('list');
		li.innerHTML = list[i];
		li.appendChild(listItem);
		ul.appendChild(li);

	}
}

function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomColor() {
    let color = "#";
	for(let i = 0; i < 6; i++){
	      color += Math.floor((Math.random() * 16)).toString(16);
	}
	return color;
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
    button.style.backgroundColor = randomColor();
    console.log(checkedLandingZones[n]);
})

console.log(landingZones.length);



