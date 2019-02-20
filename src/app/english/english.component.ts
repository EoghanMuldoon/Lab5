import { Component, OnInit } from '@angular/core';
import {HalfService} from '../Services/half.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html'
})
export class EnglishComponent implements OnInit {

  constructor(private halfService:HalfService) { }

  ngOnInit() {
  }
  number : number;
	half : number;

  	getHalf() {
  		this.half=this.halfService.getHalf(this.number);
  	}

}
