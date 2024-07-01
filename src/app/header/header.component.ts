import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges{
  @Input()
  login : any;

  loggedInUserData : any = JSON.parse(<any>localStorage.getItem('loggedInUser'));
  loginText : string = "Log in";

  isLoggedIn ?: boolean = false;
  constructor (private route: ActivatedRoute,
    private router: Router) {}
    
  ngOnInit(): void {
    if (this.loggedInUserData !== null && this.loggedInUserData !== undefined){
    this.isLoggedIn = true;
    this.loginText = "Log out"
  }
  
  console.log("The login in ngOnInit is : ", this.login, " and the this.loggedInUserData is this : ", this.loggedInUserData,
   " and the loginText is this : ", this.loginText)
}
ngOnChanges(changes: SimpleChanges): void {
  if (this.loggedInUserData !== null && this.loggedInUserData !== undefined){
    this.isLoggedIn = true;
    this.loginText = "Log out"
    }

    console.log("The login in ngOnChanges is : ", this.login)
  }

  logout(){
    console.log("I am clicked.");
    if (this.isLoggedIn == true){
      localStorage.setItem('loggedInUser', "null");
    }
    // this.router.navigate(['/'], { relativeTo: this.route });
  }

}
