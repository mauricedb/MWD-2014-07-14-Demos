(function () {
    "use strict";


    //function iterator(data, fn) {
    //    for (var i = 0; i < data.length; i++) {
    //        if (data[i]) {
    //            fn(data[i]);
    //        }
    //    }

    //}

    //var data = [1, 2, 3, 4, 5];
    //data[10] = 10;

    //var sum = 0;
    ////for (var i = 0; i < data.length; i++) {
    ////    if (data[i]) {
    ////        sum += data[i];
    ////    }
    ////}
    ////iterator(data, function (item) { sum += item });
    ////data.forEach(function (item) { sum += item });
    //sum = data.reduce(function (prev, item) { return prev + item }, 0);

    //console.log("The sum is:", sum);

    //var product = 1;
    ////for (var i = 0; i < data.length; i++) {
    ////    if (data[i]) {
    ////        product *= data[i];
    ////    }
    ////}
    ////iterator(data, function (item) { product *= item });
    ////data.forEach(function (item) { product *= item });
    //product = data.reduce(function (prev, item) { return prev * item }, 1);

    //console.log("The product is:", product);



    //function outer() {
    //    var now = new Date();
    //    var counter = 0;
    //    return function () {
    //        counter++;
    //        console.log("In inner at", now, counter);
    //    }
    //};

    //var fn = outer();
    //console.log("After outer");
    //fn();
    //fn();
    //fn();
    //fn();


    //var o = {

    //    x: 123,
    //    f: function () {
    //        console.log(this);
    //        console.log(this.x);
    //    }
    //};

    //var o = {

    //    x: 123,

    //};

    ////var _this = o;
    ////o.f = function () {
    ////    console.log(_this);
    ////    console.log(_this.x);
    ////}

    //o.f = (function () {
    //    console.log(this);
    //    console.log(this.x);
    //}).bind(o);

    //o.f();

    //var f2 = o.f;

    //f2.call({ x: 789 })
    ////f2();

    //var o2 = {};
    //o2.f = o.f;
    //o2.f();


    //var a1 = [1, 2];
    //var a2 = [3, 4];
    //var a3 = [5, 6];

    ////a1.push(a2);
    //Array.prototype.push.apply(a1, a2);
    //console.log(a1);
    //console.log(a2);
    //console.log(a3);




    function add() {
        var sum = 0;
        //for (var i = 0; i < arguments.length; i++) {
        //    //sum += (+arguments[i]);
        //    sum += parseInt(arguments[i], 10);
        //}
        [].forEach.call(arguments, function (item) {
            sum += (+item);
        });
        return sum;
    }

    console.log(add(1));
    console.log(add(1, 2));
    console.log(add(1, 2, 3));
    console.log(add(1, "2", 3));
    console.log(add(1, "010", 3));

}());