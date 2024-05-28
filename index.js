let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");
const ai = document.getElementById("ai");
const Player = document.getElementById("player");
const aiModeEasy = document.getElementById("easy");
const aiModeNormal = document.getElementById("normal");
const aiModeHard = document.getElementById("hard");

let turn = "X";

let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
for(let button of buttons){
    button.onclick = function(){
        if(button.textContent == "0"){
            button.textContent = turn;
        
        if(turn == "X"){
            button.style.color = "red";
            turn = "O";
        }
        else if(turn == "O"){
            button.style.color = "blue";
            turn = "X";
        }
        button.id = "completed";
        setTimeout(() => {check()},10);
        }
    }
    
}

function check(){
    let btn1Text = btn1.textContent;
    let btn2Text = btn2.textContent;
    let btn3Text = btn3.textContent;
    let btn4Text = btn4.textContent;
    let btn5Text = btn5.textContent;
    let btn6Text = btn6.textContent;
    let btn7Text = btn7.textContent;
    let btn8Text = btn8.textContent;
    let btn9Text = btn9.textContent;

    let winning = false;
    
    for(let i = 0; i < 8; i = i + 3){
        let text = buttons[i].textContent + buttons[i+1].textContent + buttons[i+2].textContent;
        if(text == "XXX"){
            window.alert("X wins!");
            winning = true;
            reset();
        }else if(text == "OOO"){
            window.alert("O wins!");
            winning = true;
            reset();
        }
    }
    let line = 0;
    for(let i = 0; i < 8; i += 3){
        let text = buttons[0 + line].textContent + buttons[3 + line].textContent + buttons[6 + line].textContent;
        if(text == "XXX"){
            window.alert("X wins!");
            winning = true;
            reset();
        }else if(text == "OOO"){
            window.alert("O wins!");
            winning = true;
            reset();
        }
        line++;
    }
    let first = 0;
    let last = 8;
    for(let i = 0; i < 2; i++){
        let text = buttons[first].textContent + buttons[4].textContent + buttons[last].textContent;
        console.log(text);
        if(text == "OOO"){
            window.alert("O wins!");
            winning = true;
            reset();
        }else if(text == "XXX"){
            window.alert("X wins!");
            winning = true;
            reset();
        }
        first = 6;
        last = 2;
    }
    
     if(btn1Text != "0" && btn2Text != "0" && btn3Text != "0" && btn4Text != "0" && btn5Text != "0" && btn6Text != "0" && btn7Text != "0" && btn8Text != "0" && btn9Text != "0" && !winning){
        window.alert("Tie !");
        reset();
    }
        
    }
function reset(){
    for(let button of buttons){
        button.textContent = "0";
        button.style.color = "transparent";
    }
}
