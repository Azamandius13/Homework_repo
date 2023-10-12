// Задание1 

const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];
console.log(people.sort((a,b) => a.age - b.age ));

//Задание2 


const people1 = [

  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];

function isMale(item){
      if( item.gender === 'male' ){
        return true;
      }return false;
}

function isPositive(item) {
    if( item >= 0 ){
      return true;
    }return false;
}

function filter(arr , ruleFunction ) {
  let outputarr = [];
  for (let i = 0; i < arr.length; i++) {
    if(ruleFunction(arr[i]) === true){
      outputarr.push(arr[i]);
    }

  }
  return outputarr;
}

console.log(filter([3, -4, 1, 9], isPositive)); 
console.log(filter(people1, isMale));


//Задание 3

function thirtySecTimer() {
    let timer = setInterval (() => {console.log(new Date())} , 3000);
    setTimeout(() => {clearInterval(timer); console.log('30 секунд прошло')}, 30000);
}

thirtySecTimer();


//Задание 4

function delayForSecond(callback) {
  setTimeout(() => callback(), 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб1!');
})


//Задание 5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { cb() }

  }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond((item) => {return sayHi('Глеб');} )