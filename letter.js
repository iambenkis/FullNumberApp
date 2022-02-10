let n = {
    unite: {
        0: 'zero',
        1: 'un',
        2: 'deux',
        3: 'trois',
        4: 'quatre',
        5: 'cinq',
        6: 'six',
        7: 'sept',
        8: 'huit',
        9: 'neuf',
        10: 'dix'
    },
    regDizaine: {
        11: 'onze',
        12: 'douze',
        13: 'treize',
        14: 'quatorze',
        15: 'quinze',
        16: 'seize',
        17: 'dix-sept',
        18: 'dix-huit',
        19: 'dix-neuf'
    },
    dizaines: {

        20: 'vingt',
        30: 'trente',
        40: 'quarante',
        50: 'cinquate',
        60: 'soixante',
        70: 'septante',
        80: 'quatre-vingt',
        90: 'nonante'
    },
    upDizaine: {
        100: 'cent',
        1000: 'mille',
    }

};


let myNumber = prompt('Entrer a number between 0 and 1000'),
    N;
let u = myNumber % 10,
    d = (myNumber % 100 - u) / 10,
    c = (myNumber % 1000 - myNumber % 100) / 100;


if (myNumber <= 1000) {
    if (myNumber <= 10) {
        alert(n.unite[myNumber])
    }
    if (myNumber > 10 && myNumber < 20) {
        alert(n.regDizaine[myNumber])
    }
    if (myNumber >= 20 && u == 0 && c == 0) {
        alert(n.dizaines[myNumber])
    }
    if (d > 0 && u > 0) {

        alert(n.dizaines[d * 10] + ' ' + n.unite[u])
    }
} else {
    alert('your Number is greater than 1000')
}