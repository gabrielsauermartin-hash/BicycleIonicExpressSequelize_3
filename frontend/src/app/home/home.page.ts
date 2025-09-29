import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  brand: string = "BD";
  model: string = "star";

  constructor(private router: Router) { }

  gotoMyBicycles() {
    this.router.navigateByUrl("/my-bicycles");
  }

}
