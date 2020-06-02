const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, seconCard;
let lockBoard = false ; 



function flipCard () {
if (lockBoard) return;
if(this===firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
//First Click on the card
hasFlippedCard = true;
firstCard = this;
console.log({hasFlippedCard, firstCard});     
    }
    
    else{
       
       lockBoard = false ; 
        seconCard = this;
        checkForMatch(); 
    }
}

function checkForMatch () {
//do cards match the between 
    if(firstCard.dataset.name === seconCard.dataset.name) {
       disableCards();
        
    }else{
      
        unflipCards();
    }  
}

function disableCards() {
 // its a match
    firstCard.removeEventListener("click", flipCard);
    seconCard.removeEventListener("click", flipCard);
    resetBoard();
}

function unflipCards() {
      lockBoard = true;
      setTimeout(() => {
        firstCard.classList.remove('flip');
        seconCard.classList.remove('flip');

    resetBoard();
    }, 1500);  
    }

    function resetBoard() {
        [hasFlippedCard,lockBoard] = [false, false];
        [firstCard,seconCard] = [null, null];
            }

    (function shuffle() {
        cards.forEach(card=>{ 
let randomPos = Math.floor(Math.random() * 12);
card.style.order = randomPos;
        });
     })();

cards.forEach(card => { card.addEventListener('click', flipCard)});



