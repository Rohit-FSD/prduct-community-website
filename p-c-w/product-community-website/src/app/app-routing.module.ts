import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestReviewComponent } from './components/request-review/request-review.component';
import { ReviewApprovalDetailpageComponent } from './components/review-approval-detailpage/review-approval-detailpage.component';
import { ReviewApprovalComponent } from './components/review-approval/review-approval.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'search/:keyword',component:ProductpageComponent},
  {path:'requestReview',component:RequestReviewComponent},
  {path:'reviews',component:ReviewApprovalComponent,pathMatch:'full'},
  {path:'reviews/:id',component:ReviewApprovalDetailpageComponent,pathMatch:'full'},
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'register',component:RegisterComponent,pathMatch:'full'},
  {path:'postReview/:id',component:AddReviewComponent},
  {path:'products/:id',component:ProductdetailsComponent},
  {path:'products',component:ProductpageComponent,pathMatch:'full',canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
