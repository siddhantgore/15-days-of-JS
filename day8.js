//Write a function to check if an object is empty or not in javaScript?

const obj = { key: 1 };

function isEmpty(obj) {
    // write your solution here
    let flag
    if(Object.keys(obj).length === 0 && obj.constructor === Object?true:false){
        flag=true
    }

    else{
        flag=false
    }

    return  flag
}

console.log(`is empty object: ${isEmpty(obj)}`)
