const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

/*console.log(sliderSection);*/

btnLeft.addEventListener("click", e => BackMove());
btnRight.addEventListener("click", e => NextMove());

setInterval(() => {
NextMove();
},3000);

let operation = 0;
let widthImg = 100 / sliderSection.length;
let counter = 0;

function  NextMove(){
	if (counter >= sliderSection.length - 1){
		counter = 0;
		operation = 0;
		slider.style.transform = `translate(-${operation}%)`;
		slider.style.transition = "none";
		return;
	}
	counter++;
	operation = operation + widthImg;
	slider.style.transform = `translate(-${operation}%)`;
	slider.style.transition = "all ease .6s";

}

function BackMove(){
	counter--;
	if (counter < 0){
    counter = sliderSection.length - 1;
    operation = widthImg * (sliderSection.length - 1);
    slider.style.transform = `translate(-${operation}%)`;
	slider.style.transition = "none";
	return;
	}
	operation = operation - widthImg;
	slider.style.transform = `translate(-${operation}%)`;
	slider.style.transition = "all ease .6s";
	
    
}
