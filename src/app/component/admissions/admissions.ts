import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admissions',
  standalone: true,

  imports: [CommonModule, ReactiveFormsModule],

  templateUrl: './admissions.html',
  styleUrl: './admissions.css',
})
export class Admissions {
  submitted: boolean = false;

  showPopup: boolean = false;

  admissionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.admissionForm = this.fb.group({
      // ======================
      // Student Details
      // ======================

      studentName: ['', [Validators.required, Validators.minLength(3)]],

      dob: ['', Validators.required],

      gender: ['', Validators.required],

      class: ['', Validators.required],

      // ======================
      // Parent Details
      // ======================

      fatherName: ['', [Validators.required, Validators.minLength(3)]],

      motherName: ['', [Validators.required, Validators.minLength(3)]],

      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],

      email: ['', [Validators.required, Validators.email]],

      // ======================
      // Address
      // ======================

      address: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // ======================
  // Easy Access Validation
  // ======================

  get f() {
    return this.admissionForm.controls;
  }

  // ======================
  // Form Submit
  // ======================

  submitForm() {
    this.submitted = true;

    if (this.admissionForm.invalid) {
      this.admissionForm.markAllAsTouched();

      return;
    }

    console.log('Admission Form Data:', this.admissionForm.value);

    // show success popup

    this.showPopup = true;

    // reset form

    this.admissionForm.reset();

    this.submitted = false;
  }

  // ======================
  // Close Popup
  // ======================

  closePopup() {
    this.showPopup = false;
  }
}
