import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<any> {
        return this.http.get(`https://fakestoreapi.com/products`);
    }

    getProductById(id: number): Observable<any> {
        return this.http.get(`https://fakestoreapi.com/products/${id}`);
    }

    getCategory(): Observable<any> {
        return this.http.get(`https://fakestoreapi.com/products/categories`);
    }

    getProductByCategory(category: any): Observable<any> {
        return this.http.get(`https://fakestoreapi.com/products/category/${category}`);
    }

}
