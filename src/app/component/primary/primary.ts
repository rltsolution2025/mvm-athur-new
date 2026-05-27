import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-primary',
  imports: [RouterLink, CommonModule],
  templateUrl: './primary.html',
  styleUrl: './primary.css',
})
export class Primary {}
