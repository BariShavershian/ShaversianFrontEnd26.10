// // Вивести на сторінку в один рядок через кому числа від 10 до 20.

   let arr = [10, 12, 13, 14, 15, 15, 16, 17, 18, 19, 20];
   for (let i = 0; i <= arr.length; i++); {
       console.log(arr)

   }


// // Вивести квадрати чисел від 10 до 20.
     
     let  a1 = 0;
    for ( let i = 10; i <=20; i++) {
        a1 = i*i;
        console.log(a1)
    }


// // Вивести таблицю множення на 7.


    let num = '';
	for (let i = 1; i <=7; i++) {
		for (let j = 1; j <=7; j++) {
			num  += (j*i) + "  ";       
		}
    console.log(i + " x");
    console.log(num);
		num = '';
	} 





// // Знайти суму всіх цілих чисел від 1 до 15.

    let sum = 0;
    for(let i = 1; i<=15; i++){
        for(let j = 1; j<=1; j++)
        sum = i + j
        console.log(sum)
    }

// // Знайти добуток усіх цілих чисел від 15 до 35.
 

    let sum1 = 0;
    for(let i = 1; i<=35; i++){
        for(let j = 15; j<=35; j++)
        sum1 = i*j
        console.log(sum1)
    }

// // Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

    let sum2 = 0;
    for(let i = 1; i<500; i++){
        sum2 = i / 2;
        console.log(sum2)
    }
    
// // Вивести суму лише парних чисел в діапазоні від 30 до 80.
    
   let sum3 = 0;
   for(let i = 30; i<=80; i++){
    for(let j = 30; j<=80; j++)
    sum3 = i + j
    console.log(sum3)

}
// // Вивести всі числа в діапазоні від 100 до 200 кратні 3.
     
   let sum4=0; 

   for(let i=100; i<200; i++){
    if (i % 3 === 0){
        sum4 += i
        console.log(sum4)
    }
 }
     
// //  Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
        
    let a = 10;
    for (let i = 0; i < a; i++) {
    if (a % i == 0)
    console.log('');
    }




// // Визначити кількість його парних дільників.

    let b = 10;
    for (let i = 0; i < b; i++) {
    if (b % i == 0 && i % 2 == 0)
    console.log(b);
    }




// Знайти суму його парних дільників.
let c = 10;
let sum7 = 0;
for (let i = 0; i < c; i++) {
if (c % i == 0 && i % 2 == 0){
    sum7 = c + i;
}

console.log(sum7);
}




// // Надрукувати повну таблицю множення від 1 до 10.

let sum5 = '';
for (let i = 1; i <10; i++) {
    for (let j = 1; j <10; j++) {
        sum5 += (j*i) + '  ';       
    }
console.log(i + " x");
console.log(sum5);
    sum5= '';
} 

