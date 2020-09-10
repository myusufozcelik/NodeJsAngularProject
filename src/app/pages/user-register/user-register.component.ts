import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginUser } from 'src/app/model/loginUser';
import { AlertService } from 'src/app/services/alert.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  user: LoginUser = new LoginUser();
  userForm: FormGroup;
  // tslint:disable-next-line: max-line-length
  constructor(private alertService: AlertService, private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createAddForm();
  }

  // tslint:disable-next-line: typedef
  createAddForm() {
    this.userForm = this.formBuilder.group({
      user_name: new FormControl('', [ Validators.required, Validators.minLength(5)]),
      user_password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  add(): void {
    if (this.userForm.valid ) {
            this.user = Object.assign({}, this.userForm.value);
    }

    this.authService.create(this.user).subscribe(data => {
    });
  }


  getSuccessMessage(): void {
  //   //TODO
  //   // tslint:disable-next-line: triple-equals
  //   if (this.userForm.valid && this.userForm != null) {
  //  setInterval(() => {
  //   this.router.navigate(['/login']);
  //   }, 2000);
  //  this.alertService.success('Kayıt başarılı, login saayfasına yönlendiriliyorsunuz.');
  // }
}
  getErrorMessage(): void {
  this.alertService.error('Kullanıcı adı ve şifre boş bırakılamaz!');
  }

  clearMessage(): void {
    this.alertService.clearAlertMessage();
  }

}
