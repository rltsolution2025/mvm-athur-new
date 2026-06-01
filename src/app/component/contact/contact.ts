import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactApi } from '../../service/contact/contact.api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  submitted = false;

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactApi,
    private router: Router,
  ) {
    this.contactForm = this.fb.group({
      studentName: ['', [Validators.required]],

      parentName: ['', [Validators.required]],

      email: ['', [Validators.required, Validators.email]],

      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],

      class: ['', [Validators.required]],

      message: [''],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  submitForm(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log('Form Data:', this.contactForm.value);

    this.contactService.submitContact(this.contactForm.value).subscribe({
      next: (res: any) => {
        console.log('CONTACT SUCCESS:', res);

        this.contactForm.reset();

        this.submitted = false;

        // Redirect to Thank You Page
        this.router.navigate(['/thank-you']);
      },

      error: (err: any) => {
        console.error('CONTACT ERROR:', err);
        console.error('STATUS:', err.status);
        console.error('RESPONSE:', err.error);

        alert('Failed to submit the form. Please try again.');
      },
    });
  }
}
