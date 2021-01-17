import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-tree';
  treeData: any = [];
  myData: any = [];
  isShowTree: boolean = false;
  folderName: string ='';
  datas: any ={};
  dataTest: any =[];
  lessons: boolean = false;
  allFile: number = 0;
  smallFile: number = 0;
  count: number = 0;

  constructor(){}
  ngOnInit(): void {
    this.treeData = [
      {
        name: 'testter'
      },
      {
        name: 'other',
        children: [
          {
            name:'test1-1',
        },
        {
          name: 'test1-2'
        },
        {
          name: 'ak47'
        },
        {
          name: 'ak48'
        }
      ]
      },
      {
        name: 'another',
        children: [
          {
            name: 'test2-1',
            children: [
              {
                name: 'test2-1-1',
                children: [
                  {
                    name: 'test2-1-1-1'
                  },{
                    name: 'ak47'
                  },
                  {
                    name: 'ak48'
                  }
                ]
              },
              {
                name: 'test2-1-2'
              }
            ]
          },
          {
            name: 'test2-2'
          },
          {
            name: 'okmen'
          }
        ]
      },
      {
        name: 'okmen2'
      },
      {
        name: 'ak47',
        children: [
          {
            name: 'ak50'
          },
          {
            name: 'ak51'
          }
        ]
      }
      
    ];
    // this.treeData = [
    //   {
    //     name: 'testter',
    //     children: []
    //   },
    //   {
    //     name: 'test1',
    //     children: [
    //       {
    //         name:'test1-1',
    //         children: []
    //     },
    //     {
    //       name: 'test1-2',
    //       children: []
    //     },
    //     {
    //       name: 'ak47',
    //       children: []
    //     }
    //   ]
    //   },
    //   {
    //     name: 'test2',
    //     children: [
    //       {
    //         name: 'test2-1',
    //         children: [
    //           {
    //             name: 'test2-1-1',
    //             children: [
    //               {
    //                 name: 'test2-1-1-1',
    //                 children: []
    //               },{
    //                 name: 'ak47',
    //                 children: []
    //               }
    //             ]
    //           },
    //           {
    //             name: 'test2-1-2',
    //             children: []
    //           }
    //         ]
    //       },
    //       {
    //         name: 'test2-2',
    //         children: []
    //       },
    //       {
    //         name: 'okmen',
    //         children: []
    //       }
    //     ]
    //   },
    //   {
    //     name: 'okmen2',
    //     children: []
    //   },
    //   {
    //     name: 'ak47',
    //     children: [
    //       {
    //         name: 'ak50',
    //         children: []
    //       },
    //       {
    //         name: 'ak51',
    //         children: []
    //       },
    //       {
    //         name: 'ak52',
    //         children: []
    //       }
    //     ]
    //   }
      
    // ];

    this.myData = this.treeData;
    for(let i = 0; i<this.myData.length; i++){
      // this.smallFile =0;
      this.updateTree(this.myData[i]);
    }
    console.log(this.myData);
    this.isShowTree = true;

    // this.datas = { tree: [{ name: 'name1', tree: [{ name: 'name2' }, { name: 'name3' }, { name: 'name4', tree: [{ name: 'name5' }, { name: 'name6' }] }, { name: 'name7' }] }, { name: 'name8', tree: [{ name: 'name9' }] }] };

  
  }
  // its just list data from here down

//   updateTree(data: any) {
//      data.expand = true;
//      if(data.children.length > 1){
//      for(let j = 0, len = data.children.length; j < len; j++) {
//        this.updateTree(data.children[j]);
//      }
//    }else{
//       data.expand = false;
//   } 
// }

updateTree(data: any) {
  data.expand = true;
  this.count ++;
  if(data.children && data.children.length > 0){
    this.smallFile =0;
  for(let j = 0, len = data.children.length; j < len; j++) {
    this.smallFile +=1;
    data.numberFile = this.smallFile;
    this.updateTree(data.children[j]);
  }
  this.allFile+= data.children.length;
  // this.smallFile++;
}else{
  // this.allFile+=1;
  data.numberFile = 1;
   data.expand = false;
} 
}


filterdata() {

  if(this.folderName) {
    this.myData = [];
  this.treeData.forEach((element:any) => {
    this.myData.push(this.find(element,this.folderName));
  });
  this.myData = this.myData.filter((item:any) => item !== undefined && item !== false)
  console.log(this.myData);

  }else {
    
    this.myData = this.treeData;
  }
  
}

find(object: any, name: string):any {
  // let result;
  if (object.name.includes(name)) {return object;}
   else {
    this.myData.push(this.find1(object, name));
     }
  // return false;
  // return children.some((o:any) => result = this.find1(o, name)) && Object.assign({}, object, { children: [result] });
}

 find1({children = [], ...object}, name: string):any {
  let result;
  console.log(object);
  if (object.name.includes(name)) return object;
  return children.some((o:any) => result = this.find1(o, name)) && Object.assign({}, object, { children: [result] });
}

toggleChildren(node: any) {
  node.expand = !node.expand;
  console.log(node);
  if(!node.children || node.children.length == 0){
    alert('get API for: ' + node.name);
  }
}

 
}
