# culqi-ionic4
integrar culqi checkout con ionic 4 o ionic 5
(para versiones anteriores de ionic pueden ver este repositorio: https://github.com/alainm23/ionic-culqi)

# Ionic Culqi
Ejemplo de una pasarela de pago usando Ionic y Culqi (solo para Péru)

![Ionic Culqi Screenshot](https://github.com/alainm23/ionic-culqi/raw/master/screenshot-01.png)


## Construccion
Clona el repositorio
```
git clone https://github.com/gabrielggg/culqi-ionic4.git
cd culqi-ionic4
npm install
ionic serve
```
luego ir al browser en http://localhost:8100/home y ver la consola en las herramientas del desarrolador de chrome y podremos ver el token de culqi generado despues de submitir el form de culqi con los datos de la tarjeta con el que podremos realizar las transacciones posteriormente.
## Cosas a tener en cuenta
* Cree una cuenta en [Culqi](https://integ-panel.culqi.com/#/registro)
* Cree un comercio.
* Cambie el [Public Key](https://github.com/gabrielggg/culqi-ionic4/blob/master/src/app/services/pago.service.ts#L21) con la suyos que se optiene en el Panel de Culqi cuando ya haya creado una cuenta y un comercio.
* Use [tarjetas de pruebas](https://www.culqi.com/docs/#/desarrollo/tarjetas)
* En la parte de comunicación con el server(https://github.com/gabrielggg/culqi-ionic4/blob/5b8a2bae390c394de8c3c2a98edefb32e7d332df/src/app/services/pago.service.ts#L32) es necesario poner la dirección de nuestro servidor y recibir el query param(token) del lado del server con el nombre message en este caso(pero pueden usar el nombre que quieran) 
