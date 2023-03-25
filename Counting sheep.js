function countSheeps(arrayOfSheep) {
    let summeTrue = 0; 
    for (i = 0; i<arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] == true) {
        summeTrue += 1;// TODO May the force be with you
        }
    }    
return summeTrue;
}