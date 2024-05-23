
class Person {
    constructor (name) {
        this.name = name
    }

    greet = () => console.log(`hola ${this.name}`)  
}

const personas = [new Person ("Juan"),]
SaludarPersonaActual = `${personas[0].greet()}`












