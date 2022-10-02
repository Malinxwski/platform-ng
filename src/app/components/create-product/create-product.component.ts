import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  form =  new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  constructor(private productService: ProductService,
    private modalService: ModalService) {}

  get title(){
    return this.form.controls.title as FormControl
  }

  submit(){
    const payload = {
      title:this.form.value.title as string,
      price:765,
      description:"descr",
      category: "category",
      image:"https://paltodaytv.com/img/360x252/default.jpg",
      rating:{
        rate:10,
        count:888
      }
    }
    this.productService.create(payload).subscribe(() => {
      this.modalService.close()
    })
  }

}
