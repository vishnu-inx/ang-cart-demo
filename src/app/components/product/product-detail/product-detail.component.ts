import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService, CartService } from 'src/app/shared/services';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    product: any = [];
    id: any;
    quantity = 1;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private spinner: NgxSpinnerService,
        private cartService: CartService
    ) {
        this.id = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.getProduct();
    }

    getProduct() {
        this.spinner.show();
        this.productService.getProductById(this.id).subscribe((data: any) => {
            this.product = data;
            this.spinner.hide();
        })
    }

    addToCart(product: any) {
        product.quantity = this.quantity;
        this.cartService.addToCart(product);
    }

}
