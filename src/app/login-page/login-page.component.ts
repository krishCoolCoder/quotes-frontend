import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  userId : any;
  password : any;
  login : boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router){}

  getUserId ($event: any) {
    this.userId = $event.target.value;
  }

  getPassword ($event: any) {
    this.password = $event.target.value;
  }

  validate() {
    if (this.userId == "saikrishnatechno@gmail.com" && this.password == "quotepass") {
      this.login = true;
      this.router.navigate(['/'], { relativeTo: this.route });
    } else {
      alert("Invalid user credentials.")
    }
  }
}
