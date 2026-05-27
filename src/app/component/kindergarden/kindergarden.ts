import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kindergarden',
  imports: [RouterLink, CommonModule],
  templateUrl: './kindergarden.html',
  styleUrl: './kindergarden.css',
})
export class Kindergarden {}
