/*Functions*/ 
/*
1. Just like a variable, we must also give a function a name...

2. after which we can pass arguements to the function...

3. and these arguments are just like variables...

4. a function can have zero or no arguements as well as multiple arguements seperated by comas...

5. a function can return something but not a must... 

6. In order to use a function, you need to call it by its name and then pass in an arguemrnt..

7. 

for example
*/ 
function calculateAge(birthYear){
    return 2020 - (birthYear);
}
var ageFirstBorn = calculateAge (1993);
var ageSecondBorn = calculateAge (1996);
var ageThirdBorn = calculateAge (1999);

console.log(ageFirstBorn, ageSecondBorn, ageThirdBorn);

// Looking at a more complex function

function yearsUntilRetirement (year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(firstName + ' Retires in ' + retirement + ' Years');
    } else {
        console.log(firstName + ' Is already retired')
    }
    
}
yearsUntilRetirement(1989, 'John');
yearsUntilRetirement(1908, 'Paul');
yearsUntilRetirement(1929, 'Judas');

// Function ststements and expressions
/*
1. In writing a fnction expression, we start writing the function directly without writing or giving it a name., 

2. We still use the function keyword and the the argument lists

3. And only then we basically assign this function to a variable

4. Example of a function declaratin looks like this 
    function WhatDoYoDo (job, firstName){}

5. Example of a function expression looks like this
    var whatDoYouDo = function (job, firstName){}
    
6. When using a switch statement inside a function and we return somthing, we do no reall need the BREAK.. 
   this is because when we use the return keywword, 
   it returns what we defines and immediatly the function also finishes execution.
   

*/ 

// function expression 
var whatDoYouDo = function (job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver' :
            return firstName + ' drives for a very big company';
        case 'designer' :
            return firstName + ' designs beatiful websites';
        default :
            return firstName + ' does something else' ;
    }
}

console.log(whatDoYouDo('teacher', 'john'));
console.log(whatDoYouDo('designer', 'joy'));
console.log(whatDoYouDo('driver', 'paul'));

// ARRAYS
/*
1. There are different ways of creating arrays, the most used one is the use of []

2. two different ways of using arrays are;
   1. var names = ['john', 'mike', 'luke'];
   2. var years = new Array = (1990, 1989, 1889);

3. Arrays are zero based or zero indexed..
*/ 

var names = ['john', 'mike', 'luke'];
var years = new Array (1990, 1989, 1889);

console.log(names);
console.log(names[1]);
console.log(names.length);


// we can change data in the array by doing,
names[2] = 'Nathaniel';
console.log(names);

// can can also add data to the array by doing,
names[3] = 'juli'; //we can even access positions that are not even there b4 
console.log(names);

names[names.length] = 'Matthew'; //this adds mathew as the las element of the array
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'Teacher', false];

john.push('blue');      //the push adds to the end of the array

john.unshift('Mr.');    //the unshift adds to the begining of the array 
console.log(john); 

john.pop() // this removes the last element from the array

john.shift() // this removes the first element from the array
console.log(john);

console.log(john.indexOf(1990)); /* this shows you the position of a particular element in the array 
                                    and if the element is not in the array it wil return -1 */
                                     
var isDesigner = john.indexOf('designer') === -1 ? ('john is not a designer' ) : console.log('john is a designer');
console.log(isDesigner);














// CHALLENGE 3
function tipCalculator (bill) {
    var percenage;
    if (bill < 50 ){
        percenage = .2;
    } else if (bill >= 50 && bill < 200){
        percenage = .15;
    } else {
        percenage = .1;
    } 
    return percenage * bill
}
var biils = [124, 48, 268];
var tips = [tipCalculator(biils[0]), tipCalculator(biils[1]), tipCalculator(biils[2])];
var finalValues = [tips[0] + biils[0], tips[1] + biils[1], tips[2] + biils[2]];
console.log(tips);
console.log(finalValues);