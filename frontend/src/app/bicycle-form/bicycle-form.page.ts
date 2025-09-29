import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BicycleService } from '../services/bicycle-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bicycle-form',
  templateUrl: './bicycle-form.page.html',
  styleUrls: ['./bicycle-form.page.scss'],
})
export class BicycleFormPage implements OnInit {

  bicycleForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private bicycleService: BicycleService,
    private route: Router) { 
      this.bicycleForm = this.formBuilder.group({
        brand: ['', Validators.compose([Validators.required])],
        model: ['', Validators.compose([Validators.required])]
      })
    }

  ngOnInit() {
  }

  createBicycle(){
    if(this.bicycleForm.valid) {
      console.log('Formulario válido: ', this.bicycleForm.value);
      this.bicycleService.create(this.bicycleForm.value).subscribe(Response => {
        this.route.navigateByUrl("/my-bicycles");
      })
    } else {
      console.log('Formulario inválido');
    }
  }

  getFormControl(field: string) {
    return this.bicycleForm.get(field); 
  }

}
