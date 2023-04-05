//
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let birdsFilter =[];
  for (i = 0; i < birds.length; ++i) {
    switch (birds[i]) {
  case "African" :
  case "Roman Tufted" :
  case "Toulouse" :
  case "Pilgrim" :
  case "Steinbacher" :
    break;
  default:
    birdsFilter.push(birds[i])}
  }
  return birdsFilter; // return an array containing all of the strings in the input array except those that match strings in geese
  };