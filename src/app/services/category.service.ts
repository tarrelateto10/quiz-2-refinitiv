import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  inputValue: string = '';

  constructor() {}

  getInputValue() {
    return this.inputValue;
  }

  setInputValue(value: string) {
    this.inputValue = value;
  }
}
