import React from 'react';
const Prime = () => {
    function isPrime(num) {
        if (num < 2) return `not a prime number`;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return `not a prime number`;
        }
        return `a prime number`;
    }           
    const number = 7;
    const result = isPrime(number);
    console.log(result);
    return (
        <div>   
            The number {number} is {result}.
        </div>
    );
}
export default Prime;