function friend(friends){
let arrFriends = []; 
for (i = 0; i < friends.length; i++) {
    if (friends[i].length == 4) {arrFriends.push(friends[i])}
    }
return arrFriends
}