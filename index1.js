// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функцію pow (num, degree).




function pow(num, degree) {
  return degree ? num * pow(num, degree - 1) : 1;
}
console.log(pow(4, 2));