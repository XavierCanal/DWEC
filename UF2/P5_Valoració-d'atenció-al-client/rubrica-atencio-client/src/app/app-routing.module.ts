import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { FormVisualizerComponent } from './project/components/form-visualizer/form-visualizer.component';
import { FormGeneratorComponent } from './project/components/formGenerator/form-generator/form-generator.component';

const routes: Routes = [
  { path: 'form-visualizer', component: FormVisualizerComponent },
  { path: 'form-generator', component: FormGeneratorComponent }
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
