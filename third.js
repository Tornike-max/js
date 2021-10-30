const textArray = ['making', 'some', 'simple', 'sentences', 'from', 'array',];

let output = '';
for(i = 0; i < textArray.length; i++) {
    output += textArray[i]
    if(i !== textArray.length -1) {
    output += ' ';
    }
}
console.log(output);

 /* let cooperSword1 = 32;
let steelSword1 = cooperSword1 *2;
let mithrilSword1 = cooperSword1 / 2;

let someofSword1 = cooperSword1 + steelSword1 + mithrilSword1;
console.log(someofSword1);


let cooperSword2 = 28;
let steelSword2 = cooperSword2 *2;
let mithrilSword2 = cooperSword2 / 2;

let someofSword2 = cooperSword2 + steelSword2 + mithrilSword2;
console.log(someofSword2); 


let cooperSword3 = 16;
let steelSword3 = cooperSword3 *2;
let mithrilSword3 = cooperSword3 / 2;

let someofSword3 = cooperSword3 + steelSword3 + mithrilSword3;
console.log(someofSword3) */


function swordsCountMedthod(cooperSword) {

    let steelSword = cooperSword *2;
    let mithrilSword = cooperSword / 2;

    let someofSword = cooperSword + steelSword + mithrilSword;
    console.log(someofSword)
}

swordsCountMedthod(32);
swordsCountMedthod(28);
swordsCountMedthod(16);
