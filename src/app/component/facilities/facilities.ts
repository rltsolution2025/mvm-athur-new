import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-facilities',
  imports: [ RouterLink, CommonModule],
  templateUrl: './facilities.html',
  styleUrl: './facilities.css',
})
export class Facilities {}
