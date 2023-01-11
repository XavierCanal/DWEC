import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Form } from '../../Models/Entities/Classes/Form/form';

@Component({
  selector: 'app-form-visualizer',
  templateUrl: './form-visualizer.component.html',
  styleUrls: ['./form-visualizer.component.css']
})
export class FormVisualizerComponent implements OnInit {
  form: Form = new Form();
  completeForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.completeForm = this.fb.group({
      valorations:this.fb.array([
        this.fb.group({
          valoration:[]
        })
      ])
    });
  }

  ngOnInit(): void {
    this.form = JSON.parse(localStorage.getItem("Form") || "");
  }

  onSubmit() {
    // todo
  }

}
