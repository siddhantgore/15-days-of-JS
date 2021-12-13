//generate a random number within given range 

//here start is inclusive and end is exclusive

function randomNumber1(start,end){
    let num;
    num=Math.floor((Math.random()*(end-start)+start));
    return num;
    
}
console.log(randomNumber1(1,20));

//here start is inclusive and end is inclusive

function randomNum2(start,end){
    let num;
    num=Math.floor((Math.random()*(end-start+1)+start));
    return num;
}
console.log(randomNumber1(1,20));

