import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AdminApi } from '../../service/admin/admin.api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
  formData = {
    username: '',
    password: '',
  };

  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private adminApi: AdminApi,
    private router: Router,
  ) {}

  clearMessages() {
    this.errorMessage = '';
    this.successMessage = '';
  }

  login(form: NgForm) {
    this.errorMessage = '';
    this.successMessage = '';

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.adminApi.login(this.formData).subscribe({
      next: (response: any) => {
        this.loading = false;

        this.successMessage = response.message;

        sessionStorage.setItem('adminUser', response.admin.username);

        setTimeout(() => {
          this.router.navigate(['/admin/dashboard']);
        }, 1000);
      },

      error:(error:any) =>{
        this.loading = false;

        console.log('Login Error:', error);

        if(error.status === 401){
          this.errorMessage = error.error.message;
        }else if(error.status === 400){
          this.errorMessage = error.error.message
        }else{
          this.errorMessage = 'Server Error';
        }
      }
    });
  }
}
