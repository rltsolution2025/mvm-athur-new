import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Footer } from './component/footer/footer';
import { Header } from './component/header/header';
import { About } from './component/about/about';
import { Activities } from './component/activities/activities';
import { Contact } from './component/contact/contact';
import { Facilities } from './component/facilities/facilities';
import { Gallery } from './component/gallery/gallery';
import { Kindergarden } from './component/kindergarden/kindergarden';
import { Labs } from './component/labs/labs';
import { Library } from './component/library/library';
import { MandatoryPublicDisclosure } from './component/mandatory-public-disclosure/mandatory-public-disclosure';
import { Matriculation } from './component/matriculation/matriculation';
import { Primary } from './component/primary/primary';
import { SmartClass } from './component/smart-class/smart-class';
import { Sports } from './component/sports/sports';
import { Admissions } from './component/admissions/admissions';
import { Terms } from './component/terms/terms';
import { PrivacyPolicy } from './component/privacy-policy/privacy-policy';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'footer', component: Footer },
  { path: 'header', component: Header },
  { path: 'about', component: About },
  { path: 'activities', component: Activities },
  { path: 'contact', component: Contact },
  { path: 'facilities', component: Facilities },
  { path: 'gallery', component: Gallery },
  { path: 'kids', component: Kindergarden },
  { path: 'labs', component: Labs },
  { path: 'library', component: Library },
  { path: 'mandatory-public-disclosure', component: MandatoryPublicDisclosure },
  { path: 'middle-school', component: Matriculation },
  { path: 'primary', component: Primary },
  { path: 'smart-classes', component: SmartClass },
  { path: 'sports', component: Sports },
  { path: 'admissions', component: Admissions},
  { path: 'terms', component: Terms },
  { path: 'privacy-policy', component: PrivacyPolicy},

  {
    path: 'admin/login',

    loadComponent: () => import('./admin/admin-login/admin-login').then((m) => m.AdminLogin),
  },

  {
    path: 'admin/dashboard',

    canActivate: [adminGuard],

    loadComponent: () =>
      import('./admin/admin-dashboard/admin-dashboard').then((m) => m.AdminDashboard),
  },
];
