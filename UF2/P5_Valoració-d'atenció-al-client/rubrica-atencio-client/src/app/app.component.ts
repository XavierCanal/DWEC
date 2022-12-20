import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  productForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });
  }

  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}


// // items.ts
// export class Items {
//   label: string;
//   value: any;
// }

// // my-controller.ts
// import { Items } from './items';

// class MyController {
//   public items: Items[];

//   constructor() {
//     this.items = [
//       { label: 'Name', value: '' },
//       { label: 'Email', value: '' },
//       { label: 'Phone', value: '' },
//     ];
//   }
// }
