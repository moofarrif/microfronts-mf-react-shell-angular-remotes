import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { genericStyle } from '../../../assets/json-style';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  
  label:string =genericStyle?.title?.label;
  color:string = genericStyle?.title?.color;
  show:boolean = genericStyle?.title?.show;
  

  constructor(public router: Router) {}
  
  
  ngOnInit(): void {
    // console.log(this.label);
  }
}
