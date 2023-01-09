import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Form } from 'src/app/project/Models/Entities/Classes/Form/form';
import { Standard } from 'src/app/project/Models/Entities/Classes/Standard/standard';
import { Valoration } from "src/app/project/Models/Entities/Classes/Valoration/valoration";

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {
  formStandardValoration: Form = new Form();

  constructor() {}


  ngOnInit(): void {
  }

  addValoration(standard:Standard) {
    standard.valorations.push(new Valoration("Nom del Valor : "+(standard.valorations.length+1),0))
  }

  addCriterian() {
    this.formStandardValoration.standardList.push(new Standard());
  }

  saveFormToLocalStorage(){
    window.localStorage.setItem("Form", JSON.stringify(this.formStandardValoration));
  }

  deleteCriterian(index:number){
    this.formStandardValoration.standardList.splice(index,1);
  }

  deleteValoration(standard:Standard){
    standard.valorations.pop();
  }

}
