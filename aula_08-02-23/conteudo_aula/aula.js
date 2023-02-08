var zoo = [
    "Leão",
    "Girafa",
    "Tigre",
    "elefante",
    "Jacaré"
]

console.log(zoo);
console.log(zoo[1]);


//push() é usado para adicionar um elemento no final do seu array
zoo.push("Cobra");

for(i = 0; i < zoo.length; i++){
    console.log(`O animal na jaula ${i + 1} é o ${zoo[i]}`);
}


//zoo.forEach(animal => console.log(`O animal é o ${animal}`))