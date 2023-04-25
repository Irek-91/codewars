function DNAtoRNA(dna) {
let arrDna = dna.split('');
for (i = 0; i < arrDna.length; i++) {
    if (arrDna[i] == 'T' ) {arrDna[i] = 'U'}}
    return arrDna.join('');
}
DNAtoRNA("TTTT")