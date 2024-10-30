import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { OurFeaturesComponent } from './our-features/our-features.component';
export const routes: Routes = [
    {
        path:"header",
        component:HeaderComponent
    },{
        path:"hero-section",
        component:HeroSectionComponent
    },
    {
        path:"our-features",
        component:OurFeaturesComponent
    }
    
    
];
