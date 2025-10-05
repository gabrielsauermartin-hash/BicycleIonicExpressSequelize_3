import { Component, OnInit } from '@angular/core';
import { BicycleService } from '../services/bicycle-service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-bicycles',
  templateUrl: './my-bicycles.page.html',
  styleUrls: ['./my-bicycles.page.scss'],
  standalone: false
})
export class MyBicyclesPage implements OnInit {

  bicycles: any = [];

  selectedBicycle: any = null; // Declarar esta propiedad para guardar la bicicleta seleccionada

  /*
  bicycles: any = [
    {
      id: 1,
      brand: "BH",
      model: "star"
    }, {
      id: 2,
      brand: "Orbea",
      model: "sky"
    }
  ]
  */

  constructor(private bicycleService: BicycleService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.getAllBicycles();
  }

  //Para que, al entrar en la vista, se refresque automáticamente
  ionViewWillEnter() {
    this.getAllBicycles();
  }

  getAllBicycles() {
    this.bicycleService.getAllBicycles().subscribe(response => {
      this.bicycles = response;
    });
  }

  async deleteBicycle(id: any){
    const alert = await this.alertCtrl.create({
      header: '¿Estás seguro?',
      message: '¿Deseas borrar esta bicicleta?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Borrar',
          handler: () => {
            this.bicycleService.delete(id).subscribe(() => {
              this.getAllBicycles();
            });
          }
        }
      ]
    });
    await alert.present();
  }
  
  /*
  deleteBicycle(id: any){
    this.bicycleService.delete(id).subscribe(response => {
      this.getAllBicycles(); // refresca la lista
    });
  }
  */
  
  goToEditBicycle(id: any) {
  this.router.navigateByUrl(`/bicycle-form/${id}`);
  }

  goToAddBicycle() {
  this.router.navigate(['/bicycle-form']);
  }

  updateBicycle(id: any, updatedData: any){
    // updatedData sería un objeto con los datos nuevos de la bicicleta
    this.bicycleService.update(id, updatedData).subscribe(response => {
      this.getAllBicycles(); // refresca la lista
    });
  }

  getOneBicycle(id: any){
    this.bicycleService.findOne(id).subscribe(response => {
      this.selectedBicycle = response;
      // Puedes mostrar esta bicicleta con los datos en el template para editar o ver más detalles
    });
  }

  goHome() {
  this.router.navigate(['/home']);
  }

}
