import {Component, Input, OnInit} from '@angular/core';
import {product} from "../Model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() LineCommande :product ={} ;

  constructor() { }

  ngOnInit(): void {
  }

}
