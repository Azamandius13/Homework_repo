// Задание1

let password = 'пароль';
let enterpassword = prompt('Введите пароль');

 if ( password === enterpassword ) {
    alert('Пароль введен верно')
 } else { 
    alert('Пароль введен не верно')
 }

 // Задание2

let c = -3;

if ( c > 0 && c < 10){ 
    console.log('Верно');
}else {
    console.log('Не верно');
}

 // Задание3
 d = 3;
 e = 5;

if ( d > 100 || e > 100 ) {
    console.log('Верно');
}else {
    console.log('Не верно');
}

 // Задание4

let a = '2';
let b = '3';
alert(Number(a)+ Number(b));

 // Задание5

 let monthNumber = Number(prompt('Введите номер месяца'));

 switch (monthNumber) {
    case 1:
        console.log('Зима')
        break;
    case 2:
        console.log('Зима')
        break;
    case 3:
        console.log('Весна')
        break;
    case 4:
        console.log('Весна')
        break;
    case 5:
        console.log('Весна')
        break;
    case 6:
        console.log('Лето')
        break;
    case 7:
        console.log('Лето')
        break;
    case 8:
        console.log('Лето')
        break;
    case 9:
        console.log('Осень')
        break;
    case 10:
        console.log('Осень')
        break;
    case 11:
        console.log('Осень')
        break;
    case 12:
        console.log('Зима')
        break;
    default:
        console.log('Введен не номер месяца')
        break;
 }

 // Задание7

 let number = Number(prompt('Введите любое число'));

if(isNaN(number)){
    alert('Введено не число!');
}else if( number % 2 === 0) {
    alert('Число четное');
}else if(number % 2 === 1){
    alert('Число не четное');
}

 // Задание8