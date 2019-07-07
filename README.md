# culqi-ionic4
integrar culqi checkout con ionic 4
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
luego ir al browser en http://localhost:8100/home
## Cosas a tener en cuenta
* Cree una cuenta en [Culqi](https://integ-panel.culqi.com/#/registro)
* Cree un comercio.
* Cambie el [Public Key](https://github.com/alainm23/ionic-culqi/blob/master/src/providers/pago/pago.ts#L59) y [Private Key]( https://github.com/alainm23/ionic-culqi/blob/master/src/providers/pago/pago.ts#L39) con los suyos que se optiene en el Panel de Culqi cuando ya haya creado una cuenta y un comercio.
* Use [tarjetas de pruebas](https://www.culqi.com/docs/#/desarrollo/tarjetas)
