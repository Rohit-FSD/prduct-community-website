import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule } from '@angular/material/button';
import {MatToolbarModule } from '@angular/material/toolbar'
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptor } from './services/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { ProductService } from './services/product.service';
import { SearchComponent } from './components/search/search.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { StatsComponent } from './components/stats/stats.component';
import { RequestReviewComponent } from './components/request-review/request-review.component';
import { FilterByCodeComponent } from './components/filter-by-code/filter-by-code.component';
import { ReviewApprovalComponent } from './components/review-approval/review-approval.component';
import { ReviewApprovalDetailpageComponent } from './components/review-approval-detailpage/review-approval-detailpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ProductpageComponent,
    RegisterComponent,
    SearchComponent,
    ProductdetailsComponent,
    AddReviewComponent,
    StatsComponent,
    RequestReviewComponent,
    FilterByCodeComponent,
    ReviewApprovalComponent,
    ReviewApprovalDetailpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,MatToolbarModule,
    FormsModule,HttpClientModule

  ],
  providers: [LoginService,AuthGuard,ProductService,[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
