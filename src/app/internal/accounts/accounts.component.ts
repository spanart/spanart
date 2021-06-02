import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

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
