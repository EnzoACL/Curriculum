function imprimeHola (){
    console.log ("Hola")
}


function main () {
    console.log ("Starting...");
   
    const title = document.querySelector ("h1")
    title.addEventListener("pointerenter", imprimeHola)
    
    const elements = Array.from(document.body.querySelectorAll("*")); //con esta forma no es necesario hacer crear los const innecesarios.
    
   // const elem = document.body.querySelectorAll("*") 
   // for (let item of elem) {item.addEventListener("pointerenter",()=>{console.log("POP!")})

    const counters = elements.map(
        (item)=>{
            return{
                elements: item,
                counter: 0,
            }
        }
    );
    console.log(counters);
}
  
window.addEventListener ("load",main);