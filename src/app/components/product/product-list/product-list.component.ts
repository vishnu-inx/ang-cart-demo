import { Component, OnInit } from '@angular/core';
import { ProductService, CartService } from 'src/app/shared/services';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    productList: any = [];
    categoryList: any = [];
    quantity = 1;

    constructor(
        private productService: ProductService, 
        private cartService: CartService,
        private spinner: NgxSpinnerService
        ) {}

    ngOnInit(): void {
        this.getProducts();
        this.getProductCategory();
    }

    getProducts() {
        this.spinner.show();
        this.productService.getProducts().subscribe((data: any) => {
            this.productList = data;
            this.spinner.hide();
        })
    }

    async getProductCategory() {
        let categoryData = await JSON.parse(localStorage.getItem('category_items') || '[]');
        if (categoryData) {
            this.categoryList = categoryData;
        } else {
            this.productService.getCategory().subscribe((data: any) => {
                this.categoryList = data;
                localStorage.setItem('category_items', JSON.stringify(this.categoryList));
            })
        }
    }

    getProductByCategory(category: string) {
        this.spinner.show();
        this.productService.getProductByCategory(category).subscribe((data: any) => {
            this.productList = data;
            this.spinner.hide();
        })
    }

    addToCart(product: any) {
        product.quantity = this.quantity;
        this.cartService.addToCart(product);
    }

}
