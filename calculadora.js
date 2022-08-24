var numeroUno=parseInt(prompt("Ingrese el primer numero: "));
var numeroDos=parseInt(prompt("Ingrese el segundo numero: "));

while(numeroUno <= numeroDos){
    for(var x=1; x<=10; x++){
        console.log(x+" x "+numeroUno+" = "+x*numeroUno);
    }
    console.log("-------");
    numeroUno++;
}