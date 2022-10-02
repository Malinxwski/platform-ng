import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {IProduct} from "./models/product";
import { ModalService } from './services/modal.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'platform';
  products:IProduct[] = []
  loading = false
  search:""

  constructor(
    public productsService:ProductService,
    public modalService: ModalService 
  ){}
  
  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
  

}
