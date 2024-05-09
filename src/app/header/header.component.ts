import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges{
  @Input()
  login : any;

  isLoggedIn ?: boolean;
  ngOnInit(): void {
    this.isLoggedIn = this.login;
    console.log("The login in ngOnInit is : ", this.login)
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.isLoggedIn = this.login;
    console.log("The login in ngOnChanges is : ", this.login)
  }

}
