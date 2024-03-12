
//ZOO

function zoo(){
    //Crea un array zoo con al menos 5 animales.
    //Imprime el array en consola, e ir imprimiendo a cada paso:
    const zoo = ["elefante", "avestruz", "girafa", "león", "capibara"];
    console.log(zoo);

    //Añade dos al final.
    zoo.push("loro", "mono")
    console.log(zoo);

    //Pero resta uno al final.
    zoo.pop();
    console.log(zoo);

    //Cambia el tercero por otro.
    zoo[2] = "zebra"
    console.log(zoo);

    //Imprime el total de animales con la propiedad length.
    console.log("Total animales:" + zoo.length);

    //Recorre con un bucle FOR todo el array e imprímelo en consola.
    for (let i = 0; i < zoo.length; i++){
        console.log(zoo[i]);
    }    
}

function titanic(){
    //Tienes un listado con doce nombres de pasajeros para viajar en el Titanic.
    const pasajeros = ["José García", "Nuria Pelleringas", "Jose Mª Rato", "María Clau", "Kevin Brown", "Marcos Zario", "Alba Til", "Ángela Dols", "Oscar Badal", "Aitor Pérez", "Robert Muñóz", "Dario Castillo"];
    console.log("Pasajeros originales: " + pasajeros);

    //- Los dos últimos se dan de baja porque les da mala espina
    for (let i = 0; i<2; i++) {
        pasajeros.pop();
    }
    console.log("Pasajeros -2: " + pasajeros);

    //- Lo que aprovechan dos nuevos pasajeros para apuntarse.
    pasajeros.push("Susana Horia");
    pasajeros.push("Carlos Castillo");
    console.log("Pasajeros nuevos (+2): " + pasajeros);

    //- El segundo pasajero se pone enfermo y lo sustituyes por uno nuevo.
    pasajeros[1] = "Alina Gutiérrez";
    console.log("Cambio segundo pasajero: " + pasajeros);

    //- Imprimes la lista definitiva,
    for (let i = 0; i < pasajeros.length; i++){
        console.log(pasajeros[i]);
    }
    //te santiguas
    console.log("👍");
    console.log("👎");
    console.log("🤙");
    console.log("👏");
    console.log("🙏");


    //y les deseas buena suerte.
    console.log("¡Buena suerte!")
}