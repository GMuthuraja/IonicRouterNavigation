import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  aboutPage = '/about'

  constructor(private router: Router) {}

  go(){
     //should be an array as input
    //this.router.navigate(["about"]);

    //should be string as input
    this.router.navigateByUrl("about");
  }

  contact(){
    //this.router.navigate(["contact"]);
    this.router.navigate(["contact/13"]);
    //this.router.navigate(["contact", 15]);
  }

}
