import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions,URLSearchParams,Response} from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) { }
  private api = 'http://localhost:3000';

  addproduct(productData){
    return this.http.post(this.api+'/addProduct', productData )
    .pipe(
      map((response: Response) => response.json()),
      catchError(err => throwError(err))
    )};

  
    getProducts(){
    return this.http.get(this.api+'/listProduct')
    .pipe(
      map((response: Response) => response.json()),
      catchError(err => throwError(err))
    )};  

  delete(id:string){
    return this.http.delete(this.api+'/deleteProduct/'+id)
    .pipe(
      map((response: Response) => response.json()),
      catchError(err => throwError(err))
    )};

    getProductById(id){
      console.log('getProductById called')
    return this.http.get(this.api+'/getProduct/'+id)
    .pipe(
      map((response: Response) => response.json()),
      catchError(err => throwError(err))
    )};    

  update(productData){
    return this.http.put(this.api+'/updateProduct', productData )
    .pipe(
      map((response: Response) => response.json()),
      catchError(err => throwError(err))
    )};
}
