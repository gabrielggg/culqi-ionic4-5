import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Events } from '@ionic/angular';

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

  constructor(public http: HttpClient, private events: Events) {
    document.addEventListener ('payment_event', (token: any) => {
      // Capturamos el token que se creo
      let token_id = token.detail;
      let x: any;
      console.log(token_id);
      // URL de API
      let url = `https://urldemiserver.com/?message=${token_id}`;
      

      /*
        Disparamos este evento para que mientras el pago se procese, 
        un loading cargue la pantalla principal y no se pueda hacer nada
      */
      this.events.publish ('on_event_loading_pago', "xdxd");
//llamado a tu servidor
      this.http.get(url).subscribe (
        (response) => {
          // Si el pago se realiza, disparamos este evento
          x = JSON.parse(JSON.stringify(response));
          console.log(x.id);
          if (x.id) {
          this.events.publish ('on_event_pago', response);
          //alert(response);
          console.log('transacción exitosa!');
          } else {
              console.log('error en el pago transacción rechazada');
          }
        }, error => {
          // Si el pago tiene algun error, disparamos otro evento con el error
          this.events.publish ('on_event_pago_error', error);
          alert('error de comunicación verifica tu conexión a internet');
        });
    }, false);

}

initCulqi () {
// Ingresa la "Puclic Key" que te da Culqi aqui
Culqi.publicKey = '************';
Culqi.container = 'check';
}

cfgFormulario (descripcion: string, cantidad: number) {
this.settings.title = 'Culqi - Ionic';
this.settings.currency = "PEN";
this.settings.description = descripcion;
this.settings.amount = cantidad;
Culqi.options({
  modal: true
});
Culqi.settings ({
title: 'Culqi - Ionic',     // Nombre de la empresa
currency: 'PEN',
description: descripcion,
amount: cantidad
});
}

open () {
console.log('abriendo');
Culqi.open ();
}
}
