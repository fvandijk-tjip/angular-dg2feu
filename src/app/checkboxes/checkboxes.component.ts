import { Component, OnInit } from '@angular/core';
import { ITreeOptions } from 'angular-tree-component'
import { nodez, azyncChildren, newNodez } from '../data';


@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

nodes = nodez;

  options: ITreeOptions = {
    useCheckbox: true,
    getChildren: this.getChildren.bind(this)
  };

  optionsDisabled: ITreeOptions = {
    useCheckbox: true,
    getChildren: this.getChildren.bind(this),
    useTriState: false
  };

  getChildren(node: any) {
    const newNodes = newNodez;

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(newNodes), 2000);
    });
  }

}