let gameseq = [];
let userseq = [];
let color = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

// Define the btns array
let btns = document.querySelectorAll(".btn");
let btnsArray = Array.from(btns).map(btn => btn.classList[1]);


// Add event listener to each button

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;
        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 150);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 150);
}


function levelup() {
    userseq=[];
    level++;
    h2.innerHTML = `Level ${level}`;
    let randIDX = Math.floor(Math.random() * 4); // Changed to 4 to include all colors
    let randomColor = btnsArray[randIDX];
    let randbtn = document.querySelector(`.${randomColor}`);
    // console.log(randIDX);
    // console.log(randomColor);
    // console.log(randbtn);

    gameseq.push(randomColor);
    console.log(gameseq);
    gameFlash(randbtn);
}

function checkAns(idx){

    // console.log("current level: ",level);
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,250);
        }
        } else{
        h2.innerHTML = `game over!Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
      let btn = this;
      userFlash(btn); 

      usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

//let btns = document.querySelectorAll(".btn");
 for(btn of btns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    level = 0;
    gameseq = [];
    userseq = [];
    started=false;
}