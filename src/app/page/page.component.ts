import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  pageNum = 0;

  @Input() defaultPage: any;
  @Output() page: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
    console.log("defaultPage", this.defaultPage);
    this.pageNum = this.defaultPage;
  }

  changePage(pageNum: any) {
    this.pageNum = pageNum;
    this.page.emit(this.pageNum);
  }
}
