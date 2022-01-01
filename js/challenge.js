let counter = parseInt(document.querySelector('#counter').textContent);
let isPaused = false;
const pausebtn = document.querySelector('#pause');
const minusbtn = document.querySelector('#minus');
const plusbtn = document.querySelector('#plus');
const subbtn = document.querySelector('#submit');
const heartbtn = document.querySelector('#heart');
const commentbtn = document.querySelector('#submit');

// timer increment
let thetimer = setInterval(thecounter, 1000);

// the pause/continue button is pressed
pausebtn.addEventListener('click', PCbutton);

// minus button is pressed
minusbtn.addEventListener('click', minus);

// plus button is pressed
plusbtn.addEventListener('click', plus);

// heart button is pressed
heartbtn.addEventListener('click', heart);

// comment button is pressed
commentbtn.addEventListener('click', comment);

// counter function
function thecounter() {
	counter++;
	return document.querySelector('#counter').textContent = counter.toString();
}

// Pause/continue button function
function PCbutton(e) {
	e.preventDefault();
	if (!isPaused) { // button shows (pause)
		clearInterval(thetimer);
		isPaused = true;
		pausebtn.textContent = 'continue';
		minusbtn.disabled = true;
		plusbtn.disabled = true;
		subbtn.disabled = true;
		heartbtn.disabled = true;
	}
	else { // button shows (continue)
		thetimer = setInterval(thecounter, 1000);
		isPaused = false;
		pausebtn.textContent = 'pause';
		minusbtn.disabled = false;
		plusbtn.disabled = false;
		subbtn.disabled = false;
		heartbtn.disabled = false;
	}
}

// minus button function
function minus(e) {
	e.preventDefault();
	counter--;
	return document.querySelector('#counter').textContent = counter.toString();
}

// plus button function
function plus(e) {
	e.preventDefault();
	counter++;
	return document.querySelector('#counter').textContent = counter.toString();
}

// heart button function
function heart(e) {
	e.preventDefault();
	
	if (document.getElementById(`${counter}`)) {
		const likes = document.getElementById(`${counter}`);
		const likescopy = likes.textContent.split(' ');
		likescopy[4] = (parseInt(likescopy[4]) + 1).toString();
		likescopy[5] = 'times';
		likes.textContent = likescopy.join(' ');
	}
	else {
		const likes = document.createElement('li');
		likes.setAttribute('id', `${counter}`)
		likes.textContent = `${counter} has been liked 1 time`;
		document.querySelector('.likes').appendChild(likes);
	}
}

// comment function
function comment(e) {
	e.preventDefault();
	const inputcomment = document.querySelector('#comment-input');
	const newcomment = document.createElement('p');
	newcomment.textContent = inputcomment.value;
	document.querySelector('.comments').appendChild(newcomment);
	document.querySelector('#comment-form').reset();
}