//variables

var a;  
var b  = 'b';
b = 'bb'
var a = 'aa';

//global scope
var fruit = 'apple';

console.log(fruit);

function best(){
    console.log(fruit);
}

best();

function countries(){
    country = 'colombia';
    console.log(country);
}


countries();

console.log(country);
