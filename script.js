let enter = +prompt('Введите количество решаемых примеров')

function random(min,max){
    return Math.round(Math.random() * (max + 1 - min) + min);
}


for(let i = 0; i < enter; i++){
    let number1 = random(2,10);
    let number2 = random(2,10);
    let symbol = random(1,4);
    let answer = 0;
    if(symbol == 1){
        answer = number1 + number2
        symbol = '+';
    }else if(symbol == 2){
        answer = number1 - number2
        symbol = '-';
    }else if(symbol == 3){
        answer = number1 * number2
        symbol = '*';
    }else if(symbol == 4){
        answer = number1 / number2
        symbol = '/';
    }
    let primer = prompt(number1 + symbol + number2);
    console.log(primer == answer ? 'Ваш ответ верный ' + primer : 'Ваш ответ неправильный ' + primer + ' Правильный ответ ' + answer);
    
    
}

