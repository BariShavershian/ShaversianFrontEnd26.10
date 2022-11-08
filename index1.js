// переписать код 
 
let numOrStr = prompt('input number or string');
console.log(numOrStr)


switch(numOrStr){
    case null:
        console.log('ви скасували');
    break;
    default:
    if( numOrStr.trim() === '' ){
        console.log('Empty String');
    }
    if ( isNaN( +numOrStr ) ){
        console.log(' number is Ba_NaN')
    }
    if(numOrStr){
        console.log('OK!')
    }
}