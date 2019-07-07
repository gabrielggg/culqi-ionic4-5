import { Component , OnInit } from '@angular/core';
import { PagoService } from '../services/pago.service';
import { AlertController, Events} from '@ionic/angular';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  monto: number;

  constructor(  private pago: PagoService,
                public events: Events,
                private alertCtrl: AlertController,
                public loading: LoadingService) {}

  ngOnInit() {}

  openCheckout() {

    this.loading.present ();
    this.pago.initCulqi ();
    this.pago.cfgFormulario ('Pago por servicio', this.monto * 100);
    // Cuando la configuracion termina, llamo al metodo open () para abrir el formulario 
    this.loading.dismiss ();
    this.pago.open ();

  }

}
