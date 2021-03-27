import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BasicSetup } from '../app.interface';
import { MustMatch } from '../help/must-match.validator';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  name = 'Angular';

  // nestedFormGroup:FormGroup;
  // registerForm: FormGroup;
  //   submitted = false;
  //   test:string[] = ['email', 'password'];
  //   registerForm = this.formBuilder.group({
  //     title: ['', Validators.required],
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     [this.test[0]]: ['', [Validators.required, Validators.email]],
  //     [this.test[1]]: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required],
  //     acceptTerms: [false, Validators.requiredTrue]
  // }, {
  //     validator: MustMatch('password', 'confirmPassword')
  // });
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
      let basicSetup :BasicSetup = {
        dateOfBirth:"10/10/2015",
        experienceLevel:{
          id:1,
          jobSeekerGuid:"XYZ",
          value:"abc"
        },
        gender:"Male",
        id:1,permanentAddress:"Delhi",
        presentAddress:"Delhi",
        skillsHobbies:{
          id:1,
          jobSeekerGuid:"XYZ Hobby",
          value:"Chess"
        }
    }
// this.nestedFormGroup = this.formBuilder.group(basicSetup);
    // // convenience getter for easy access to form fields
    // get f() { return this.registerForm.controls; }

    // onSubmit() {
    //     this.submitted = true;

    //     // stop here if form is invalid
    //     if (this.registerForm.invalid) {
    //         return;
    //     }

    //     // display form values on success
    //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    // }

    // onReset() {
    //     this.submitted = false;
    //     this.registerForm.reset();
    // }

}
}
