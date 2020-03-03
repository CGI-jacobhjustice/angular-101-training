import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goodbye',
  template: `<h1>Goodbye...</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class GoodbyeComponent   {
  // @Input() name: string;
  // constructor (private route:ActivatedRoute){}

  // ngOnInit() {
  //   let name = this.route.snapshot.paramMap.get('name');
  
  //   this.name = name
  // }
}

