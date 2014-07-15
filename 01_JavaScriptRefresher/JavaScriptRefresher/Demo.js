

//var x = 0.1 + 0.1 + 0.1;
//console.log(x);

//var fn = function () { };


//var obj = {
//    data: [1, "", { x: 1 }],
//    now: new Date(),
//    fn: function () {
//        alert("Hello");
//    }
//};

//obj.data[10] = "Element 10";

//console.log(obj);

//console.log(obj.data[10]);
//console.log(obj.data[9]);
////obj.fn();


////var x = [1];

////if (x.length) {
////    console.log("true");
////} else {
////    console.log("False")
////}



////1 == NaN
//if (true == "true") {
//    console.log("true");
//} else {
//    console.log("False")
//}


//if (1 === 1) {
//    console.log(" === true");
//} else {
//    console.log(" === False")
//}


//var o = {};

//if (!!o) {

//}

//var d = new Date(2014, -155, -131);
//console.log(d);



function test() {
    "use strict";
    //alert(x1);
    var x1 = 2;
    //alert(x1);
}


test();

//alert(x1);



(function () {
    "use strict";
    var x = 1;

    var myFunc = function () { };


    window.globalFn = function () { };
}());

//myFunc();
globalFn();



function outer() {
    var o = { x: 1 };

    inner();
    o.x = 12
    inner();
    o = {};
    inner();

    function inner() {
        var innero = 1;
        console.log(o.x, innero);
    }

    console.log(o.x);
}


outer();