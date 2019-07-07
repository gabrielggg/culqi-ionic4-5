import { Injectable } from '@angular/core';

declare let Culqi: any;
@Injectable({
  providedIn: 'root'
})
export class PagoService {
  settings: any = {
    title: '',
    currency: '',
    description: '',
    amount: 0
  };

  constructor() {

}

initCulqi () {
// Ingresa tu "Puclic Key" que te da Culqi aqui
Culqi.publicKey = 'xxxxxxxxxxxx';
}

cfgFormulario (descripcion: string, cantidad: number) {
this.settings.title = 'Culqi - Ionic';
this.settings.currency = "PEN";
this.settings.description = descripcion;
this.settings.amount = cantidad;

Culqi.settings ({
title: 'Culqi - Ionic',     // Nombre de la empresa
currency: 'PEN',
description: descripcion,
amount: cantidad
});
}

open () {
Culqi.open ();
}
}
