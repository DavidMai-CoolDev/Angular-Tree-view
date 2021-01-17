import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  @Input() treeData: any[] =[];
  @Input() allFile: number =0;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.treeData);
    // this.updateTree(this.treeData);
    console.log(this.allFile);
  }

  toggleChildren(node: any) {
    node.expand = !node.expand;
    console.log(node);
    if(!node.children || node.children.length == 0){
      alert('get API for: ' + node.name);
      node.expand = false;
    }
  }
}
