const esperarISaludar = (nom, callback) => {

    setTimeout(() => { callback(nom)  }, 2000); 
}

esperarISaludar("Anna", saludar = (nom) => console.log(`Hola ${nom}`))

