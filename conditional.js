const age = 19;
if (age<= 20){
    console.log("you are in your teen age");
} else if (age> 20 && age <= 29){
    console.log("you are in your twenties");
} else {
    console.log("you are old");
}


let day = 'sunday';

switch (day){
    case 'monday':
        console.log('it is monday');
    break;
    case 'wednesday':
        console.log('it is wednesday');
    break;
    case 'friday':
        console.log('it is friday');
     break;
    default:
    console.log("your week day is not available");   
}
