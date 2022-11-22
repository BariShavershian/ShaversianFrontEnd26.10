// Реалізуйте функцію generateKey(length, characters),
//  яка повертає рядок випадкових символів із набору characters довжиною length.



// Наприклад:

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


function generateKey(characters){
    
    let StringRandomCharacters = "";
    while(StringRandomCharacters.length < characters)

    StringRandomCharacters += Math.random().toString(36).substring(2);

    return StringRandomCharacters.substring(0,characters)

}

let key = generateKey(16,characters)
console.log(key)