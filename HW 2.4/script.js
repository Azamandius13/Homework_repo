// Задание 1
let i = 1;

while ( i <= 2) {
    console.log('Привет');
    i++;
}

// Задание 2
let i2 = 1;

while ( i2 <= 5) {
    console.log(i2);
    i2++;
}


// Задание 3
let i3 = 7;

while ( i3 <= 22) {
    console.log(i3);
    i3++;
}

// Задание 4
const obj = {
    'Коля' : '200',
    'Вася' : '300',
    'Петя' : '400'
}

for (let key in obj){
    if (obj[key]) {
        console.log(`${key} - зарплата ${obj[key]} долларов`);
    }
}

// Задание 5

let n = 1000;
let num = 0;

while ( n >= 50) {
    n = n / 2;
    num++;
}
console.log(num);

//Задание 6

let friday = 5;

do {
    console.log(`Сегодня пятница  ${friday} число . Необходимо подготовить отчет`);
    friday += 7;
}while ( friday <= 31)