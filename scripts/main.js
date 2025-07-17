//game
let squares = document.getElementsByClassName("square");
squares = Array.from(squares);
let start = false;
let end = false;
let player = false;
squares.forEach(element => {
    element.onclick = () => {
        if (!element.classList.contains("active") && !end) {
            element.classList.add("active");
            player ? selectXO(element, "O"): selectXO(element, "X");
            player = !player;
            if (!start) start = true;
            winner();
            barSelector();
        }
    }


});
function selectXO(element, XO) {
    element.firstElementChild.innerHTML = XO;
}

//game bar
let title = document.querySelector(`.scoor h1`);
function barSelector() {
if (start) {
    player ? title.innerText = "O": title.innerText = "X";
}
}

//win
function winner() {
    let valus = squares.map(squares => squares.innerText);
    if (valus[0] === valus[1] && valus[0] === valus[2] && squares[0].classList.contains("active")) {
        title.innerHTML = `${valus[0]} is the winner`
        start = false;
        end = true;
    } else if (valus[0] === valus[3] && valus[0] === valus[6] && squares[0].classList.contains("active")) {
        title.innerHTML = `${valus[0]} is the winner`
        start = false;
        end = true;
    } else if (valus[0] === valus[4] && valus[0] === valus[8] && squares[0].classList.contains("active")) {
        title.innerHTML = `${valus[0]} is the winner`
        start = false;
        end = true;
    } else if (valus[2] === valus[5] && valus[2] === valus[8] && squares[2].classList.contains("active")) {
        title.innerHTML = `${valus[0]} is the winner`
        start = false;
        end = true;
    } else if (valus[8] === valus[7] && valus[7] === valus[6] && squares[8].classList.contains("active")) {
        title.innerHTML = `${valus[0]} is the winner`
        start = false;
        end = true;
    } else if (valus[1] === valus[4] && valus[4] === valus[7] && squares[1].classList.contains("active")) {
        title.innerHTML = `${valus[0]} is the winner`
        start = false;
        end = true;
    } else if (valus[3] === valus[4] && valus[4] === valus[5] && squares[3].classList.contains("active")) {
        title.innerHTML = `${valus[0]} is the winner`
        start = false;
        end = true;
    } else if (valus[2] === valus[4] && valus[6] === valus[4] && squares[4].classList.contains("active")) {
        title.innerHTML = `${valus[0]} is the winner`
        start = false;
        end = true;
    } else if (valus.every(element => element === `X` || element === `O`)) {
        start = false;
        title.innerText = `No winner`;
        end = true;
    }
    if (end) {
        setTimeout(() => document.getElementById("mainCont").onclick = () => location.reload(),1000);
    }
}