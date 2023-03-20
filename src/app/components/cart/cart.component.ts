import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

    @Output() cartModel = new EventEmitter<any>();
    cartItems: any = [];

    constructor(public cartService: CartService, private router: Router,) {}

    ngOnInit(): void {
        this.getCartItems();
    }

    getCartItems() {
        this.cartItems = this.cartService.getCart();
    }

    removeItemFromCart(id: any) {
        this.cartService.removeItem(id);
        this.getCartItems();
    }

    emptyCart() {
        this.cartService.clearCart();
        this.getCartItems();
    }

    setCartModel() {
        this.cartModel.emit(false);
    }


}
