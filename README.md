# ENTREGA FINAL PROYECTO E-COMMERCE | REACTJS CODERHOUSE

Para este proyecto desarrollé un e-commerce de productos para mascotas

## Utilicé

* FireBase para traer los datos de los productos
* Form Hook para el formulario del CheckOut
* Maps de google y links a redes sociales dentro del Footer
* SweetAlert


## Cuenta con 
* Header con carrito contabilizado
* NavBar que permite navegar entre categorías
* Cuerpo de la página desde donde se visualizan todos los productos y se puede acceder a la descripción de c/u para agregarlos al carrito. Si al momento de querer agregar un producto al carrito la cantidad seleccionada debe ser mayor a 0.
* Footer con links a redes sociales, Mapa de google con ubicación ficticia y medios de pagos aceptados. 

## Carrito

Por cada producto que se cargue desde el detalle de los mismos, se activará un SweetAlert que indica fueron cargados en el carrito.
Dentro del carrito visualizaremos el paso previo al CheckOut con:

-> Contenedor del producto donde se ve el precio individual, cantidad de unidades añadidas y precio total junto con un botón de "Eliminar" en caso de ser necesario.

-> Precio total de todos los productos añadidos 

-> Boton de Confirmar que dirige al CheckOut y botón de Vaciar Carrito

## CheckOut

En el Checkout se encuentra el formulario de carga de datos del usuario y # de tarjeta, el cual no permitirá continuar sin que todos los campos contengan datos.
También un resumen de los productos del carrito y nuevamente el precio total.

Al confirmar la compra, se activa SweetAlert el cual nos trae el numero de orden de la compra y se vacía el carrito.

Tanto el número de orden como los productos agregados al carrito y los datos del form una vez se finalice la compra quedan almacenados en en LS.

## Link a video de funcionamiento 

https://www.loom.com/share/45070d4e785a4f3fa86e423009a66e8f?sid=0f76e445-3ce6-4851-b3c3-8dd4ca482972