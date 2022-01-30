import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedPage/navbar/navbar.component';
import { FooterComponent } from './sharedPage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './pages/banner/banner.component';
import { WorksComponent } from './pages/works/works.component';
import { MallsSectionComponent } from './pages/malls-section/malls-section.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { FaqComponent } from './pages/faq/faq.component';
import { InfoComponent } from './pages/info/info.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { GuranteeComponent } from './pages/gurantee/gurantee.component';
import { ConsectorComponent } from './pages/consector/consector.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    WorksComponent,
    MallsSectionComponent,
    AboutComponent,
    ProductComponent,
    FaqComponent,
    InfoComponent,
    StoriesComponent,
    GuranteeComponent,
    ConsectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
