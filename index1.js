// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.
    let arrLength = Number (prompt ("Enter any number!"))
    let arr = []; 
    for(let i=0; i < arrLength; i++) {
        while(
          typeof (arr[i] = prompt('Enter any data (numbers, words...) №'+i)) != 'string' || arr[i].length ==0
        );
    }
    arr.sort();
    console.log(arr);
    arr.splice(2,3)
    console.log(arr);

