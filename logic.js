let keyboard = document.getElementsByClassName("keyboard")
let button = []
for(let i=0; i<24; i++){
    button[i] = document.createElement("div")
    button[i].setAttribute("class","button")
    keyboard[0].appendChild(button[i])
}
button[3].textContent = 'C'
button[7].textContent = '÷'
button[8].textContent = 7
button[9].textContent = 8
button[10].textContent = 9
button[11].textContent = '×'
button[12].textContent = 4
button[13].textContent = 5
button[14].textContent = 6
button[15].textContent = '-'
button[16].textContent = 1
button[17].textContent = 2
button[18].textContent = 3
button[19].textContent = '+'
button[20].textContent = '+/-'
button[21].textContent = 0
button[22].textContent = '.'
button[23].textContent = '='

function add(a, b){
    return a+b
}

function subtract(a, b){
    return a-b
}

function multiply(a, b){
    return a*b
}

function divide(a, b){
    return a/b
}

function operate(num1, num2, op){
    if(op==='+'){
        add(num1, num2)
    }
    else if(op==='-'){
        subtract(num1, num2)
    }
    else if(op==='*'){
        multiply(num1, num2)
    }
    else if(op==='/'){
        divide(num1, num2)
    }
}

