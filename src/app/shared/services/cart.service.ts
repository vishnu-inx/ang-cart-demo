import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    cartProductList = new BehaviorSubject("");
    items: any[] = [];
    totalItems = 0;

    constructor(private router: Router, private notification: NotificationService) {}

    getCart() {
        return this.items = JSON.parse(localStorage.getItem('cart_items') || '[]');
    }

    async addToCart(product: any) {
        const cartItems = await this.items.find(
            (item) => item.id === product.id
        );
        if (cartItems) {
            cartItems.quantity += 1;
            this.saveCart();
            this.getItemLength();
            this.getCart();
            this.notification.success('Product quantity updated!')
        } else {
            product.quantity = product.quantity;
            this.items.push(product);
            this.saveCart();
            this.getItemLength();
            this.getCart();
            this.notification.success('Product added!')
        }
    }

    saveCart() {
        this.items = this.items.filter(function (item: any) {
            return item.price;
        });
        localStorage.setItem('cart_items', JSON.stringify(this.items));
        this.loadCart();
    }

    loadCart() {
        this.items = [];
        if (localStorage.getItem('cart_items')) {
            this.items = JSON.parse(localStorage.getItem('cart_items') || '[]');
        }
        var cartItems = JSON.parse(localStorage.getItem('cart_items') || '[]');
        this.totalItems = cartItems.length | 0;
    }

    

    getItemLength() {
        this.loadCart();
        return this.totalItems;
    }

    clearCart() {
        this.items = [];
        localStorage.removeItem('cart_items');
    }

    removeItem(pid: any) {
        this.loadCart();
        const index = this.items.findIndex((el: any) => el.id == pid);
        if (index > -1) {
            this.items.splice(index, 1);
            if (this.items.length === 0) {
                this.clearCart();
                this.saveCart();
                this.loadCart();
                this.getCart();
            } else {
                this.saveCart();
                this.loadCart();
                this.getCart();
                this.notification.success("Product removed!")
            }
        }
    }

    getItemFromCart(product: any) {
        this.loadCart();
        let item = null;
        if (this.items.length) {
            item = this.items.find((item) => item.id === product.id);
        }
        if (item) {
            return item.quantity;
        }
        return 1;
    }

}
