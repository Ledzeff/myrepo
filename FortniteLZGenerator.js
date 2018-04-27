const formList = document.querySelector('form.list');
window.onload = createCheckboxList(checkedLandingZones);

const landingZones = [].slice.call(document.querySelectorAll('input.list'));
const generateBtn = document.querySelector('button.generate');
const result = document.querySelector('#display');
const checkboxBtn = document.querySelector('button.list');

function createCheckboxList(list) {
	list.forEach(item => {
		const checkbox = document.createElement('input');
		const label = document.createElement('label');
		const br = document.createElement('br');
		checkbox.type = 'checkbox';
		checkbox.value = item;
		checkbox.checked = " ";
		checkbox.id = item;
		checkbox.className = 'list';
		label.textContent = item;
		label.htmlFor = item;
		formList.appendChild(checkbox);
		formList.appendChild(label);
		formList.appendChild(br);
	});
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
	let checkedLandingZones = [].slice.call(document.querySelectorAll('input[type=checkbox]:checked'));
	if (checkedLandingZones.length === 0) {
		alert('You must check at least 1 box.');
	} else {
		let n = randomNumber(checkedLandingZones.length);
		result.innerHTML = checkedLandingZones[n].value;
	}
	generateBtn.style.backgroundColor = randomColor();
});

formList.addEventListener('click', () => {
	let count = 0;
	landingZones.forEach(checkbox => {
		if (checkbox.checked === true) {
			count += 1;
		} 
	});
	if (count === 0) {
		checkboxBtn.innerHTML = 'Check All Boxes';
	} else {
		checkboxBtn.innerHTML = 'Uncheck All Boxes';
	}
});

checkboxBtn.addEventListener('click', () => {
	if (checkboxBtn.innerHTML === 'Uncheck All Boxes') {
		landingZones.forEach(landingZone => {
			landingZone.checked = false;
			checkboxBtn.innerHTML = 'Check All Boxes';
		});
	} else {
		landingZones.forEach(landingZone => {
			landingZone.checked = true;
			checkboxBtn.innerHTML = 'Uncheck All Boxes';
		});
	}	
});


















