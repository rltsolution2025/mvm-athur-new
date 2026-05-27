import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sports',
  imports: [ RouterLink, CommonModule],
  templateUrl: './sports.html',
  styleUrl: './sports.css',
})
export class Sports {}
