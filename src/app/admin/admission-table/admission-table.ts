import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { AdmissionApi } from '../../service/admission/admission.api';

@Component({
  selector: 'app-admission-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admission-table.html',
  styleUrls: ['./admission-table.css'],
})
export class AdmissionTable implements OnInit {
  admission: any[] = [];
  loading = true;

  constructor(private admissionApi: AdmissionApi) {}

  ngOnInit(): void {
    this.loadAdmission();
  }

  loadAdmission(): void {
    this.admissionApi.getAdmission().subscribe({
      next: (response: any) => {
        console.log('Admission Response:', response);

        this.admission = response.data || response || [];

        console.log('Admission Array:', this.admission);

        this.loading = false; // IMPORTANT
      },

      error: (error: any) => {
        console.error('Admission Error:', error);

        this.loading = false;
      },
    });
  }

  exportExcel(): void {
    if (!this.admission.length) {
      alert('No admission records available');
      return;
    }

    const exportData = this.admission.map((item, index) => ({
      'S.No': index + 1,
      StudentName: item.studentName,
      Class: item.class,
      DOB: item.dob,
      Gender: item.gender,
      FatherName: item.fatherName,
      MotherName: item.motherName,
      Mobile: item.mobile,
      Email: item.email,
      Address: item.address,
      CreatedAt: item.createdAt,
    }));

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);

    const workbook: XLSX.WorkBook = {
      Sheets: {
        Admissions: worksheet,
      },
      SheetNames: ['Admissions'],
    };

    XLSX.writeFile(workbook, 'Maharishi_Vidya_Mandir_Admission_Form_Data.xlsx');
  }
}
