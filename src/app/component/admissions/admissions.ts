import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdmissionApi } from '../../service/admission/admission.api';

@Component({
  selector: 'app-admissions',
  standalone: true,

  imports: [CommonModule, ReactiveFormsModule],

  templateUrl: './admissions.html',
  styleUrl: './admissions.css',
})
export class Admissions {
  [x: string]: any;
  submitted: boolean = false;

  showPopup: boolean = false;

  admissionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private admissionService: AdmissionApi,
  ) {
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
      console.log('Admission Form Invalid');

      this.admissionForm.markAllAsTouched();
      return;
    }

    console.log('Admission Data:', this.admissionForm.value);

    this.admissionService.submitAdmission(this.admissionForm.value).subscribe({
      next: (res) => {
        console.log('ADMISSION SUCCESS:', res);

        this.showPopup = true;

        this.admissionForm.reset();

        this.submitted = false;
      },

      error: (err) => {
        console.error('ADMISSION ERROR:', err);
        console.error('STATUS:', err.status);
        console.error('RESPONSE:', err.error);
      },
    });
  }

  // ======================
  // Close Popup
  // ======================

  closePopup() {
    this.showPopup = false;
  }
}
