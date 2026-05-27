import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-library',
  imports: [RouterLink, CommonModule],
  templateUrl: './library.html',
  styleUrl: './library.css',
})
export class Library {}
