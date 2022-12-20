import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Form } from 'src/app/project/Models/Entities/Classes/Form/form';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {
  form? = this.fb.group({
    standard : this.fb.array([])
  });
  formStandardValoration?: Form;

  constructor(private fb:FormBuilder) {}


  ngOnInit(): void {
            // Initialize the form
        this.formStandardValoration = new Form();
        console.log(this.formStandardValoration.standardList)

        // Add the FormGroup for each array of Valoration objects
        this.formStandardValoration.standardList!.forEach(standard => {
          const valorationGroup = new FormGroup({

          });
          standard.valorations.forEach(valoration => {
            const valorationGroup = this.fb.group({
              nom : [valoration.name],
              valor : [valoration.value]
            })
          });
          this.standard.push(valorationGroup);
        });
  }

  get standard() {
    return this.form?.controls["standard"] as FormArray;
  }

  addStandard() {
    this.formStandardValoration?.standardList!.forEach(standard => {
      standard.valorations.forEach(valoration => {
         const valorationGroup = this.fb.group({
          nom : [valoration.name],
          valor : [valoration.value]
        })
        this.standard.push(valorationGroup!);
      });

    });
  }

  deleteStandard(standardIndex:number) {
    this.standard.removeAt(standardIndex);
  }


}
