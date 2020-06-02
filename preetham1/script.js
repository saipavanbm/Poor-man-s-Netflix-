const image = document.getElementById("image");
const sad = document.querySelector('#sad');
const happy = document.querySelector('#happy');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const music = document.querySelector('#music');
const preorder = document.querySelector('.preorder')
const mediasp = matchMedia('(max-width: 400px)')
const mediamp = matchMedia('(max-width: 575px)')
const medialp = matchMedia('(min-height: 740px)')
const mediamidlap = matchMedia('(min-height: 786px) and (max-height: 1099px)')
const medialarglap = matchMedia('(min-height: 1100px) and (max-height: 1555px)')
var scrollAmount
if (mediasp.matches == true) {
		scrollAmount = 50;
}
else if (mediamp.matches == true) {
	  scrollAmount = 180;
}
else{
	  scrollAmount = 50;
}
if (medialp.matches == true & mediamp.matches == true){
	 scrollAmount = 195;
}
if (mediamidlap.matches) {
	 scrollAmount = 160;
}
else if (medialarglap.matches) {
	 scrollAmount = 320;
}

window.addEventListener("scroll",(event) => {
	const { top } = image.getBoundingClientRect();
	if (top < scrollAmount) {
		sad.style.opacity = 0;
		happy.style.opacity = 1;
		h1.style.color= "#ff0000";
		h1.style.opacity= 1;
		music.style.color= "white";
		body.setAttribute("style","animation: animate 1000ms ease-in-out;")
		body.style.backgroundColor= "black";
		preorder.setAttribute("style","animation: come 1000ms ease-out;")
		if (mediasp.matches == true) {
			happy.style.top = "50%";
		}
		else if (mediamp.matches == true) {
			happy.style.top = "50%";
		}
		else {
			happy.style.top = "30%";
		}
	}else {
		sad.style.opacity = 1;
		happy.style.opacity = 0;
		body.style.backgroundColor= "white";
		body.style.animation= "ease-in-out";
		music.style.animation= "ease-in-out";
		preorder.style.animation= "ease-in-out";
		music.style.color= "white";
		h1.style.opacity= 0;
			// sad.style.top= "40%";
	}
});
