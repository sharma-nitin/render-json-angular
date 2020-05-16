import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-renderer',
  templateUrl: './json-renderer.component.html',
  styleUrls: ['./json-renderer.component.scss']
})
export class JsonRendererComponent implements OnInit {
  value: any;

  data = {
    "nodeOne": "string",
    "nodeTwo": "Date",
    "nodeThree": "number",
    "nodeFour": [
      { "elementOne": "string" },
      { "elementTwo": "number" },
      { "elementThree": "number" },
      {
        "elementFour": [
          { "elementFive": "Date" },
          { "elementSix": "number" }
        ]
      }
    ],
    "nodeFive": [
      { "elementOne": "string" },
      { "elementTwo": "number" },
      { "elementThree": "number" },
      {
        "elementFour": [
          { "elementSeven": "string" },
          { "elemenEight": "number" },
        ]
      }
    ]
  };
  
  ModalKey: string[];

  constructor() { }

  ngOnInit() {
  }

  getKey(value: any) {
    return Object.keys(value)[0];
  }

  getvalue(value: any) {
    if (Object.values(value)[0] === 'string') {
      return 'Text input';
    } else
      if (Object.values(value)[0] === 'number') {
        return 'Number input';
      } else
        if (Object.values(value)[0] === 'Date') {
          return 'Date picker input';
        } else {
          return 'list';
        }
  }

  showListData(value: any) {
    this.ModalKey = Object.keys(value);
    this.value = Object.values(value)[0];
    console.log(this.value);
  }

}
