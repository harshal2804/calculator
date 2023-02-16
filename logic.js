let display_value = ""
let display_value2 = ""
let display = document.getElementsByClassName("main--text")
let display2 = document.getElementsByClassName("dummy--text")
let keyboard = document.getElementsByClassName("keyboard")
let button = []
let answer = 0
for (let i = 0; i < 24; i++) {
    button[i] = document.createElement("div")
    button[i].setAttribute("class", "button")
    keyboard[0].appendChild(button[i])
}
button[3].textContent = 'C'
button[8].textContent = 7
button[8].onclick = () => {
    display_value = display_value + "7"
    display[0].textContent = display_value
}
button[9].textContent = 8
button[9].onclick = () => {
    display_value = display_value + "8"
    display[0].textContent = display_value
}
button[10].textContent = 9
button[10].onclick = () => {
    display_value = display_value + "9"
    display[0].textContent = display_value
}
button[12].textContent = 4
button[12].onclick = () => {
    display_value = display_value + "4"
    display[0].textContent = display_value
}
button[13].textContent = 5
button[13].onclick = () => {
    display_value = display_value + "5"
    display[0].textContent = display_value
}
button[14].textContent = 6
button[14].onclick = () => {
    display_value = display_value + "6"
    display[0].textContent = display_value
}
button[16].textContent = 1
button[16].onclick = () => {
    display_value = display_value + "1"
    display[0].textContent = display_value
}
button[17].textContent = 2
button[17].onclick = () => {
    display_value = display_value + "2"
    display[0].textContent = display_value
}
button[18].textContent = 3
button[18].onclick = () => {
    display_value = display_value + "3"
    display[0].textContent = display_value
}
button[20].textContent = '+/-'
button[21].textContent = 0
button[21].onclick = () => {
    if (display_value !== "") {
        display_value = display_value + "0"
        display[0].textContent = display_value
    }
}

button[22].textContent = '.'
button[22].onclick = () => {
    display_value = display_value + "."
    display[0].textContent = display_value
}

button[19].textContent = '+'
button[19].onclick = () => {
    answer += parseFloat(display_value)
    display_value2 += display_value + '+'
    display2[0].textContent = display_value2
    display_value = ""
}
button[15].textContent = '-'
button[15].onclick = () => {
    if(display_value2 === "") {
    answer += parseFloat(display_value)
    } else {
    answer -= parseFloat(display_value)
    }
    display_value2 += display_value + '-'
    display2[0].textContent = display_value2
    display_value = ""
}
button[11].textContent = '×'
button[7].textContent = '÷'
button[23].textContent = '='
button[23].onclick = () => {
    if (display_value2[display_value2.length - 1] === '+') {
        answer += parseFloat(display_value)
    } else if (display_value2[display_value2.length - 1] === '-') {
        answer -= parseFloat(display_value)
    }
    display[0].textContent = answer
    display2[0].textContent = display_value2 + display_value + '='
    display_value = ""
    display_value2 = ""
    answer = 0
}

display[0].textContent = display_value