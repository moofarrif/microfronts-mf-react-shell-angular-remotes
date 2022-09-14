import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib-ng',
  template: `
    <p>
      my-lib-ng works!
    </p>
  `,
  styles: [
  ]
})
export class MyLibNgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
