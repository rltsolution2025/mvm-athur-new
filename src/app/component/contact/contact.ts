import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { ContactApi } from '../../service/contact/contact.api';

@Component({
  selector: 'app-contact',

  standalone: true,

  imports: [CommonModule, ReactiveFormsModule],

  templateUrl: './contact.html',

  styleUrls: ['./contact.css'],
})
export class Contact {
  submitted: boolean = false;

  showSuccessPopup: boolean = false;

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,

    private contactService: ContactApi,
  ) {
    this.contactForm = this.fb.group({
      studentName: ['', [Validators.required]],

      parentName: ['', [Validators.required]],

      email: ['', [Validators.required, Validators.email]],

      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],

      class: ['', [Validators.required]],
      
      grade: ['',[Validators.required]],

      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  /* =====================================
     EASY VALIDATION ACCESS
  ===================================== */

  get f() {
    return this.contactForm.controls;
  }

  /* =====================================
     SUBMIT FORM
  ===================================== */

  submitForm(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();

      return;
    }

    this.contactService.submitContact(this.contactForm.value).subscribe({
      next: (res: any) => {
        console.log(res);

        this.showSuccessPopup = true;

        this.contactForm.reset();

        this.submitted = false;
      },

      error: (err: any) => {
        console.log(err);
      },
    });
  }

  /* =====================================
     CLOSE POPUP
  ===================================== */

  closePopup(): void {
    this.showSuccessPopup = false;
  }
}
