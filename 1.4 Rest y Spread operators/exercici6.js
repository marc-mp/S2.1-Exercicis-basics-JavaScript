
const persona = { nombre : "Juan", Apellido: "sanchez"}
const direccion = { calle : "Pizarro", numero: 23, ciudad: "Barcelona"}
const usuario = {...persona, ...direccion}

console.log(usuario)
