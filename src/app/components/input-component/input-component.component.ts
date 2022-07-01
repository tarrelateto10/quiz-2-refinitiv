import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
})
export class InputComponentComponent implements OnInit {
  input = '';
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}

  onChange(newValue: any) {
    this.input = newValue;
    this.categoryService.setInputValue(this.input);
  }
}
