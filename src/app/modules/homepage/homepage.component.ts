import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  // isLogged: boolean = true;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    // this.isLogged = this.authService.getIsLoggedIn();
  }

  Logout() {
    //this.authService.isLoggedIn = false;
  }
}
