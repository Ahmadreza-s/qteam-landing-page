import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {WorkComponent} from './work/work.component';
import {FooterComponent} from './footer/footer.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {ServicesComponent} from './services/services.component';
import {PersianDigitService} from './_services/persianDigitService';


///// ROUTING
const appRoutes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '**', component: HomeComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WorkComponent,
    FooterComponent,
    ProductDetailComponent,
    ContactUsComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    PersianDigitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
