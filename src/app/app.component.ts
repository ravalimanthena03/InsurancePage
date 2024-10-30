import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { OurFeaturesComponent } from './our-features/our-features.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { FooterComponent } from './footer/footer.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,NgIf,HeroSectionComponent,OurFeaturesComponent,OurServicesComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AssignmentInsurancePage';
}
