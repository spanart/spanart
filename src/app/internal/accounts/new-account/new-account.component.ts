import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import {CdkStepper} from '@angular/cdk/stepper';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  providers: [{provide: CdkStepper, useExisting: NewAccountComponent}]
})
export class NewAccountComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  faTimesCircle = faTimesCircle;
  stepOneFg: any;

  ngOnInit(): void {
    this.stepOneFg = this.fb.group({});
  }

  dropped(event: any) {
    console.log(event);
  }

  fileOver(event: any) {
    console.log(event);
  }

  fileLeave(event: any) {
    console.log(event);
  }

}
