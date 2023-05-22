// https://www.w3schools.com/js/js_objects.asp
const car = {
    type:"Fiat",
    model:"5000",
    color:"white",
    carStop: function stop(){
        console.log("Stop");
        // return "stop"
    }
};


x = car.carStop();
// console.log(x);

console.log(car.type);
// or
console.log(car["type"]);

