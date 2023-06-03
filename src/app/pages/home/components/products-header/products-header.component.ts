import { Component, EventEmitter, OnInit, Output   } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  @Output() columsCountChange = new EventEmitter<number>();
  sort = 'desc'
  itemsShowCount = 12

  constructor() {}

  ngOnInit(): void {
  }

  onSortUpdate(newSort: string): void {
    this.sort = newSort;

  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }
  
  onColumsUpdated(colsNum: number): void {
    this.columsCountChange.emit(colsNum);
  }


  
}
