import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ng-selected-example',
  templateUrl: './ng-selected-example.component.html',
  styleUrls: ['./ng-selected-example.component.scss']
})
export class NgSelectedExampleComponent implements OnInit {
  itemId: number =1;
  currentItem:number =0;
  item2: string[] = [];
  item3: number[] = [];
  selectControl: FormControl[] = [];
  items = [
    {
      value: [{name:'test1',age: 27,id:122}
      ,{name:'test2',age: 30, id: 222}
      ,{name:'test3',age: 40, id: 3}]
    },{
      value: [{name:'test4',age: 27,id:'askd;lak'}
      ,{name:'test5',age: 30, id: 2}
      ,{name:'test6',age: 40, id: 3}]
    },{
      value: [{name:'test7',age: 27,id:1}
      ,{name:'test8',age: 30, id: 2}
      ,{name:'test9',age: 40, id: 3}]
    }
  
  ];
  // public selectControl = new FormControl();
  constructor() { 
    // this.selectControl[1].valueChanges.subscribe(value => {console.log(value); this.filterValue(value)});
  }

  ngOnInit(): void {
    this.setInitValue();
  }

  setInitValue() {
    this.items.forEach((el,index) =>{
      this.item2.push('');
      this.item3.push(0);
      this.selectControl.push(new FormControl());
    });
      this.selectControl.forEach(el => {
        el.valueChanges.subscribe(value => {console.log(value); this.currentItem = value; });
      });
    
  }
  filterValue(index: number) {
    // console.log(this.items[index-1]);
    // this.item2[index-1] = this.items[index-1].value[index-1].name;
    // this.item3[index -1] = this.items[index-1].value[index-1].age;
  }

  test(i:number, value: any){
    setTimeout(() =>{
      console.log(i);
    console.log(this.currentItem);
    var u = this.items[i].value.filter(x => x.id == this.currentItem);
    this.item2[i] = u[0].name;
    this.item3[i] = u[0].age;
        // console.log(u);
    // this.item2[i] = this.items[i].value[this.currentItem].name;
    // this.item3[i] = this.items[i].value[this.currentItem].age;
    },1000);
    
    // console.log(value[i]);
  }
  convertData() {
    for (let index = 0; index < this.items.length; index++) {
      this.items[index].valueExtra1 = this.item2[index];
      this.items[index].valueExtra2 = this.item3[index];
    }
  }
  submitData() {
    this.convertData();
    console.log('oooo');
    console.log(this.items);
  }
}
