function countDigitsInFactorial(n) {
    if (n < 0) {
        return 0;
    }
    if (n <= 1) {
        return 1;
    }
    let x = n * Math.log10(n / Math.E) + Math.log10(2 * Math.PI * n) / 2.0;
    return Math.floor(x) + 1;
}

// Driver Code
console.log(countDigitsInFactorial(1));
console.log(countDigitsInFactorial(5));
console.log(countDigitsInFactorial(10));
console.log(countDigitsInFactorial(120));
