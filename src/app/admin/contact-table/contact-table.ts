import { Component, OnInit } from '@angular/core';
import { ContactApi } from '../../service/contact/contact.api';
import * as XLSX from 'xlsx';
import { CommonModule } from '@angular/common';
import { Contact } from '../../component/contact/contact';

@Component({
  selector: 'app-contact-table',
  imports: [CommonModule],
  templateUrl: './contact-table.html',
  styleUrl: './contact-table.css',
})
export class ContactTable implements OnInit {
  contact: any[] = [];
  loading = true;

  constructor(private contactApi: ContactApi) {}

  ngOnInit(): void {
    this.loadContact();
  }

  loadContact() {
    this.contactApi.getContact().subscribe({
      next: (response: any) => {
        console.log('Contact Response:', response);
        this.contact = response.data || [];
        this.loading = false;
      },

      error: (error: any) => {
        console.error(error);

        this.loading = false;
      },
    });
  }

  exportExcel(): void {
    console.log('Contact Data:', this.contact);

    if (!this.contact || this.contact.length === 0) {
      alert('No data available to export');
      return;
    }

    const exportData = this.contact.map((item, index) => ({
      'S.No': index + 1,
      Student_Name: item.studentName,
      Parent_Name: item.parentName,
      Email: item.email,
      Phone: item.phone,
      Grade: item.class,
      Message: item.message,
      CreatedAt: item.createdAt,
    }));

    console.log('Export Data:', exportData);

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);

    const workbook: XLSX.WorkBook = {
      Sheets: { Contacts: worksheet },
      SheetNames: ['Contacts'],
    };

    XLSX.writeFile(workbook, 'Maharishi_Vidya_Mandir_Contact_Form_Data.xlsx');
  }
}
