function imprimeHola (){
    console.log ("Hola")
}


function main () {
    console.log ("Starting...");
   
    const title = document.querySelector ("h1")
    title.addEventListener("pointerenter", imprimeHola)
    
    const elements = Array.from(document.body.querySelectorAll("*")); //con esta forma no es necesario hacer crear los const innecesarios.
    
    //const elements = document.body.querySelectorAll("*") 
    //for (let item of elements) {item.addEventListener("pointerenter",()=>{console.log("POP!")})}  14 y 15 funciona

//    const counters = elements.map(
//        (item)=>{
//            return{ 
//                element: item,
//                counter: 0,
//            }
//        }
//    ); console.log(counters);
//}    17-25 no funciona

//Codigo profesor
const counters = elements.map(
    (item) => {
        const obj = {
            element: item,
            counter: 0,
        }
        item.addEventListener("pointerenter",()=>{
            obj.counter++;
            console.log(obj)
        });
        return obj
    }
)
}
//Codigo profesor
window.addEventListener("load", main);

  
