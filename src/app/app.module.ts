// Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PopoverModule } from "ngx-smart-popover";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

// Components
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { PagenotFoundComponent } from './shared/components/pagenot-found/pagenot-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';

// Pipes/Directives
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { OutsideClickDirective } from './shared/directives/outside-click.directive';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        AddProductComponent,
        LoginComponent,
        HeaderComponent,
        TruncatePipe,
        ProductDetailComponent,
        CartComponent,
        CheckoutComponent,
        OutsideClickDirective,
        OrderSuccessComponent,
        PagenotFoundComponent,
        ContactUsComponent,
        AboutUsComponent,
        SignUpComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        PopoverModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({ timeOut: 1000 }),
        NgxSpinnerModule,
        FormsModule,
        NgOptimizedImage
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
