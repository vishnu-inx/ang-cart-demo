import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, NotificationService } from 'src/app/shared/services';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

    paymentHandler: any = null;
    public products: any = [];
    public grandTotal !: number;

    constructor(
        private cartService: CartService, 
        private router: Router,
        private notification: NotificationService
        ) { }

    ngOnInit(): void {
        this.getCartList();
        this.invokeStripe();
    }

    async makePayment(amount: any) {
        
        const paymentHandler = await (<any>window).StripeCheckout.configure({
            key: 'pk_test_51KZ915SAKXplEmEySeDmt8r9BVKBYuy1dfabV0aAsAWHpywVB6EuZ6BXg99Vf0OGWIRyQ4u5MPV3etL1kaZr4rH400CZVEd4cd',
            locale: 'auto',
            token: (token: any) => {
                this.notification.success("Your order placed!");
                this.cartService.clearCart();
                this.router.navigate(['/order-success']);
            }
        });

        paymentHandler.open({
            name: 'Store',
            description: '3 widgets',
            amount: amount * 100,
        });

        
    }
    
    invokeStripe() {
        if (!window.document.getElementById('stripe-script')) {
            const script = window.document.createElement('script');
            script.id = 'stripe-script';
            script.type = 'text/javascript';
            script.src = 'https://checkout.stripe.com/checkout.js';
            script.onload = () => {
                this.paymentHandler = (<any>window).StripeCheckout.configure({
                    key: 'pk_test_51KZ915SAKXplEmEySeDmt8r9BVKBYuy1dfabV0aAsAWHpywVB6EuZ6BXg99Vf0OGWIRyQ4u5MPV3etL1kaZr4rH400CZVEd4cd',
                    locale: 'auto',
                    token: function (stripeToken: any) {
                    },
                });
            };
            
            window.document.body.appendChild(script);
        }
    }

    async getCartList() {
        this.products = await this.cartService.getCart();
        this.grandTotal = await this.products.reduce((accumulator: any, item: any) => {
            return accumulator + (item.quantity * item.price)
        }, 0)
    }

    removeItem(item: any) {
        this.cartService.removeItem(item);
        this.getCartList();
    }

    emptycart() {
        this.cartService.clearCart();
        this.getCartList();
    }



}
