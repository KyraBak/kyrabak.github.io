const card1 = document.getElementById("card1");

card1.addEventListener("click", flipCard1);

function flipCard1(){
    card1.classList.toggle("flipCard1");
}


const card2 = document.getElementById("card2");

card2.addEventListener("click", flipCard2);

function flipCard2(){
    card2.classList.toggle("flipCard2");
}

const card3 = document.getElementById("card3");

card3.addEventListener("click", flipCard3);

function flipCard3(){
    card3.classList.toggle("flipCard3");
}


const card4 = document.getElementById("card4");

card4.addEventListener("click", flipCard4);

function flipCard4(){
    card4.classList.toggle("flipCard4");
}

const btn = document.getElementById("bottone1b");

btn.addEventListener("click", sito);

function sito(){
   
    btn.onclick(window.open("https://www.geeksacademy.it/corsi"));
}