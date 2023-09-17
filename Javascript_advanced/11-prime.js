function countPrimeNumbers() {
    var primeNumbers = 0;
    for (var i = 2; i <= 100; i++) {
        let prime = true;
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
            }
        }
        if (prime) primeNumbers++;
    }
    return primeNumbers;
}
const Triggertime = performance.now();
for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        countPrimeNumbers();
    }, 0);
}
const Terminationtime = performance.now();
const executionTime = Terminationtime - Triggertime;
console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);