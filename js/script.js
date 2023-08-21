
/*S C R O L L    B A R    P R O G R E S S I O N*/
const navLinks = document.querySelectorAll('.prog-scroll');
const progressBar = document.querySelector('#progress-bar'); // Utilizamos querySelector para seleccionar un único elemento

const animateProgressBar = () => {
  navLinks.forEach(navLink => {
    const slideBar = -navLink.getBoundingClientRect().top; // Obtenemos el rectángulo de cada elemento
    let progressWidth = (slideBar / (navLink.getBoundingClientRect().height - document.documentElement.clientHeight)) *100;
    let value = Math.floor(progressWidth);
    progressBar.style.width = `${value}%`;
    //console.log(progressWidth);
    if (value < 0){
      return (progressBar.style.width = '0%');
    }
  });
}

window.addEventListener('scroll', animateProgressBar);

/*JS*/

let menuVisible = false;
//Función que oculta o muestra el menu
function MostrarOcultarMenu(){ 
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progress");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("tailwind");
        habilidades[5].classList.add("communication");
        habilidades[6].classList.add("teamwork");
        habilidades[7].classList.add("creativity");
        habilidades[8].classList.add("dedication");
        habilidades[9].classList.add("ceo");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


// Download CV

function descargarPDF() {
    window.location.href = "cv1.pdf";
}
