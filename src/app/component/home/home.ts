import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import * as AOS from 'aos';
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  email: string = '';
  successMessage = false;
  submitted = false;

  /* ================= SLIDER ================= */

  slides = [1, 2, 3, 4];
  currentSlide = 0;
  slideInterval: any;

  subscribe(form: any) {
    this.submitted = true;
    this.successMessage = false;

    if (!this.validateEmail(this.email)) {
      return;
    }

    this.successMessage = true;

    setTimeout(() => {
      form.resetForm();
      this.submitted = false;
    }, 500);

    setTimeout(() => {
      this.successMessage = false;
    }, 3000);
  }

  validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  onInputChange() {
    this.successMessage = false;
  }

  /* ================= HERO SLIDER ================= */

  startSlider() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  updateSlide() {
    const slides = document.querySelectorAll('.slide');

    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === this.currentSlide);
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;

    this.updateSlide();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;

    this.updateSlide();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateSlide();
  }

  /* ================= INIT ================= */

  ngAfterViewInit(): void {
    /* HERO SLIDER */
    this.startSlider();

    /* PARTICLES */
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 30,
          },
          size: {
            value: 3,
          },
          move: {
            speed: 0.8,
          },
          line_linked: {
            enable: true,
            opacity: 0.15,
          },
        },
      });
    }

    /* AOS */
    AOS.init({
      duration: 1000,
      once: true,
    });

    /* GALLERY FILTER */

    const tabs = document.querySelectorAll('.tab');
    const items = document.querySelectorAll('.gallery-item');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));

        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');

        items.forEach((item) => {
          const el = item as HTMLElement;

          if (filter === 'all' || item.classList.contains(filter!)) {
            el.style.display = 'block';
          } else {
            el.style.display = 'none';
          }
        });
      });
    });

    /* LIGHTBOX */

    const lightbox = document.getElementById('lightbox') as HTMLElement;

    const img = document.getElementById('lightbox-img') as HTMLImageElement;

    const video = document.getElementById('lightbox-video') as HTMLIFrameElement;

    const closeBtn = document.querySelector('.lightbox .close') as HTMLElement;

    items.forEach((item) => {
      item.addEventListener('click', () => {
        if (!lightbox) return;

        lightbox.style.display = 'flex';

        if (item.classList.contains('video')) {
          video.src = item.getAttribute('data-video') || '';

          video.style.display = 'block';
          img.style.display = 'none';
        } else {
          img.src = item.getAttribute('data-src') || '';

          img.style.display = 'block';
          video.style.display = 'none';
        }
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        video.src = '';
      });
    }

    if (lightbox) {
      lightbox.addEventListener('click', (e: any) => {
        if (e.target === lightbox) {
          lightbox.style.display = 'none';
          video.src = '';
        }
      });
    }
  }
}
