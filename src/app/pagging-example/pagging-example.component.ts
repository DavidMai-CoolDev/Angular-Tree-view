import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagging-example',
  templateUrl: './pagging-example.component.html',
  styleUrls: ['./pagging-example.component.scss']
})
export class PaggingExampleComponent implements OnInit {
  collection = { count: 60, data: [] as any };
  config = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.collection.count
  };

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };


  constructor() {
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
        }
      );
    }
  }

  test2() {
    console.log(this.config.totalItems / this.config.itemsPerPage);
  }

  test(event: any) {
  console.log(event);
  }

  onPageChange(event: number) {
    console.log(event);
    // this.config.currentPage = event;
  }
  ngOnInit(): void {
  }

  pageChanged(event: any) {
    console.log(event);
  }

  pageChange(event: any) {
    console.log('event123');
  }

}
