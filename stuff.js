var counter = function(a){
    return "Your Number is"+a;
};


var adder = function(a,b){
    return `The sum of the 2 number ${a+b}`
}

var pi = 3.14;

// module.exports.counter = c;

// //module.exports.adder = adder;

// module.exports.pi = pi;

module.exports ={
    adder:adder,
    counter:counter,
    pi:pi

}
