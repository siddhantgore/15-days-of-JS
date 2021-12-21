//Return the N-th value of the Fibonacci sequence

function fibonacci(n) {
	// write your solution here
    array=[]
    a=0,b=1
    c=0

    for (i=2;i<=n;i++){
        c=a+b
        a=b
        b=c
 
    }

    return n ? b : a;
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`)
