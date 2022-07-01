import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-show-component',
  templateUrl: './show-component.component.html',
  styleUrls: ['./show-component.component.scss'],
})
export class ShowComponentComponent {
  public categories: string[] = [];
  constructor(
    private apiService: ApiService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiService.getCategories().subscribe((data) => {
      this.categories = data.categories;
    });
  }

  filterData() {
    if (this.categoryService.getInputValue() === '') {
      return this.categories;
    } else {
      const filter = this.categories.filter((data) =>
        data.match(this.categoryService.getInputValue())
      );
      return filter;
    }
  }
}
