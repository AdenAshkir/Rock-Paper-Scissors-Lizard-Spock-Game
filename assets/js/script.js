/**function for winning or lose */
function Winner(user,comp){
   if (user == 'rock'){
    if (comp == 'scissors' || comp == 'lizard')
    return true;
   } else if (user == 'paper'){
    if (comp == 'rock' || comp == 'spock')
    return true;
   } else if (user == 'scissors'){
    if (comp == 'paper' || comp == 'lizard')
    return true;
   } else if (user == 'lizard'){
    if (comp == 'spock' || comp == 'paper')
    return true;
   } else if (user == 'spock'){
    if (comp == 'rock' || comp == 'scissors')
    return true;
   } 
}
return false;

