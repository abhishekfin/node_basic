var util = require('util');
var events  = require('events');
var Person =function(name){
  this.name=name;
};
util.inherits(Person,events.EventEmitter);

var abhi = new Person("abhi");
var james = new Person("james");
var naruto = new Person("naruto");
var people =[abhi,james,naruto];


people.forEach(function(person){

    person.on('speak',function(msg){
    console.log(person.name +" said " + msg );
    })
})

james.emit('speak','wow');
naruto.emit('speak','Rasengan');
abhi.emit('speak','its working');

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent',function(msg){
    console.log(msg);
})
myEmitter.emit('someEvent','the event was emitted');


var stuff=require('./stuff');
console.log(stuff.counter(5));
console.log(stuff.adder(5,8));
console.log(stuff.pi);





