import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  error;productId;
  constructor( public productservice: ProductService,
               private route: ActivatedRoute,
               private router:Router) {
                this.productId = this.route.snapshot.paramMap.get('productId')
                }

  form: FormGroup = new FormGroup({
    productname    : new FormControl(''),
    imagelink   : new FormControl(''),
    description  : new FormControl(''),
    expirydate: new FormControl(''),
  });                

  ngOnInit() {
    this.productservice.getProductById(this.productId)
    .subscribe(
       (res: any) => {
        this.form.setValue ({
          productname: res.product.name,
          imagelink: res.product.image,
          description: res.product.description,
          expirydate: res.product.Expirydate
        })
      },
      err => console.log('err', err)
    )
  }

  submit(){
    if (this.form.valid) {
      let product = {
        name: this.form.value.productname,
        image: this.form.value.imagelink,
        description: this.form.value.description,
        Expirydate: this.form.value.expirydate,
        id: this.productId
      }
      this.productservice.update(product)
      .subscribe(
        (() => {  this.router.navigate(['/dashboard']);
      }),
        (err => console.log('err', err))
      )
      
    } else {
      this.error = 'error'
    }
  }
}
