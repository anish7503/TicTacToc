console.log("Welcome to The Game");

let music = new Audio("SandG/music.mp3");
let ting = new Audio("SandG/ting.mp3");
let over = new Audio("SandG/gameover.mp3");

let turn = "X";
let isover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');

    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    win.forEach( e=> {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "300px";
        }
    })

}

//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach( element => {
    let boxtexts= element.querySelector('.boxtext');

    element.addEventListener( 'click', () =>{
        if(boxtexts.innerHTML === ''){
            boxtexts.innerHTML = turn;
            turn = changeTurn();
            ting.play();
            checkWin();

            if(!isover){

                document.getElementsByClassName('info')[0].innerHTML = "Turn For = " + turn;
            }

        }
    })
})


reset.addEventListener('click', ()=> {
    let boxtext= document.querySelectorAll('.boxtext');

    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });

    turn = "X"; 
    isover = false
    document.getElementsByClassName("info")[0].innerText  = "Start the Game";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})