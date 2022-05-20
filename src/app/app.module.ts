import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './Components/banner/banner.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KeyFeaturesComponent } from './Components/key-features/key-features.component';
import { FeaturedProjectsComponent } from './Components/featured-projects/featured-projects.component';
import { InfoSectionComponent } from './Components/info-section/info-section.component';
import { AboutComponent } from './Pages/about/about.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductEffect } from 'Store/Effects/productEffect';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { ProducctCardComponent } from './Components/producct-card/producct-card.component';
import { AllproductsComponent } from './Pages/allproducts/allproducts.component';
import { AppState } from 'Store/rootReducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CartListComponent } from './Components/cart-list/cart-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    HomePageComponent,
    KeyFeaturesComponent,
    FeaturedProjectsComponent,
    InfoSectionComponent,
    AboutComponent,
    ProducctCardComponent,
    AllproductsComponent,
    CartListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot([ProductEffect]),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
