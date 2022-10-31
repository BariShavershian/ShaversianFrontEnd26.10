let userActions =prompt('what action do you want to take?(add, sub, mult, div)')
let add='add'

let sub='sub'

let mult='mult'
let div='div'

let userNum1 =+prompt('enter the first number')

let userNum2 =+prompt('enter the second number')
if(userActions==add){
 alert(userNum1 + userNum2)
}

else if(userActions==sub){
    alert(userNum1 - userNum2)
}
else if(userActions==mult){
    alert(userNum1 * userNum2)
}
else if(userActions==div){
   alert(userNum1 / userNum2)
}

