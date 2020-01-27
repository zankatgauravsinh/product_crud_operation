import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  error;
  constructor( public productservice: ProductService,
               private route: ActivatedRoute,
               private router:Router) { }

  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    productname    : new FormControl(''),
    imagelink   : new FormControl(''),
    description  : new FormControl(''),
    expirydate: new FormControl(''),
  });

  submit(){
    if (this.form.valid) {
      console.log('product =', this.form.value);
      let product = {
        name: this.form.value.productname,
        image: this.form.value.imagelink,
        description: this.form.value.description,
        Expirydate: this.form.value.expirydate
      }
      this.productservice.addproduct(product)
      .subscribe(
        (() => {  this.router.navigate(['/dashboard']);
      }),
        (err => console.log('err', err))
      )
    } else {
      this.error = 'Please fill up details'
    }
  }

}
