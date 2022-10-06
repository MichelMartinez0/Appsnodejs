/*const num1=6,num2=10;
let suma=num1+num2
console.log(`La suma entre ${num1} y ${num2} es ${suma}`);*/

//Funcion sumar por expresion
const sumar=(num1,num2)=>{
    let suma= num1+num2
    console.log(`La suma entre ${num1} y ${num2} es ${suma}`);

}




//Funcion restar por declaracion
 function restar(num1,num2){
    let resta=num1-num2
    console.log(`La resta entre ${num1} y ${num2} es ${resta}`);

}
 
 //Funcion para multiplicar
 function multiplicar(num1,num2){
    let mult=num1*num2
    console.log(`La multiplicacion entre ${num1} y ${num2} es ${mult}`);

}

//Funcion para division 
function division(num1,num2){
    let div=num1/num2
    console.log(`La division entre ${num1} y ${num2} es ${div}`);
}

//Funcion para la potencia
function potencia(num1,num2){
    let pot=Math.pow(num1,num2)
    console.log(`La potencia de ${num1} elevado a la ${num2} es ${pot}`);
}

//Funcion para la radicacion 
function radicacion(num1){
    let rad=Math.sqrt(num1)
    console.log(`La raiz de ${num1} es ${rad}`);


}

/*exports.suma=sumar
exports.resta=restar
exports.mult=multiplicar
exports.div=division
exports.pot=potencia
exports.rad=radicacion
*/

const operaciones={}
operaciones.suma=sumar
operaciones.resta=restar
operaciones.mult=multiplicar
operaciones.div=division
operaciones.pot=potencia
operaciones.rad=radicacion

/*module.*/
