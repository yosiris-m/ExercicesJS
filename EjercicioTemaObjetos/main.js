
//exercise1 y 2
const adalaber1 = {
    name: "Susana",
    age: 34,
    profession: "Periodista",
    // esta es otra forma de definir la funcion
    // cuando se esta creando el objeto
    //run: () => {
        //
    //}
}
console.log(`Mi nombre es ${adalaber1.name}, 
tengo ${adalaber1.age} años y soy 
${adalaber1.profession}`);

const adalaber2 = {
    name: "Rocio",
    age: 25,
    profession: "actriz"
}
console.log(`Mi nombre es ${adalaber2.name}, 
tengo ${adalaber2.age} años y soy 
${adalaber2.profession}`);

//exercise2
adalaber1.run = () => console.log("Estoy corriendo");//esta es la forma
// moderna
adalaber1.run()
  //nombre del metodo    //nombre del parametro distance
adalaber1.runAMarathon = (distance) => {
   console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);
};

adalaber1.runAMarathon(50); // 50 es el valor del argumento "distance"
adalaber1.runAMarathon(100);//reutizando el argumento
adalaber1.runAMarathon(500);

//exercise 3
//con el ejercicio1
adalaber1.showBio = function() {
   console.log(`My name is ${this.name},I am ${this.age} years old and I am a ${this.profession}`)
}
adalaber1.showBio();

//con el exercise2
adalaber2.showBio = function() {
    console.log(`My name is ${this.name},I am ${this.age} years old and I am a ${this.profession}`) 
}
adalaber2.showBio();

//exercise 4 
const button = document.querySelector(".myButton");
button.addEventListener("click", onButtonClick);
function onButtonClick(event){
  console.log(event);
  console.log(event.type);

}

//exercise 5
const inputPrinter = document.querySelector(".myInput");
console.log(inputPrinter);
console.dir(inputPrinter);

//exercise 6
const basketPears = {}
basketPears.max = 0;
basketPears.min = 0;
basketPears.numberOfPears = 0;
basketPears.initial = 0;

basketPears.addOnePear = function () {
    this.numberOfPears = this.numberOfPears + 1;
    console.log(`add one pear to the basket: ${basketPears.numberOfPears}`);
};//if(this.numberOfPears > this.numberOfPears +1)///////

basketPears.removeOnePear = function() {
    this.numberOfPears = this.numberOfPears -1;
    console.log(`remove one pear from the basket: ${basketPears.numberOfPears}`);
}
basketPears.reset = function () {
    this.numberOfPears = this.initial;
    console.log(`set the number of pear to ${basketPears.numberOfPears}`);
};

basketPears.addOnePear();
basketPears.addOnePear();
basketPears.addOnePear();
basketPears.removeOnePear();
basketPears.removeOnePear();
basketPears.reset();

//exercise 7
const user = {};
const job = 'developer';
user.firstName ="juan";
user["lastName"] = "santos";
user.age = 34;
user["job"] = job;
console.log(user);

user.firstName = "carlos";
// user.age = user.age + 1;
user.age += 1;
console.log(user);

// example video
user.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

console.log(user.fullName())



