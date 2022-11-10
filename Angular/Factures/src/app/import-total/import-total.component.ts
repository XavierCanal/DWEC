import { Component, Input, OnInit } from '@angular/core';
import { Articles } from '../article/articles'

@Component({
  selector: 'app-import-total',
  templateUrl: './import-total.component.html',
  styleUrls: ['./import-total.component.css']
})
export class ImportTotalComponent implements OnInit {
  @Input() articles?: Articles;

  constructor() { }

  ngOnInit(): void {
  }

}
