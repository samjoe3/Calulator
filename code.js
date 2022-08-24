screen = document.querySelector('.screen');
clear = document.querySelector('.clear');
multiply = document.querySelector('.multiply');
seven = document.querySelector('.seven');
eight = document.querySelector('.eight');
nine = document.querySelector('.nine');
plus = document.querySelector('.plus');
minus = document.querySelector('.minus');
six = document.querySelector('.six');
five = document.querySelector('.five');
four = document.querySelector('.four');
three = document.querySelector('.three');
two = document.querySelector('.two');
one = document.querySelector('.one');
divide = document.querySelector('.divide');
zero = document.querySelector('.zero');
dot = document.querySelector('.dot');
equals = document.querySelector('.equals');

let currentNum = 0;
let currentScreen = '';
let currentSign = ''
let num1 = 0;
let num2 = 0;

function clearFun() {
currentNum = 0
currentScreen = '';
currentSign = ''
screen.innerHTML = currentScreen;
num1 = 0;
num2 = 0;
}
clear.addEventListener('click', () => clearFun());

multiply.addEventListener('click', () => {
    if (num1 === 0) {
    num1 += currentNum;
    currentNum = 0
    currentSign = '*';
    currentScreen += '&times;';
    screen.innerHTML = currentScreen;
    }
    else if (num1 !== 0) {
        num1 *= currentNum;
        currentNum = 0;
        currentSign = '*';
        currentScreen = num1;
        currentScreen += '&times;';
        screen.innerHTML = currentScreen;
    }
});
plus.addEventListener('click', () => {
    num1 += currentNum;
    currentNum = 0
    currentSign = '+';
    currentScreen = num1;
    currentScreen += '&plus;';
    screen.innerHTML = currentScreen;
    });

minus.addEventListener('click', () => {
    if (num1 === 0) {
    num1 += currentNum;
    currentNum = 0
    currentSign = '-';
    currentScreen += '&minus;';
    screen.innerHTML = currentScreen;
    }
    else if (num1 !== 0) {
        num1 -= currentNum;
        currentNum = 0;
        currentSign = '-';
        currentScreen = num1;
        currentScreen += '&minus;';
        screen.innerHTML = currentScreen;
    }
});

nine.addEventListener('click', () => {
    currentNum += 9;
    currentScreen += '9';
    screen.innerHTML = currentScreen;
});
eight.addEventListener('click', () => {
    currentNum += 8;
    currentScreen += '8';
    screen.innerHTML = currentScreen;
});
seven.addEventListener('click', () => {
    currentNum += 7;
    currentScreen += '7';
    screen.innerHTML = currentScreen;
});
six.addEventListener('click', () => {
    currentNum += 6;
    currentScreen += '6';
    screen.innerHTML = currentScreen;
});
five.addEventListener('click', () => {
    currentNum += 5;
    currentScreen += '5';
    screen.innerHTML = currentScreen;
});
four.addEventListener('click', () => {
    currentNum += 4;
    currentScreen += '4';
    screen.innerHTML = currentScreen;
});
three.addEventListener('click', () => {
    currentNum += 3;
    currentScreen += '3';
    screen.innerHTML = currentScreen;
});
two.addEventListener('click', () => {
    currentNum += 2;
    currentScreen += '2';
    screen.innerHTML = currentScreen;
});
one.addEventListener('click', () => {
    currentNum += 1;
    currentScreen += '1';
    screen.innerHTML = currentScreen;
});
zero.addEventListener('click', () => {
    currentNum += 0;
    currentScreen += '0';
    screen.innerHTML = currentScreen;
});
dot.addEventListener('click', () => {
    currentNum = currentNum.toString() + '.';
    currentScreen += '.';
    screen.innerHTML = currentScreen;
});

function equalsFun() {
    if (currentSign === '*') {
        num1 *= currentNum;
        currentNum = 0;
        currentScreen = num1;
        screen.innerHTML = currentScreen;
        } 
        else if (currentSign === '+') {
            num1 += currentNum;
            currentNum = 0;
            currentScreen = num1;
            screen.innerHTML = currentScreen;
        }
        else if (currentSign === '-') {
            num1 -= currentNum;
            currentNum = 0;
            currentScreen = num1;
            screen.innerHTML = currentScreen;
        }
        else if (currentSign === '/') {
            num1 /= currentNum;
            currentNum = 0;
            currentScreen = num1;
            screen.innerHTML = currentScreen;
        }
}
equals.addEventListener('click', () => equalsFun());