import { Component, OnInit } from '@angular/core';
import { BicycleService } from '../services/bicycle-service';

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

  constructor(private bicycleService: BicycleService) { }

  ngOnInit() {
    this.getAllBicycles();
  }

  getAllBicycles() {
    this.bicycleService.getAllBicycles().subscribe(response => {
      this.bicycles = response;
    });
  }

  
  deleteBicycle(id: any){
    this.bicycleService.delete(id).subscribe(response => {
      this.getAllBicycles(); // refresca la lista
    });
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

}
