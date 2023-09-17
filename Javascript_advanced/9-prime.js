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
console.log(countPrimeNumbers());
const Terminationtime = performance.now();
const executionTime = Terminationtime - Triggertime;
console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);