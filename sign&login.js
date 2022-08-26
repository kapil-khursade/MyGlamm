// This page will temporarily prrovide js for sign&login.html will be later fused with navbar.
let btn = document.querySelector('.popUp');
function openPopup() {
	btn.classList.add('open-popup');
}
let emailArr = [];
// function closePopup() {
// 	let data = document.querySelector('#email');
// 	emailArr.push(data.value);
// 	localStorage.setItem('Emails', JSON.stringify(emailArr));
// 	btn.classList.remove('open-popup');
// }

function backPopup() {
	btn.classList.remove('open-popup');
}

let usersArr = JSON.parse(localStorage.getItem('userLoginData')) || [];
// let newArr = [];

let form = document.querySelector('#userForm');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	let countryCode = document.getElementById('countryCode').value;
	let newUserMobile = document.getElementById('newUserMobile').value;
	let newNumber = `${countryCode}${newUserMobile}`;

	console.log('hello', newNumber);
	newUser(newNumber);
	if (usersArr === []) {
		console.log('hello');
		newUser(newNumber);
	} else {
		usersArr.forEach((x) => {
			if (x.number === newNumber) {
				console.log('User Exists');
			} else {
				newUser(newNumber);
			}
		});
	}
});

function newUser(x) {
	let popup = document.querySelector('#pop_up');
	popup.innerHTML = null;
	let box1 = document.createElement('div');
	let popHeadText = document.createElement('p');
	popHeadText.innerText =
		'VERIFY YOUR MOBILE NUMBER TO COMPLETE YOUR REGISTRATION';
	let closePopup = document.createElement('span');
	closePopup.innerHTML = `<i class="fa-solid fa-x"></i>`;

	box1.append(popHeadText, closePopup);

	let box2 = document.createElement('div');
	let otpmsg = document.createElement('p');
	otpmsg.innerText = `ENTER OTP SENT ON ${x}`;

	box2.append(otpmsg);

	let box3 = document.createElement('div');

	let regForm = document.createElement('form');

	let regformBox1 = document.createElement('div');

	let formBox1 = document.createElement('div');
	let label1 = document.createElement('label');
	label1.textContent = 'NAME';
	let input1 = document.createElement('input');
	input1.placeholder = '*Full Name';
	formBox1.append(label1, input1);

	let formBox2 = document.createElement('div');
	let label2 = document.createElement('label');
	label2.textContent = 'EMAIL';
	let input2 = document.createElement('input');
	input2.placeholder = '*Email Address';
	formBox2.append(label2, input2);

	regformBox1.append(formBox1, formBox2);

	let regfromBox2 = document.createElement('div');
	let submitInput = document.createElement('input');
	submitInput.type = 'submit';
	submitInput.value = 'VERIFY';

	regfromBox2.append(submitInput);

	regForm.append(regformBox1, regfromBox2);
	regForm.addEventListener('submit', () => {
		newObj = {
			number: x,
			name: input1.value,
			email: input2.value,
		};

		usersArr.push(newObj);
		localStorage.setItem('userLoginData', JSON.stringify(usersArr));
	});

	popup.append(box1, box2, box3, regForm);
}
