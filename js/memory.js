let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];

//libreria per icone
//https://html-css-js.com/html/character-codes/
let arrayComparison = [];

document.body.onload = startGame();

//Fuonzione che crea , mischia le carte e le rende cliccabili
function startGame(){
//azzera il tempo al caricamento della pagina 
min=0
sec=0
//selezione il nodo e lo azzero al caricamento della pagina
let contenitorte = document.querySelector('.icon-grid') 
contenitorte.innerHTML=''
//mischia l array e per ogni e;emento contenuto crea le carte e le inserisce sullol schermo
let arrayShuffle = shuffle(arrayAnimali);
arrayShuffle.forEach((ele) =>{
let carte = document.createElement('div')
let simbolo = document.createElement('div')
contenitorte.appendChild(carte)
carte.appendChild(simbolo)
simbolo.className= 'icon' 
simbolo.innerText= ele 
simbolo.addEventListener('click', displayIcon)
})
}

//questa e la funzione che tiene il tempo 
let min=0;
let sec=0;  
function tempo(){ 
sec++;
 if(sec==60){
     sec=0;
     min++;
    } 
let minutaggio = document.querySelector('.timer');
minutaggio.innerText= 'Tempo:' + min + 'min' + sec + 'sec';
}
 setInterval(function(){
    tempo()
},1000)





// mi serviranno alcune variabili 1. interval 2. una agganciata alla classe find 
// 3. una agganciata al'id modal 4. una agganciata alla classe timer

   




//una funzione che serve a mescolare in modo random gli elementi dell'array che viene passato 
// (l'array contiene le icone degli animali)
function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}
// una funzione che rimuove la classe active e chiama la funzione startGame()

// la funzione startGame che pulisce il timer, dichiara un array vuoto, mescola casualmente l'array degli animali
// (var arrayShuffle = shuffle(arrayAnimali);), aggancia il contenitore con id griglia, 
// pulisce tutti gli elementi che eventualmente contiene
// poi fa ciclo per creare i 24 div child -> aggiunge la class e l'elemento dell'array in base all'indice progressivo
// chiama la funzione timer e associa a tutti gli elementi (div) di classe icon l'evento click e le due funzioni definit sotto


var iconsFind;
function displayIcon() {
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    iconsFind=document.getElementsBygClassName('find');


    /*
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    è uguale a 
    var icons = document.getElementsByClassName("icon");
    //var icons = [...icon];
    è un operatore che serve per passare un array come argomento:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
    https://www.tutorialspoint.com/es6/es6_operators.htm (cerca spread nella pagina)
    */

    //mette/toglie la classe show
    this.classList.toggle("show");
    //aggiunge l'oggetto su cui ha cliccato all'array del confronto
   
    arrayComparison.push(this);

    var len = arrayComparison.length;
    //se nel confronto ci sono due elementi
    if (len === 2) {
       
        //se sono uguali aggiunge la classe find
       
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML && arrayComparison[0] != arrayComparison[1] ) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];

        } else {
            //altrimenti (ha sbagliato) aggiunge solo la classe disabled
            icons.forEach(function(item) {
                item.classList.add('disabled');
            });
            // con il timeout rimuove  la classe show per nasconderli
            setTimeout(function() {

                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function(item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < iconsFind.length; i++) {
                        iconsFind[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
endGame()
}

//una funzione che viene mostrata alla fine quando sono tutte le risposte esatte
let endgame = document.querySelector('#modal')
function endGame (){
    if(iconsFind.length == 24){
       modal.className = 'active'
       let soud = new Audio('../media/1.mp3')
       soud.play()
    }
clearInterval(tempo())
let time= document.querySelector('#tempoTrascorso')
time.innerText= min + 'min' + sec + 'sec'
}

// una funzione che nasconde la modale alla fine e riavvia il gioco
function rigioca(){
startGame()
modal.className= ''
}


// una funzione che calcola il tempo e aggiorna il contenitore sotto
