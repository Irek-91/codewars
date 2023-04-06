
function disemvowel(str) {
    let strFinish = '';
    let strAlf = "BCDFGHJKLMNPQRSTVWXYZ\^'_`bcdfghjklmnpqrstvwxyz[\n],!?{|}~� ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ";
        for (j = 0; j < str.length; j++) {
        let position = strAlf.indexOf(str[j]);
        if (position >= 0) {
        strFinish += strAlf[position];
        }
    }
    return strFinish;
}
disemvowel("No offense but,\nYour writing is among the worst I've ever read");

//
function disemvowel(str) {
    return str.replace(/[aeiou]+/gi, '');
  }
disemvowel("No offense but,\nYour writing is among the worst I've ever read");
