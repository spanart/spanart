import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apollo: Apollo, private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  loginFailed = false;
  showPassword = false;

  ngOnInit(): void {
  }

  toggleShowPass() {
    this.showPassword = !this.showPassword;
  }

  login() {

    const email = this.loginForm.get('email')?.value;
    const pass = this.loginForm.get('password')?.value;

    const STATIONS_QUERY = gql`
    mutation {
      login: logIn(
        input: { email: "${email}", password: "${pass}" }
      ) {
        authToken: authToken
        query {
          userByEmail: userByEmail(email: "${email}") {
            id: id
            email: email
          }
        }
      }
    }    
    `;

    var query = this.apollo.mutate({
      mutation: STATIONS_QUERY,
      variables: {}
    });

    query.subscribe(({data}: any) => {
      console.log(data);
      this.loginFailed = true;
      this.authService.saveUserData(email, data.login.authToken);
      this.router.navigate(['/home']);
    }, (error) => {
      console.log('E', error);
      this.loginFailed = true;
    }
    );
  }

}
function LoginResp(LoginResp: any, arg1: { mutation: import("graphql").DocumentNode; variables: {}; }) {
  throw new Error('Function not implemented.');
}

