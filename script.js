// CAMPOMINATO
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, 
// la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

// 1.L'USER SELEZIONA IL LV DI DIFFICOLTA'
// 1.1 ATTRAVERSO IL CLICK SU DEI BOTTONI VIENE SCELTO IL LV.
// 2.IL CLICK COMPORTA L'ITERAZIONE DI UN CICLO A SECONDA DELLE CELLE SCELTE
// 2.1 SEMPRE AL CLICK SARA' AGGIUNTA UNA CLASSE PER IDENTIFICARE LE CELLE GIà SELEZIONATE

const gridCont = document.getElementById("container");
const btnEasy = document.getElementById("easy-btn");
const btnMed = document.getElementById("med-btn");
const btnHard = document.getElementById("hard-btn");

// selezionato il lv il click itera il ciclo for per il numero di elementi a seconda della difficoltà.
// creandoli e inserendoli in griglia
// l'altro click all'interno del primo serve per assegnare una classa che cambi il colore di sfondo al click dell'utente
btnEasy.addEventListener("click",
    function() {
        for (let i = 1; i <= 100; i++) {
            let newElement = elementGenerator ("div" , "square-easy");

            newElement.addEventListener("click",
                function() {
                    this.classList.add("clicked-true");
                    newElement.append(i); 
                }
            );
            gridCont.append(newElement); 
                   
        }
    }
);

btnMed.addEventListener("click",
    function() {
        for (let i = 1; i <= 81; i++) {
            let newElement = elementGenerator ("div" , "square-med");

            newElement.addEventListener("click",
                function() {
                    this.classList.add("clicked-true");
                    newElement.append(i);  
                }
            );
            gridCont.append(newElement);  
               
        }
    }
);

btnHard.addEventListener("click",
    function() {
        for (let i = 1; i <= 49; i++) {
            let newElement = elementGenerator ("div" , "square-hard");

            newElement.addEventListener("click",
                function() {
                    this.classList.add("clicked-true");
                    newElement.append(i);  
                }
            );
            gridCont.append(newElement);  
                 
        }
    }
);






