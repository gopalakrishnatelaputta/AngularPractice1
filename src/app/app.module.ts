import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { SearchComponentComponent } from './container/search-component/search-component.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './container/register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './container/home/home.component'
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { RequestOTPComponent } from './container/request-otp/request-otp.component';
import { VerifyOTPComponent } from './container/verify-otp/verify-otp.component';
import { ResetPasswordComponent } from './container/reset-password/reset-password.component';

const routes:Routes=[
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'home',component:HomeComponent},
{path:'forgotPassword',component:ForgotPasswordComponent},
{path:'requestOTP',component:RequestOTPComponent},
{path:'verifyOTP',component:VerifyOTPComponent},
{path:'resetOTP',component:ResetPasswordComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponentComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FeaturedBrandsComponent,
    ForgotPasswordComponent,
    RequestOTPComponent,
    VerifyOTPComponent,
    ResetPasswordComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterOutlet


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
