import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  submitted = false;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      studentName: ['', [Validators.required]],

      parentName: ['', [Validators.required]],

      email: ['', [Validators.required, Validators.email]],

      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],

      class: ['', [Validators.required]],

      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  showSuccessPopup = false;

  submitForm() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    console.log(this.contactForm.value);

    this.showSuccessPopup = true;

    this.contactForm.reset();

    this.submitted = false;
  }

  closePopup() {
    this.showSuccessPopup = false;
  }
}
