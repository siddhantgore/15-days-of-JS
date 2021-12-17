//Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

const str = 'JavaScript';

function getTheGapX(str) {
    // write your solution here
    let pos = [];
    let c = 0;
    array = str.split("");

    for (let i = 0; i < array.length; i++) {
        if (array[i] == "X") {
            pos[c] = i;
            c++;
        }
    }

    return pos.length > 0 ? ((str.substring(pos[0], pos[pos.length - 1]).length)) : -1;

}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
