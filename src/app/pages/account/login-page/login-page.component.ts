import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public busy = false;

  constructor(
    private service: DataService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username:[
        '',
        Validators.compose([
          Validators.minLength(14),
          Validators.maxLength(14),
          Validators.required,
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.required
        ])
      ]
    });
  }

  ngOnInit() {
    const token = localStorage.getItem('petshop.token');
    if (token) {
      this.busy = true;
      this
        .service
        .refreshToken()
        .subscribe(
          (data: any) => {
            console.log(data);
            localStorage.setItem('petshop.token', data.token);
            this.busy = false;
          },
          (err) => {
            console.warn(err);
            localStorage.clear();
            this.busy = false;
          }
        );
    }
  }

  submit(){
    this.busy = true;

    this
      .service
      .authenticate(this.form.value)
      .subscribe(
        (data: any) => {
          console.log(data)
          localStorage.setItem('petshop.token', data.token);
          this.busy = false;
        },
        (error: any) =>{
          console.warn(error);
          this.busy = false;
        }
      );

  }

}
