// This page will temporarily prrovide js for sign&login.html will be later fused with navbar.
let otp;
let inputOtp;
let inputOtp1;
showCountdownTimer();

function showOtp() {
	otp = 9999 - Math.ceil(Math.random() * 1000);
	alert(`OTP is ${otp}`);
	showCountdownTimer();
}

// let timer = document.getElementById('timer');
// timer.addEventListener('click', function () {
// 	showOtp();
// });

// let timer1 = document.getElementById('timer1');
// timer1.addEventListener('click', function () {
// 	showOtp();
// });

function showCountdownTimer() {
	let time = 10;

	let id = setInterval(function () {
		if (time > 9) {
			document.getElementById('timer').innerHTML = `00:${time}`;
			document.getElementById('timer1').innerHTML = `00:${time}`;
		} else {
			document.getElementById('timer').innerHTML = `00:0${time}`;
			document.getElementById('timer1').innerHTML = `00:0${time}`;
		}
		time--;
		if (time < 0) {
			clearTimeout(id);
			let newOtp = document.createElement('div');
			newOtp.innerText = 'Resend OTP';
			newOtp.addEventListener('click', function () {
				document.getElementById('timer').innerHTML = null;
				document.getElementById('timer').innerHTML = null;
				showOtp();
			});
			document.getElementById('timer').innerText = null;
			document.getElementById('timer').append(newOtp);
			document.getElementById('timer1').innerText = null;
			document.getElementById('timer1').append(newOtp);
		}
	}, 1000);
}

function verifyOtp() {
	inputOtp = document.querySelector('#inputOtp').value;
	inputOtp1 = document.querySelector('#inputOtp1').value;

	if (inputOtp == otp || inputOtp1 == otp) {
		alert('Login Successful');
		return true;
	} else {
		alert('Login Failed');
		return false;
	}
}

// Ressending the otp

let btn = document.querySelector('#pop_up');
let popup2 = document.getElementById('pop_up2');
let popup3 = document.getElementById('pop_up3');

let open_popup = document.getElementById('open_popup');
open_popup.addEventListener('click', function () {
	openPopup();
});

let close_popup1 = document.getElementById('close_popup1');
close_popup1.addEventListener('click', function () {
	closePopup();
});

let close_popup2 = document.getElementById('close_popup3');
close_popup2.addEventListener('click', function () {
	closePopup();
});

let close_popup3 = document.getElementById('close_popup3');
close_popup3.addEventListener('click', function () {
	closePopup();
});

function openPopup() {
	console.log('hello');
	btn.classList.add('open-popup');
}

function closePopup() {
	btn.classList.remove('open-popup');
	popup2.classList.remove('open-popup');
	popup3.classList.remove('open-popup');
}

function newUserPopup(x) {
	btn.classList.remove('open-popup');
	popup2.classList.add('open-popup');
	showOtp();
	let num = document.querySelector('#pop_up2>p span');
	num.innerText = x;
	let name = document.getElementById('newUserName');
	let email = document.getElementById('newUserEmail');

	let checkBtn = document.getElementById('newUserVerify');
	checkBtn.addEventListener('click', function () {
		let validate = verifyOtp();
		if (validate) {
			console.log(x, name.value, email.value);
			newUser(x, name.value, email.value);
			closePopup();
			window.location.href = '';
		} else {
			popup2.classList.remove('open-popup');
			newUserPopup(x);
		}
	});
}
function existingUser(x) {
	btn.classList.remove('open-popup');
	popup3.classList.add('open-popup');
	showOtp();
	let num = document.querySelector('#pop_up3>p span');
	num.innerText = x;
	let otpVerify = document.getElementById('otpVerify');
	otpVerify.addEventListener('click', function () {
		let validate = verifyOtp();
		if (validate) {
			console.log(x);
			// newUser(x, name.value, email.value);
			let user = usersArr.filter((el, i) => {
				return el.number === x;
			});
			// console.log(user);
			localStorage.setItem('loginData', JSON.stringify(user[0]));

			user = [];
			closePopup();
			window.location.href = '';
		} else {
			popup2.classList.remove('open-popup');
			existingUser(x);
		}
	});
}

let usersArr = JSON.parse(localStorage.getItem('userData')) || [];

let loginUser = JSON.parse(localStorage.getItem('loginData')) || [];

let newUserSubmit = document.getElementById('newUserSubmit');

newUserSubmit.addEventListener('click', newUserRegister);

function newUserRegister() {
	let countryCode = document.getElementById('countryCode').value;
	let newUserMobile = document.getElementById('newUserMobile').value;
	let newNumber = `${countryCode}${newUserMobile}`;

	// console.log('hello', newNumber);
	let flag = false;
	if (usersArr.length === 0) {
		// console.log('hello', newNumber);
		flag = false;
		// newUserPopup(newNumber);
	} else {
		usersArr.forEach((el) => {
			if (el.number === newNumber) {
				flag = true;
				return flag;
			}
		});
	}
	if (flag) {
		existingUser(newNumber);
	} else {
		newUserPopup(newNumber);
	}
}

function newUser(number, name, email) {
	let newObj = {
		number,
		name,
		email,
	};

	usersArr.push(newObj);
	loginUser.push(newObj);
	localStorage.setItem('userData', JSON.stringify(usersArr));
	localStorage.setItem('loginData', JSON.stringify(newObj));
}

let back_popup = document.getElementById('back_popup');
back_popup.addEventListener('click', function () {
	backPopup();
});

function backPopup() {
	popup3.classList.remove('open-popup');
	btn.classListadd('open-popup');
}

// This page will provide js for otp.html
let userProfile = document.querySelector('#userProfile>div');
if (loginUser.length === 0) {
	// userProfile.innerHTML = `<span class="material-symbols-rounded" onclick="openPopup()">
	//                         person_filled
	//                         </span>`;
} else {
	userProfile.innerHTML = null;
	let dropBox = document.createElement('div');
	let userName = document.createElement('p');
	let userPic = `<span class="material-symbols-rounded" onclick="openPopup()">
                    person_filled
                    </span>`;
	console.log(loginUser);
	userName.innerHTML =
		loginUser.name + ' ' + `<i class="fa-solid fa-caret-down"></i>`;

	dropBox.append();
	userProfile.append(userName);
	let profile = document.querySelector('#userProfile');
	profile.addEventListener('click', function () {
		profile.classList.toggle('active');
	});
}
let log_out = document.getElementById('log_out');
log_out.addEventListener('click', function () {
	logout();
});

function logout() {
	localStorage.removeItem('loginData');
	window.location.href = './index.html';
}
