import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private productservice: ProductService,
    private route: ActivatedRoute,
    private router:Router) { }

    products;

  ngOnInit() {
    this.productservice.getProducts()
    .subscribe(
      (res: any) => {
        this.products = res.product;
      },
      err => console.log('err', err)
    )
  }

  delete(id:string) {
    this.productservice.delete(id)
    .subscribe(
      (res: any) => {
        this.products = this.products.filter(item => 
          item._id !== id);
      },
      err => console.log('err', err)
    )
  }

  edit(id:string) {
    this.router.navigate(['/productUpadte/'+id]);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
