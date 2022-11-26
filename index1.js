

// // Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:

// // Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let array = ['a', 4, 7, 0, 's', 'g', 'ryf', 2, 1, 44, 67,'dgeh', 'ss',];

function calcArr() {
    let numbers = array.filter(x => !isNaN(x));
  
    if (numbers.length == 0)
      return 0;
  
    let sum = numbers.reduce((prev, curr) => prev + curr);
  
    return sum / numbers.length;
  }
  const result1 = calcArr();
  console.log(result1);



// // Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь )
// // .Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача

let x = Number(prompt("Enter the first number"))
let y = Number(prompt("Enter the second number"))
let znak = prompt('User enter action, please  "+"  "-"  "*"  "/"  "%"  "^"  ')

  function doMath(x, znak, y){
    switch(znak){
        case "+":
          return x + y;
        case "-":
          return x - y;
        case "*":
          return x * y;
        case "/":
          return x / y;
        case "%":
          return x % y;
        case "^":
          return Math.pow(x,y);
    
    }
}
const result = doMath(x, znak, y);
 console.log(result);

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач.
//  Значення всіх елементів всіх масивів задає користувач.
function arrAdd() {
    let arr = [];
    let amount = +prompt("Введите количество массивов в первом массиве");

    for(let i = 0; i < amount; i++) {
        arr.push([]);

        let amount2 = prompt("Введите количество елементов" + (i + 1));

        for(let j = 0; j < amount2; j++) {
            let elem = prompt("Введите текст" + (j + 1));
            arr[i].push(elem);
        }
    }

    console.log(arr);
}

let functionResult = arrAdd();
console.log(functionResult);



// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
//  Вихідний рядок та символи для видалення задає користувач.


function replaceString(string, pattern){
    let stPt = pattern.join('');
   
    return string.replace(new RegExp(`[${stPt}]`, 'gi'), '')
   
   }
   
  let finalResult= replaceString('Hello World', ['l', 'd'])
  console.log(finalResult);