/*const op=require('./ejercicio1')
op.suma(5,10)
op.resta(20,10)
op.mult(50,2)
op.div(30,10)
op.pot(5,2)
op.rad(9)
console.log(op)

const ope=process.openStdin();
{
console.log(`La opcion escogida es ${dato.toString()}`)


const  num1 =process.openStdin();
const num2=proceess.openStdin();
console.log(`num1 ${num1} y ${num2}`);
})*/

// 1. Requerir el modulo http
const http = require(`http`)

//Funcion callback para manejar el servidor 
function handleServer(req, res){
    res.writeHead(404,{"Content-type": 'text-html'})
    res.write(`<h1>Esta es la respuesta del servidor</h1>`)
    res.end()
}

//2. Crear el server 
const server = http.createServer(handleServer).listen(5000)