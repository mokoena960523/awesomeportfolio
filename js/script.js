let menu = document.querySelector('#menu-btn');
let header = document.querySelector('header');

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	header.classList.toggle('active');
}

window.onscroll = () => {
	menu.classList.remove('fa-times');
	header.classList.remove('active');
}


var typed = new Typed('.typing-text', {
	strings : ['full-stack web developer', 'mobile app developer', 'graphic designer'],
	loop: true,
	typeSpeed : 100
})

VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max:25
});