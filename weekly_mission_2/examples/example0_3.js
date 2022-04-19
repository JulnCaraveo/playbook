// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
    name: "Julian",
    age: 30,
    nicknames: [
     "Tulipan",
      "Tulancingo",
      "Tulish"
    ],
    address: {
      zip_code: "10000",
      street: "Dr. Vertiz 11 Benito Juarez",
      city: "CDMX"
    },
    ajolonauta: function(){
         console.log("hola soy el ajolonauta")
    }
  }
  console.log("Ejemplo 3: Objeto con diferentes propiedades")
  console.log(myObject3)
  console.log(myObject3.name)
  console.log(myObject3["address"])
  console.log(myObject3.address.zip_code)
  console.log(myObject3.ajolonauta())