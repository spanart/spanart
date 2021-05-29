import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo, gql, QueryRef } from 'apollo-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apollo: Apollo, private fb: FormBuilder, private router: Router) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  loginFailed = false;

  ngOnInit(): void {
  }

  login() {

    const email = this.loginForm.get('email')?.value;
    const pass = this.loginForm.get('password')?.value;

    const STATIONS_QUERY = gql`
    mutation {
      logIn1497517424: logIn(
        input: { email: "${email}", password: "${pass}" }
      ) {
        authToken1425377717: authToken
        query {
          userByEmail2382179773: userByEmail(email: "${email}") {
            id1207450440: id
            email3832528868: email
          }
        }
      }
    }    
    `;

    var query = this.apollo.mutate({
      mutation: STATIONS_QUERY,
      variables: {}
    });

    query.subscribe(({data}) => {
      console.log(data);
      this.loginFailed = true;
      this.router.navigate(['/reset-password']);
    }, (error) => {
      console.log('E', error);
      this.loginFailed = true;
    }
    );
  }

}
