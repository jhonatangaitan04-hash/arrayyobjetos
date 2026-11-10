function lista(){console.log("Ejercicio 1. Lista de estudiantes crear un arreglo que almacene cinco nombres de estudiantes.el algoritmo debe:1. Mostrar el arreglo completo. 2. Mostrar el primer estudiante. 3. Mostrar el tercer estudiante. 4. Mostrar el último estudiante utilizando length. 5. Mostrar la cantidad total de estudiantes 6. Recorrer el arreglo utilizando for y mostrar cada estudiante junto con su posición. 7. Solicitar el nombre de un nuevo estudiante y agregarlo al arreglo. 8. Mostrar nuevamente la cantidad de estudiantes. 9. Consultar si un estudiante específico se encuentra registrado. 10. Mostrar el listado actualizado.");

let s = ["Yenmanueles", "Juan jose","Erith", "Evelyn","Julian","Paula","Erika","Richard","daniel","andres"];

alert(s);
console.log(s);

alert("el primer estudiante del arreglo");
console.log("el primer estudiante del arreglo");

alert(s[0]);
console.log(s[0]);

alert("el tercer estudiante del arreglo");
console.log("el tercer estudiante del arreglo");
alert(s[2]);
console.log(s[2]);

alert("el ultimo estudiantes del arreglo es:");
console.log("el ultimo estudiantes del arreglo es:");
alert(s[s.length - 1]);
console.log([s.length - 1]);

alert("cantidad de estudiantes: "+s.length);
console.log("cantidad de estudiantes: "+s.length);

for (let i = 0; i < s.length; i++) {

  alert("Posisción: "+i+" Estudiante: "+s[i]);
  console.log("Posisción: "+i+" Estudiante: "+s[i]);

let ne = prompt("ingrese el numbre del nuevo estudiante:");
// nuevo estudiante
  
s.push(ne);

alert("cantidad de estudiantes actualizado:"+s.length);
console.log("cantidad de estudiantes actualizado: "+s.length); 

let buscar = prompt("ingresa el nombre del estudiante que deseas buscar:")

if(s.includes(buscar)){

    alert("el estudiante esta registrado");

}else{alert("el estudiante no esta registrado");

}
alert("listado actualizado: "+s);

}




}


function productos(){

let p = ["balon","canilleras","guayos","conjunto","tenis"];
// variable productos

alert("productos registrados: "+p);
console.log("productos resgistrados "+p);

p[1] = "sudadera";

let pf = prompt("ingresa el producto que ira al final de la lista:");
// producto final (producto que ira al final de la fila ingresado por el usuario)

p.push(pf);

let pi= prompt("ingresa el producto que ira de primero en la lista:");
// producto inicial, producto que ahora estara de primero en la lista

p.unshift(pi);

alert("producto actualizado: "+p);
console.log("producto actualizado: "+p);

let buscar = prompt("dame el nombre del producto a busca:");

if(p.includes(buscar)){

    alert("el producto est aregistrado");
    console.log("el producto est aregistrado");

}else{

    alert("el producto no esta registrado");
console.log("el producto no esta registrao");
}

let posicion = p.indexOf(buscar);

if(posicion !== -1){

    alert("el producto esta en la posicion: "+posicion);
    console.log("el producto esta en la posicion: "+posicion);


}else{

alert("producto no encontrado");

}

let pm = parseInt(prompt("ingrese la posicion del producto que desea modificar:"));
// posicion a modificar
let nm = prompt("dame el nombre del nuevo producto:");
// nuevo nombre

if(pm >= 0 && pm < p.length){

p[pm] = nm;

alert("producto modificado correctamente!");
console,log("roducto modificado correctamente!");

}else{

alert("posicion no exixtente!");
console.log("posicion no exixtente!");

}
alert("se eliminara el ultimo producto");

p.pop();

alert("cantidad de productos: "+p.length);
console.log("cantidad de productos: "+p.length);

alert("listado final "+p);
console.log("listado final "+p);



}


function eliminacion(){

let cities = ["bogota","medellin","cucuta","leticia","bucaramanga","tolima"];

cities.pop();

alert("ciudades actualizadas: "+cities);
console.log("ciudades actualizadas: "+cities);

cities.shift();
cities.splice(2,1);

alert("resultado despues de la eliminacion: "+cities);
console.log("resultado despues de la eliminacion: "+cities);

cities.push("cali","manizales");

alert("ciudades actualizadas: "+cities.length);
console.log("ciudades actualizadas: "+cities.length);

for (let i = 0; i< cities.length; i++) {

alert("ciudad "+(i + 1)+":"+cities[i]);

let buscar = prompt("Ingrese el nombre de la ciudad que desea buscar:");

if(cities.includes(buscar)){

alert("la ciudad se encuentra registrada");
console.log("la ciudad se encuentra registrada");

}else{
alert("la ciudad no se encuetra registrada");
console.log("la ciudad no se encuetra registrada");

}
    
}

}


function busqueda(){

let es = ["morgan","yami","asta","yuno","dragh","sharmmy","luck","magna"];
// variable estudiantes

let nb = prompt("dame el nombre del estudiante que deseas buscar:");
//variable nombre buscado

if(es.includes(nb)){
//comprueba si el nombre está en el arreglo

let p = es.indexOf(nb);
// variable posiscion,obtiene su posición dentro del la lista del array

alert("importante ¡todos los nombres deben ser ingresados en minusculas!");
console.log("importante ¡todos los nombres deben ser ingresados en minusculas!");

alert("el estudiante se encuentra en la lista");
console.log("el estudiante se encuentra en la lista")

alert("la posicion en la lista es: "+p);
console.log("la posicion en la lista es: "+p);

}else{
//muestra un mensaje si no existe.
alert("el estudiante no se encuntra en la lista");

}
let sn = prompt("ingresa el segundo nombre a buscar en la lista:");
// variable segundo nombre, la segunda busqueda de nombre del la lista de array

if(es.includes(sn)){

let sp = es.indexOf(sn);
// variable segunda posicion

console.log("segundo estudiante encontrado");
alert("segundo estudiante encontrado");

console.log("la posicion de segundo estudiante es: "+sp);
alert("la posicion de segundo estudiante es: "+sp);


} else {
alert("segundo estudiante no encontrado");
alert("recuerda que tos nombres a buscar deben estar escritos en minusculas¡");
console.log("segundo estudiante no encontrado");
}

let lt = prompt("dame la letra  para buscar en las filas:");
//variable letra, aqui se busca cuantos nombres comiensa por la letra ingresada por el usuario

c = 0;
// contador, contara el numero de nombres que comiensan por la letra a buscar

for (let i = 0; i < es.length; i++) {

if(es[i].toLowerCase().startsWith(lt.toLowerCase())){
// aqui se establese un condicional para determonar mediante (startsWith) que busca caracteres espesificos en cadenas de texto
// y usamos(toLowerCase) para pasar cadenas de texto mayusculas a minusculas

c++;
}{

}
alert("Cantidad de estudiantes que comienzan por esa letra:");
console.log("Cantidad de estudiantes que comienzan por esa letra:");
alert(c);
console.log(c);

console.log("listado de estudiantes:");

for (let i= 0; i < es.length; i++) {

console.log((i+1)+"."+es[i]);
    
}

let nw = prompt("Ingrese el nombre del estudiante que desea registrar:");
// variable nuevo estudiante, se pedira que se ingrese otro estudiante

if(!es.includes(nw)){

es.push(nw);

console.log("nuevo estudiante ingresado correctamente");

}else{
console.log("Este estudiante ya se encuentra registrado");

}
console.log("listado actualizado");

for (let i = 0; i < es.length; i++) {

console.log((i + 1)+"."+es[i]);

    
}
console.log("total de estudiantes:");
console.log(es.length);


}
}




function analisisDeNumeros() {
let num = [33,-2,45,67,-88,-4,54,98,21,-12,0];
// variable numero

for (let i = 0; i < num.length; i++) {
    
console.log(num[i]);
}
let s = 0;
// variable suma, sumara los numeros del arreglo dentro de for

for (let i = 0; i < num.length; i++) {
s = s + num[i];

}
console.log("el resultado de la suma de los numeros es: "+s);

let pr = s / num.length;
// variable promedio, aqui se divide la suma de los numero en la cantidad de numeros que se tiene el array

console.log("el promedio de la suma de numeros es: "+pr);

let pa = 0;
//variable pares, aqui se almacenaran los numeros pares del contador
let im = 0;
// variable impares, aqui se almacenaran los numeros impares del contador

for (let i = 0; i < num.length; i++) {

if(num[i] % 2 === 0){

pa++

}else{

im++

}
}
console.log("cantidad de numeros pares: "+pa);
console.log("cantidad de numeros impares: "+im);

let ma = num[0];
// variable mayor, aqui se guardara el numero mayor del array
let me = num[0];
// variable menor, aqui se guardara el numero menor del array

for (let i = 1; i < num.length; i++) {

if(num[i] > ma){
ma = num[i];

}if(num[i] < me){
me = num[i];

}
}
console.log("el numero mayor: "+ma);
console.log("el numero menor: "+me);

let p = 0;
// variable positivo, guardara la cantidad de numeros positivos del array
let n = 0;
//variable negativo, guardara la cantidad de numeros negativo del array
let c = 0;
// variable cero, guardara la cantidad de numeros ceros del arreglo

for (let i = 0; i < num.length; i++) {

if(num[i] > 0){

p++;

}else if(num[i] < 0){

n++;

}else{

c++;
}
}
console.log("cantidad de numeros positivos: "+p);
console.log("cantidad de numeros negativos: "+n);
console.log("cantidad de numeros cero(s): "+c);

console.log("numeros mayores que el promedio:");

for (let i = 0; i < num.length; i++) {
  
if(num[i] > pr){
  
console.log(num[i]);
}
}
let nb = Number(prompt("dame el numero a buscar:"));
// variable numero buscado, aqui se buscara un numero en especifico

if(num.includes(nb)){

console.log("el numero si se encuentra en el arreglo");

}else{

console.log("el numero no se encuentra en el arreglo");
}

let ni = [...num].reverse();
// v. numero inverso,(reverse) coloca los numero en orden inverso

console.log("numeros en orden inverso:");
console.log(ni);

let no = [...num].sort((a, b) => a - b);
//v. numeros ordenados,se usara (sort) para ordenat los numero del array

console.log("numeros ordenados de menor a mayor:");
console.log(no);

console.log("arreglo original:");
console.log(num);

console.log("arreglo inverso:");
console.log(ni);

console.log("arreglo ordenado:");
console.log(no);

}



function gestionMterias() {
    
    //arreglo que almacene al menos ocho elementos relacionados con el contexto
    let materiasEduTrace = ["Matemáticas","Física","Español","Biología","Inglés","Sociales","Química","Informática"];
    console.log("Arreglo inicial de materias");

    console.log("MOSTRAR ELEMENTOS Y CONSULTAR POR ÍNDICE");
    // 2. Mostrar todos los elementos registrados y consultar elementos mediante su índice
    console.log("Primera materia (Índice 0):");
    console.log(materiasEduTrace[0]);
    
    console.log("Tercera materia (Índice 2):");
    console.log(materiasEduTrace[2]);

    console.log("CANTIDAD DE ELEMENTOS CON length");
    // 3. Mostrar la cantidad de elementos almacenados utilizando length
    console.log("Total de materias registradas en el plan de estudios:");
    console.log(materiasEduTrace.length);

    console.log("RECORRIDO DEL ARREGLO CON BUCLE FOR");
    // 4. Recorrer el arreglo utilizando un bucle y presentar la información de cada elemento
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log(`Posición [${i}]: ${materiasEduTrace[i]}`); 
    }

    console.log("AGREGAR NUEVOS ELEMENTOS (push / unshift)");
    // 5. Permitir agregar nuevos elementos al arreglo utilizando push() o unshift()
    materiasEduTrace.push("Ética y Valores");
    materiasEduTrace.unshift("Filosofía");
    console.log("Materias actualizadas tras agregar elementos al inicio y al final:");
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log(`Posición [${i}]: ${materiasEduTrace[i]}`);
    }

    console.log("MODIFICAR UN ELEMENTO EXISTENTE");
    // 6. Modificar un elemento existente indicando su posición
    console.log("Antes de modificar en el índice 3:");
    console.log(materiasEduTrace[3]);
    
    materiasEduTrace[3] = "Biología Avanzada";
    
    console.log("Después de modificar en el índice 3:");
    console.log(materiasEduTrace[3]);

    // 7. Eliminar elementos utilizando pop(), shift() o splice()
    let eliminadoPop = materiasEduTrace.pop();
    console.log("Materia eliminada del final con pop():");
    console.log(eliminadoPop);

    let eliminadoShift = materiasEduTrace.shift();
    console.log("Materia eliminada del inicio con shift():");
    console.log(eliminadoShift);

    let eliminadoSplice = materiasEduTrace.splice(2, 1);
    console.log("Materia eliminada en el índice 2 con splice():");
    console.log(eliminadoSplice[0]);

    // 8. Implementar una búsqueda utilizando includes() o indexOf()
    let materiaBuscada = "Física";
    let existeMateria = materiasEduTrace.includes(materiaBuscada);
    
    console.log(`¿La materia "${materiaBuscada}" se encuentra registrada?:`);
    console.log(existeMateria);
    
    if (existeMateria) {
        let posicionEncontrada = materiasEduTrace.indexOf(materiaBuscada);
        console.log("Su posición exacta (índice) es:");
        console.log(posicionEncontrada);
    }

    // 9. Mostrar un listado actualizado después de realizar las operaciones
    console.log("Listado final de materias activas:");
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log(`${i + 1}. ${materiasEduTrace[i]}`);
    }

    // 10. Incorporar al menos dos funcionalidades adicionales que aporten valor
    console.log("Funcionalidad 1 - Cantidad total de materias vigentes:");
    console.log(materiasEduTrace.length);

    console.log("Funcionalidad 2 - Listado ordenado alfabéticamente (sort):");
    let materiasOrdenadas = [...materiasEduTrace].sort();
    for (let i = 0; i < materiasOrdenadas.length; i++) {
       console.log(`- ${materiasOrdenadas[i]}`);
    }

}






// INTRODUCCION A OBJETOS EN JAVASCRIPT


function inventarioDeProductos(){

console.log("producto #1");

const portatil = { 

     nombre : "portatil", 
     marca : "dell",
     precio : 2200000,
     cantidad : 43
}
console.log("producto #2")

const celular = {
     nombre : "celular",
     marca : "xiaomy 13 pro plu",
     precio : 1200000,
     cantidad : 37
}

console.log("producto #3")

const producto = {

    nombre : "portatil",
    marca : "dell",
    precio : 2200000,
    cantidad : 43
}

    console.log(producto.nombre);
    console.log(producto.marca);
    console.log(producto.precio);
    console.log(producto.cantidad);
    console.log(producto.nombre);
    console.log(producto);

}



function registro(){

const estudiante = {
    nombre : "jhonatan",
    apellido : "gaitan",
    edad : 33,
    programa : "analisis y desarrollo de software",
    ficha : 453368,
    correo : "jhonnaa04gmail.com" 
}

console.log("informacion del estudiante: ");
console.log(estudiante);

console.log("el nombre del estudiante es: ",
    estudiante.nombre
);
console.log("el apellido del estudiante es: ",
    estudiante.apellido
);
console.log("el programade formacion del estudiante es: ",
    estudiante["programa"]
);
console.log("edad antes de la modificacion: ",estudiante.edad);

estudiante.edad =  34; //aqui se modifico la propiedad del objeto edad

console.log("edad despues de la modicacion:",estudiante.edad);

console.log("se agregara una propiedad llamada ciudad al objeto estudiante:");

estudiante.ciudad = "bogota"; // aqui se agrego la propiedad ciudad al objeto estudiante

console.log("lista actualizada:",estudiante);

console.log("se eliminara la propiedad correo del objeto:");

delete estudiante.correo; // se elimino la propiedad correo del objeto estudiante

console.log("propiedad del estudiante:");

for (let propiedad in estudiante) {
   console.log(`${propiedad}: ${estudiante[propiedad]}`);};
   console.log("lista actialisada del estudiamte:");
   console.log(estudiante);


}

function gestionar(){
    const persona = {
        nombre : "jhonatan",
        edad : 34,
        genero : "masculino",
        saludar: function(){
            console.log("Hola soy "+ this.nombre+" y tengo "+this.edad+" años.");

        }


    }
    persona.saludar();

}



function gestorDeProducto(){

const producto={
nombre:"teclado",
precio:320000,
cantidad: 26,
mostrarInfo: function(){
console.log("INFORMACION DEL PRODUCTO:");
console.log("nombre del producto: "+this.nombre);
console.log("precion del producto: $"+this.precio),
console.log("disponibilidad del producto: "+this.cantidad);
console.log("valor total del inventario: "+(this.precio*this.cantidad));

}

}


producto.mostrarInfo();

}


function resgistroDeProducto(){
let productos={
    codigo: 3377,
    nombre: "latitu 7420",
    categoria: "empresarial",
    precio:2300000,
    cantidad: 17,
    mostrarInfo: function(){
        console.log("prouctos rudos a un costo de: $"+2000000);
        console.log("con cuerpo de fibra de carbono asi es el "+this.nombre);
        console.log("el "+this.nombre+" es de categoria "+this.categoria);
        console.log("animate que el "+this.nombre+" sola queda disponibles "+this.cantidad+" unidades");
       
    }
   
    
}


console.log("informacion general del producto.");
 console.log(productos);
 console.log("valor del total del inventario: $"+productos.precio*productos.cantidad);
 console.log("informacion actualizada:");
 console.log(productos);
 console.log(productos.marca = "dell");
 productos.mostrarInfo();

        




}

function gestionarEmpleado(){
    const empleado = {
        nombre:prompt("dame el nombre:"),
        cargo:prompt("dame el cargo"),
        salarioMensual:parseInt(prompt("dame el salario mensual:")),
        diasTrabajados:parseInt(prompt("dame los dias trabajados:")),
        porsentajeDeDescuento:0.04,
        calcularrioSala:function(){
            let valorDia = this.salarioMensual/30;
            let salarioSd = valorDia *  this.diasTrabajados;
              return  parseInt(salarioSd) ;
        },
        calcularDescuento:function(){
           let descuento = (this.calcularrioSala() * this.porsentajeDeDescuento);
           return parseInt(descuento);
           console.log("el descuento del 4% sobre el valor debenfgado es: $"+descuento);
           console.log("el valor neto con decuento es: $"+ (this.calcularrioSala()-descuento));
        },

        calcularTotalaPagar:function(){
            let total = (this.calcularrioSala()-this.calcularDescuento());
            alert("el total a pagar sin descuento es de: $"+this.calcularrioSala());
            alert("total del descuento es: $"+this.calcularDescuento());
            alert("el total neto a pagar (con descuento) "+total);


        },

    }
    empleado.calcularTotalaPagar();
    

}











