import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    cartToggle: boolean = false;

    constructor(public cartService: CartService) {}

    ngOnInit(): void {

    }

    openCart() {
        this.cartToggle = !this.cartToggle;
    }

    ngOnDestroy(): void {
    }

    setModelFalse(val: any) {
        this.cartToggle = val;
    }

}


