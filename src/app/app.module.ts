import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './Components/banner/banner.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KeyFeaturesComponent } from './Components/key-features/key-features.component';
import { FeaturedProjectsComponent } from './Components/featured-projects/featured-projects.component';
import { InfoSectionComponent } from './Components/info-section/info-section.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    HomePageComponent,
    KeyFeaturesComponent,
    FeaturedProjectsComponent,
    InfoSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
