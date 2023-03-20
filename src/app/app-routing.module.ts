import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { PagenotFoundComponent } from './shared/components/pagenot-found/pagenot-found.component';

const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'order-success', component: OrderSuccessComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: '**', component: PagenotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
