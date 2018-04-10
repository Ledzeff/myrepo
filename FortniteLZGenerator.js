window.onload = createCheckboxList(checkedLandingZones);

const landingZones = document.querySelectorAll('input.list');
const generateBtn = document.querySelector('button.generate');
const result = document.querySelector('p.display');
const checkboxBtn = document.querySelector('button.list');

function createCheckboxList(list) {
	for ( let i = 0; i < list.length; i++ ) {
		let li = document.createElement('li');
		let input = document.createElement('input');
		let ul = document.querySelector('ul.list');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('value', list[i]);
		input.setAttribute('checked', " ");
		input.classList.add('list');
		li.innerHTML = list[i];
		li.appendChild(input);
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

generateBtn.addEventListener('click', () => {
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
	if (checkedLandingZones.length === 0) {
		alert('You must check at least 1 box.');
	} else {
		let n = randomNumber(checkedLandingZones.length);
    	result.innerHTML = checkedLandingZones[n];
    	console.log(checkedLandingZones[n]);
	}
    generateBtn.style.backgroundColor = randomColor();
})

for ( let i = 0; i < landingZones.length; i++ ) {
	landingZones[i].addEventListener('click', () => {
		let count = 0
		for ( let i =0; i < landingZones.length; i++ ) {
			if (landingZones[i].checked === true) {
				count += 1;
			} 
		}
		if (count === 0) {
			checkboxBtn.innerHTML = 'Check All Boxes';
		} else {
			checkboxBtn.innerHTML = 'Uncheck All Boxes';
		}
	})
}

checkboxBtn.addEventListener('click', () => {
	if (checkboxBtn.innerHTML === 'Uncheck All Boxes') {
		for (let i = 0; i < landingZones.length; i++) {
			landingZones[i].checked = false
			checkboxBtn.innerHTML = 'Check All Boxes';
		} 
	} else {
		for (let i = 0; i < landingZones.length; i++) {
		landingZones[i].checked = true
		checkboxBtn.innerHTML = 'Uncheck All Boxes';
		}
	}	
})

console.log(landingZones.length);



