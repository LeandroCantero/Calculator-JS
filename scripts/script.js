window.addEventListener('load', () => {
    const screen = document.querySelector('.screen');
    const buttons = document.getElementsByClassName('key');

    const buttonsArray = Array.from(buttons);

    buttonsArray.forEach((button) => {
        button.addEventListener('click', () => {
            calculator(button, screen);
        })
    });

    document.onkeydown = function (e) {
        buttonsArray.forEach((button) => {
            if (button.textContent === e.key && isNumeric(e.key)) {
                keyboardUpdate(screen, e);
            }
        })
    };

    document.addEventListener('keypress', (e) => {
        if (e.key === '.') {
            keyboardUpdate(screen, e);
        }
    })
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            calculate(screen);
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Delete') {
            clear(screen);
        }
    })
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            clear(screen);
        }
    })
})



function calculator(button, screen) {
    switch (button.innerHTML) {
        case 'C':
            clear(screen);
            break;
        case '=':
            calculate(screen)
            break;
        default:
            update(screen, button)
            break;
    }
}

function calculate(screen) {
    screen.innerHTML = eval(screen.innerHTML);
}

function update(screen, button) {
    if (screen.innerHTML == 0) {
        screen.innerHTML = '';
    }
    screen.innerHTML += button.innerHTML;
}

function clear(screen) {
    screen.innerHTML = 0;
}

function isNumeric(n) {
    let validate = false;
    if (!isNaN(parseFloat(n)) && isFinite(n) ||
        (n === "+" || n === "-" || n === "/" || n === "*" || n === "%")) {
        validate = true
    }
    return validate;
}

function keyboardUpdate(screen, e){
    if (screen.innerHTML == 0) {
        screen.innerHTML = '';
    }
    screen.innerHTML += e.key
}