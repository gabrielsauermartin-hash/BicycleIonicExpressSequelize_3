import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BicycleService } from '../services/bicycle-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bicycle-form',
  templateUrl: './bicycle-form.page.html',
  styleUrls: ['./bicycle-form.page.scss'],
  standalone: false
})
export class BicycleFormPage implements OnInit {

  bicycleForm: FormGroup;
  id: string | null = null;
  isAddMode: boolean = true;

  constructor(
    public formBuilder: FormBuilder,
    private bicycleService: BicycleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bicycleForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.isAddMode = !this.id;

    if (!this.isAddMode && this.id) {
      this.bicycleService.findOne(this.id).subscribe(bicycle => {
        // Cargar datos existentes al formulario
        this.bicycleForm.patchValue({
          brand: bicycle.brand,
          model: bicycle.model
        });
      });
    }
  }

  onSubmit() {
    if (this.bicycleForm.invalid) {
      // Si hay errores de validación, no hacer nada o mostrar mensajes
      return;
    }

    if (this.isAddMode) {
      this.createBicycle();
    } else {
      this.updateBicycle();
    }
  }

  updateBicycle() {
    if (!this.id) return;
    this.bicycleService.update(this.id, this.bicycleForm.value).subscribe(() => {
      this.router.navigateByUrl("/my-bicycles");
    });
  }

  createBicycle() {
    this.bicycleService.create(this.bicycleForm.value).subscribe(() => {
      this.router.navigateByUrl("/my-bicycles");
    });
  }

  /*
  createBicycle(){
    if(this.bicycleForm.valid) {
      console.log('Formulario válido: ', this.bicycleForm.value);
      this.bicycleService.create(this.bicycleForm.value).subscribe(Response => {
        this.router.navigateByUrl("/my-bicycles");
      })
    } else {
      console.log('Formulario inválido');
    }
  }
  */

  getFormControl(field: string) {
    return this.bicycleForm.get(field); 
  }

}
