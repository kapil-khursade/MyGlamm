// This page will include all the js for function mentioned on the profile.js , exportable side bar.

// import sidebar from "./sidebar";

//
let popup = document.getElementById('popup');
function openpopup() {
	popup.classList.add('openpopup');
}
function closepopup() {
	popup.classList.remove('openpopup');
}

// let dat= JSON.parse(localStorage.getItem("addressData"))||[]

let dat = JSON.parse(localStorage.getItem('addressData')) || [];
let save = () => {
	let obj = {
		name: document.getElementById('name').value,
		number: document.getElementById('number').value,
		email: document.getElementById('email').value,

		addresst: document.getElementById('address-type').value,
		flat: document.getElementById('flat').value,
		street: document.getElementById('street').value,

		neighbour: document.getElementById('neighbour').value,
		pincode: document.getElementById('pincode').value,
		city: document.getElementById('city').value,

		state: document.getElementById('state').value,
		landmark: document.getElementById('landmark').value,
	};
	dat.push(obj);
	localStorage.setItem('addressData', JSON.stringify(dat));
	window.location.reload();
};

let localdata = JSON.parse(localStorage.getItem('addressData'));
var addressappend = (data) => {
	let container = document.getElementById('mainaddr');
	//  container.innerHTML=null
	data.forEach((ele) => {
		let maindiv = document.createElement('div');
		maindiv.setAttribute('class', 'address');

		let homediv = document.createElement('div');
		homediv.setAttribute('class', 'home');
		homediv.innerText = ele.addresst;

		let pname = document.createElement('p');
		pname.setAttribute('class', 'namechn');
		pname.innerText = ele.name;

		let subadddiv = document.createElement('div');
		subadddiv.setAttribute('id', 'add');
		subadddiv.setAttribute('class', 'add');
		let pmain = document.createElement('p');
		pmain.style.lineHeight = '30px';

		let sp1 = document.createElement('span');
		sp1.innerText = ele.flat + ', ';
		sp1.setAttribute('class', 'spanc');
		let sp2 = document.createElement('span');
		sp2.innerText = ele.street + ',';
		sp2.setAttribute('class', 'spanc');
		let sp3 = document.createElement('span');
		sp3.innerText = ele.neighbour;
		sp3.setAttribute('class', 'spanc');
		let sp4 = document.createElement('span');
		sp4.innerText = ele.landmark + ', ';
		sp4.setAttribute('class', 'spanc');
		let sp5 = document.createElement('span');
		sp5.innerText = ele.city + ', ';
		sp5.setAttribute('class', 'spanc');
		let sp6 = document.createElement('span');
		sp6.innerText = ele.state + ', ';
		sp6.setAttribute('class', 'spanc');
		let sp7 = document.createElement('span');
		sp7.innerText = 'Pincode:-' + ele.pincode + '.';
		sp7.setAttribute('class', 'spanc');
		pmain.append(sp1, sp2, sp3, sp4, sp5, sp6, sp7);
		subadddiv.append(pmain);

		let pmobile = document.createElement('p');
		pmobile.setAttribute('id', 'p2');
		let span1 = document.createElement('span');
		span1.setAttribute('class', 's2');

		span1.setAttribute('class', 'spanc');
		span1.innerText = ele.number;
		let span2 = document.createElement('span');
		span2.innerText = ' | ';
		span2.setAttribute('class', 'spanc');
		let span3 = document.createElement('span');
		span3.setAttribute('class', 's2');

		span3.setAttribute('class', 'spanc');
		span3.innerText = ele.email;
		let butn = document.createElement('button');
		butn.innerText = 'Edit Address';
		butn.setAttribute('class', 'bt');
		pmobile.append(span1, span2, span3);

		console.log(ele);

		maindiv.append(homediv, pname, subadddiv, pmobile, butn);
		container.append(maindiv);
	});
};
addressappend(localdata);
let loginData = JSON.parse(localStorage.getItem('loginData'));
let namechn = (document.getElementById('namer').innerText = loginData.name);
let mobchn = (document.getElementById('mobchng').innerText = loginData.number);
let emailchn = (document.getElementById('emailchng').innerText =
	loginData.email);
