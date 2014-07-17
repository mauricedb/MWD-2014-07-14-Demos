for (var prime = 1; prime < 100000; prime++) {
    var isPrime = true;
    for (var i = 2; i < prime - 1; i++) {
        if (prime % i === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        //$("<li>").text(prime).prependTo("#primes");
        postMessage(prime);
    }
}