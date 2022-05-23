/*function changeColor(){
    let button = document.querySelector('.btn')
    button.style.color = 'red'
}*/

/*function changeColor(){
    document.querySelector('.btn').style.color = 'red'
}*/

function changeColor(){

    let colorInput = document.querySelector ('.color_input')
    let color = colorInput.value

    let text = document.querySelector('.text')
    text.style.color = color
}

function changeFontSize(){
    let text = document.querySelector('.changed_text')
    let input = document.querySelector('.text_input')

    let textSize = input.value
    
    text.style.fontSize = textSize + 'px'
}

function changeFontColor(){
    let colorText = document.querySelector ('.changed_text_color')

    let inputColorText = document.querySelector ('.text_color_input')

    let textColor = inputColorText.value

    colorText.style.color = textColor
}

function changeNumber(){
    let input = document.querySelector ('.number_input')
    let numberInput = input.value

    let textSize = numberInput*2
    
    console.log(textSize)
}

function changeNumberInput(){
    let numberInput1 = document.querySelector('.number1')
    let numberInput2 = document.querySelector('.number2')

    let number1 = numberInput1.value
    let number2 = numberInput2.value

    do {
        console.log (number1)
        number1 ++
    } while (number1 < number2)
}