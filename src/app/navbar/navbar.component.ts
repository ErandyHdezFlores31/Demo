import { Component, OnInit } from '@angular/core';
// import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hidden = false;

  constructor() { }

  ngOnInit(): void {
    // this.listUsers();
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
