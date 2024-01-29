import { Component, OnInit } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-fauna',
  templateUrl: './fauna.page.html',
  styleUrls: ['./fauna.page.scss'],
})
export class FaunaPage implements OnInit {
  textBuscar: string;
  listProducts: Product[] = []
  //loading: boolean = false;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    //this.loading = true;

    this._productService.getListProducts().subscribe((data: Product[]) => {
      this.listProducts = data;
      //this.loading = false;
    })
  }

  buscar(event){
    this.textBuscar = event.detail.value;
      }
}
