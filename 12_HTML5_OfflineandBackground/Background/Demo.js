$(function() {

    $("#btnStart").click(function() {

        //for (var prime = 1; prime < 50000; prime++) {
        //    var isPrime = true;
        //    for (var i = 2; i < prime - 1; i++) {
        //        if (prime % i === 0) {
        //            isPrime = false;
        //        }
        //    }
        //    if (isPrime) {
        //        $("<li>").text(prime).prependTo("#primes");
        //    }
        //}

        var worker = new Worker("primes.js");
        worker.onmessage = function(e) {
            $("<li>").text(e.data).prependTo("#primes");
        }
    });

});
