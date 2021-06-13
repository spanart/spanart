import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  user: string = '';

  ngOnInit(): void {
    const authDetails = this.authService.getAuthDetails();
    this.user = authDetails.userId;
  }

  logout() {
    this.authService.logout();
  }
}
