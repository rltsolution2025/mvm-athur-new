import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  showPopup = false;

  selectedMedia = '';
  selectedType = '';

  galleryItems = [
    {
      title: 'Annual Day Celebration',
      description: 'Cultural performances and student achievements.',
      thumbnail: 'Gallery/annual1.jpg',
      type: 'image',
      large: true,
      count: '12 Photos',
    },

    {
      title: 'Sports Day',
      description: 'Athletics and team competitions.',
      thumbnail: 'Gallery/sports.jpg',
      type: 'image',
      large: false,
      count: '8 Photos',
    },

    {
      title: 'Student Activities',
      description: 'Creative learning and classroom activities.',
      thumbnail: 'Gallery/student.jpg',
      type: 'image',
      large: false,
      count: '10 Photos',
    },

    {
      title: 'School Celebrations',
      description: 'Festivals and special school events.',
      thumbnail: 'Gallery/event.jpg',
      type: 'image',
      large: true,
      count: '15 Photos',
    },

    {
      title: 'Smart Classroom',
      description: 'Interactive digital learning experience.',
      thumbnail: 'Gallery/classroom.jpg',
      type: 'image',
      large: false,
      count: '6 Photos',
    },

    {
      title: 'Annual Day Video',
      description: 'Watch memorable annual day highlights.',
      thumbnail: 'Gallery/video-thumb.jpg',
      type: 'video',
      large: false,
      count: 'Video',
    },
  ];

  openMedia(item: any) {
    if (item.type == 'video') {
      this.selectedMedia = 'Gallery/annual-video.mp4';
    } else {
      this.selectedMedia = item.thumbnail;
    }

    this.selectedType = item.type;

    this.showPopup = true;
  }

  closeMedia() {
    this.showPopup = false;

    this.selectedMedia = '';
  }
}
