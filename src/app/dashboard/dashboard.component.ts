
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { ProductService } from '../services/product.service';
import { Form, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  imageObj: any;
  imageUrl: any;


    constructor(private route: ActivatedRoute, private router: Router, private uploadService: UploadService, private productService: ProductService, private authService: AuthService) {

    }
    ngOnInit(){
    }


    async onImagePicked(event: Event): Promise<void> {

      let newFile = (event.target as HTMLInputElement).files?.[0];
      this.imageObj = newFile;
      console.log(this.imageObj);
  
    }
  
    async onUpload(form: NgForm) {
      let imageForm = new FormData();
      let dataForm;
      imageForm.append('item', this.imageObj);
      (await this.uploadService.uploadImage(imageForm)).subscribe(async (data) => {
        console.log(data);
        dataForm = data;
        console.log(dataForm);
        (await this.productService.addNewProduct(form.value.brand, form.value.size, form.value.price, form.value.car, dataForm)).subscribe((result) => {
          console.log(result);
        });
      });
    }

    async checkUser(msg: string) {
      (await this.productService.getMsg(msg)).subscribe(async (data) => {
        console.log(data);
      });
    }


    async authUser() {
      this.authService.validateUser().subscribe((data) => {
        console.log(data);
      });
    }

}