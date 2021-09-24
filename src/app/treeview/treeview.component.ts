import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {
  d: any
  data: any[] = []
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get('http://www.mocky.io/v2/5c3c7ad13100007400a1a401')
      .subscribe(res => {
        this.d = res
        this.data = this.nestingData(this.d.nodes)
      })
  }
  nestingData(items: any[], id = 0, link = "parent"): any {
    return items.filter((item) => item[link] === id).map((item) => (
      { ...item, isOpen: false, children: this.nestingData(items, item.id) })
    );
  }
  update = (id: any) => (obj: any) => {
    if (obj.id === id)
      obj.isOpen = !obj.isOpen;
    else if (obj.children)
      obj.children.forEach(this.update(id,));
  };
  getSelection(item: any) {
    this.data.forEach(this.update(item.id))
  }
}
