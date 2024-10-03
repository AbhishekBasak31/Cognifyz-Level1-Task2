// Color changer button

const colorgenerator=()=>{
    const hex=['0','1','2','3','4','5','6','7','8','9', 'a','b','c','d','e','f']
    let color="#"
    for (let i = 0; i < 6; i++) {
        let randomNum=Math.floor(Math.random()*hex.length)
        console.log(randomNum)
        color=color+hex[randomNum]
        if(color.length==7){
            return color;
        }
        
    }
}
const Bgchanger=()=>{
    
    document.getElementById("ChangeColor").style.background=colorgenerator()
}

document.getElementById("ChangeColor").addEventListener('click',Bgchanger)


// Greetings according to the current time

const currentTime= new Date();

const time= currentTime.toLocaleTimeString()

if(time.slice(8,11)==="PM"){

    if(Number(time.slice(0,4).split(" "))<=12&&Number(time.slice(0,4).split(" "))<5){

        alert("Good Afternoon");

    }
    else if(Number(time.slice(0,4).split(" "))<6&&Number(time.slice(0,4).split(" "))<9){

        alert("Good Evening");

    }
    else{

        alert("Good Night");

    }
}
else{

    if(Number(time.slice(0,3))>6&&Number(time.slice(0,3))<=11){

        alert("Good Morning");
        
    }
}
console.log(time.slice(8,11))
console.log(time.slice(0,4))


// Calculator

document.addEventListener('DOMContentLoaded', () => {

    const display = document.getElementById("Display");

    const buttons = document.querySelectorAll("button");

    let currentInput = "";

    let operator = null;

    let firstOperand = null;

    buttons.forEach(button => {
        
        button.addEventListener('click', () => {

            const value = button.innerText;

            if (!isNaN(value)) { // If it's a number

                currentInput += value;

                display.innerText = currentInput;

            } else if (['+', '-', '×', '/'].includes(value)) { // If it's an operator

                if (currentInput === "") return;

                firstOperand = parseFloat(currentInput);

                operator = value;

                currentInput = "";

            } else if (value === 'CE') { // Clear Entry

                currentInput = "";

                display.innerText = "0";

            } else if (value === 'Del') { // Delete last character

                currentInput = currentInput.slice(0, -1);

                display.innerText = currentInput || "0";

            } else if (value === '=') { // Calculate result

                if (operator && currentInput !== "") {

                    const secondOperand = parseFloat(currentInput);

                    let result;

                    switch (operator) {

                        case '+':

                            result = firstOperand + secondOperand;

                            break;

                        case '-':

                            result = firstOperand - secondOperand;

                            break;

                        case '×':

                            result = firstOperand * secondOperand;

                            break;

                        case '/':

                            result = secondOperand !== 0 ? (firstOperand / secondOperand).toFixed(5) : "Error";

                            break;

                    }
                    display.innerText = result;

                    currentInput = result.toString();

                    operator = null;

                    firstOperand = null;

                }
            }
        });
    });
});
