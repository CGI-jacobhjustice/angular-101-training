import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inherits } from 'util';
import { GenericAssetDetailComponent } from '../_Shared/GenericAssetDetailComponent';

@Component({
  selector: 'app-retire',
  templateUrl: `./retire.component.html`,
  styles: [`h1 { font-family: Lato; }`]
})
export class RetireComponent extends GenericAssetDetailComponent  {
  // @Input() name: string;
  // constructor (private route:ActivatedRoute){}

  // ngOnInit() {
  //   let name = this.route.snapshot.paramMap.get('name');
  
  //   this.name = name
  // }
}

