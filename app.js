//Calculadora de precios

let cervezas = Number(prompt("ingresa cuantas cervezas lleveras"));
let precio = 5;
let compra = cervezas * precio;
let descuento = compra * 0.15;
let precioFinal = compra - descuento;

if (cervezas <= 5) {
  alert("El precio final sera " + compra);
} else if (cervezas <= 10) {
  alert(
    "Felicidades tienes un descuento del 15% de " +
      descuento +
      " Y el precio final sera de " +
      precioFinal
  );
  while (cervezas >= 5) {
    alert("Recibe una bolsa de hielo gratis");
    break;
  }
}
