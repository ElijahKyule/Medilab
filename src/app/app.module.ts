import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainComponent } from './components/main/main.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CountsComponent } from './components/counts/counts.component';
import { ServicesComponent } from './components/services/services.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MainComponent,
    WhyUsComponent,
    AboutUsComponent,
    CountsComponent,
    ServicesComponent,
    AppointmentsComponent,
    DepartmentsComponent,
    DoctorsComponent,
    QuestionsComponent,
    TestimonialsComponent,
    GalleryComponent,
    ContactsComponent,
    FooterComponent
  ],
  imports: [ BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
