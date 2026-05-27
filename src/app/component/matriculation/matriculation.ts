import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-matriculation',
  imports: [ RouterLink, CommonModule ],
  templateUrl: './matriculation.html',
  styleUrl: './matriculation.css',
})
export class Matriculation {}
