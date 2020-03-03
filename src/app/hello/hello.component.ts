import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello !</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent   {
  // @Input() name: string;
  // constructor (private route:ActivatedRoute){}

  // ngOnInit() {
  //   let name = this.route.snapshot.paramMap.get('name');
  
  //   this.name = name
  // }
}

