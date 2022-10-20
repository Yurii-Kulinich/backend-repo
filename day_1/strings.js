
//I - concatenation

function concatenation(string1, string2) {
console.log(string1 + string2);
}
// concatenation('first','second')
//II - lowercase

function toLowercase(stringSome) {
    console.log(stringSome.toLowerCase());
}

// toLowercase('JSHDAUDHSAS');

//IV - convert name

let twoStrings = 'first,second';

function changePlaces(stringArray) {
let array = twoStrings.split(",");
console.log(array[1] +" "+ array[0]);
}

// changePlaces(twoStrings);

//V - whitespace

function whitespaceRemover(stringSome) {
    \
   
   console.log(stringSome.replace(/[" "]/g, ""));
}

whitespaceRemover('The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?');

