import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from './products';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail'
  product: IProduct | undefined
  sub!: Subscription
  errorMessage: string = ''
  prod = {}

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.productService.getProducts().subscribe((product) => {
      this.product = product.find((prod: IProduct) => prod.productId === id);
    });
  }

  ngOnDestroy() {
        this.sub.unsubscribe();
    }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
