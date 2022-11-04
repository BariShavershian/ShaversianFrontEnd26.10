//   Первая часть  

    const userYearBorn = Number(prompt('Hello user, what year were you born?'));
    const userLiveCity = prompt('User, what city do you live in?');
    const userFavoriteSport = prompt('And the last question, what is your favorite sport?');
    
    let userBorn = 2022-userYearBorn;
    let Kyiv ='Kyiv';
    let london = 'london';
    let Washington ='Washington'; 
    
    if(userYearBorn){
      alert(`you are ${userBorn} years old`) ;
    }
    
     if(userLiveCity == Kyiv){
        alert(`Do you live in the capital of Ukraine`)
    }
    else if(userLiveCity == london){
        alert(`Do you live in the capital of the United Kingdom`)
    }
    else if(userLiveCity == Washington){
        alert(`Do you live in the capital of the USA`)
    }
    else if(userLiveCity){
        alert(`Do you live in ${userLiveCity} `);
    }
    
    // Вторая часть
    let football = "football"
    let tennis =  "tennis"
    let basketball = "basketball"
    if(userFavoriteSport == football){
        alert(`Cool! Do you want to become Leo Messi`)
    }
    else if(userFavoriteSport == tennis){
        alert(`Cool! Do you want to become Rafael Nadal`)
    }
    else if(userFavoriteSport == basketball){
        alert(`Cool! Do you want to become Michael  Jordan`)
    }
    else if(userFavoriteSport){
        alert(`Сool! ${userFavoriteSport} is a great sport`)
    }
    
    
     if(userYearBorn == null){
        alert(`sorry you don't want to enter your date of birth:(`)
    }
    else if(userLiveCity == null ){
        alert(`it is a pity that you do not want to enter the name of the city where you live :(`)
    }
    else if(userFavoriteSport == null ){
        alert(`sorry you don't want to enter the name of your favorite sport :(`)
    }



