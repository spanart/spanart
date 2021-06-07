import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  user: string = '';
  faSearch = faSearch;

  count = 13;

  cards: number[] = [];


  ngOnInit(): void {
    const authDetails = this.authService.getAuthDetails();
    this.user = authDetails.userId;

    
    for (let index = 1; index <= this.count; index++) {
      this.cards.push(index);
    }
  }

  logout() {
    this.authService.logout();
  }
}
