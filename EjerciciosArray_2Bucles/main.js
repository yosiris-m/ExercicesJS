"use strict";
//exercise1
function get100Numbers (){
    const numbers = [];
    for (let i= 1; i <= 100; i++){    
        numbers.push(i);
    } 
    return numbers;
}

//loguear los numeros de uno en uno//
let nums = get100Numbers();
for(const n of nums){
    console.log(n)
}

//exercise2
function getReversed100Numbers (){
    return get100Numbers().reverse();
}  
  
//console.log(getReversed100Numbers());

let numer = getReversed100Numbers();
for (const n of numer) {
    console.log(n);
}


//exercise3
/*const lostNumbers = [4, 8, 15, 16, 23, 42]; 

function bestLostNumber() {
    const lostNumbersPar = [];

    for ( const m of lostNumbers) {
        if (m % 2 == 0){
            console.log(m)
        }
        return lostNumbersPar().push(n);
    }

}*/


/*Exercise4
Proceso1
 1. Cuando cargue la pagina debo pintar el listado de tarea.
 2. Escuchar un evento sobre las tareas pintadas.
 
 Proceso2
 1. Cuando la usuaria haga click: 
    - optener el iput clicado o recoger el elemento clicado
   - Modificar los datos(el estado de la tarea)
   - volver a pintar mis tareas
   - Escuchar eventos. */
   const ulElement = document.querySelector(".js-list");

   const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];


  function painTasks(){
      let html = "";
      let className = "";
      let checked = "";
     for(let i = 0; i< tasks.length; i++){
         let task = tasks[i];
        
        if(task.completed === true){
            className = "crossout";
            checked = "checked";
        }else{
            className="";
            checked = "";
        }
{
}        
        html += `<li class="${className}">`
        html += `<input class="js-checkbox" type="checkbox" value="${i}" ${checked}/>`;
        html += `${task.name}</li>`;
     }
     ulElement.innerHTML = html 
     listenClick();

;}
  function  listenClick(){
    const checkboxElements = document.querySelector(".js-checkbox");
    for(let i= 0; i < checkboxElements.length; i++){
          checkboxElements[i].addEventListener("change",handlerCheck)
    }

 }    
      function handlerCheck(evt){
          console.log(evt.target.value);
          const clicked = evt.target.value;
          tasks[clicked].completed = !tasks[clicked].completed;
          //console.log(tasks);
          painTasks();
      }
 
     painTasks();































// ejercicio2
/*for (const n of getReversed100Numbers()) {
    console.log(n); //esta es otra forma mas sensilla.
}*/

/*function getReversed100Numbers2 (){
    const num5 = get100Numbers();
    num5.reverse();
    return num5;
}  
  
console.log(getReversed100Numbers2());



function hello (){
    return "hola";
}

function helloName (){
    return hello();
} 
*/






