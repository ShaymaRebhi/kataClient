import { Component, OnInit } from '@angular/core';
import {Command} from "../Model/command";
import {CommandService} from "../_services/command.service";
import {product} from "../Model/product";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

   panier:product={};
result : Command;
  LignesCommande :Array<product> = [] ;
  constructor(private CommandService : CommandService) { }

  ngOnInit(): void {

  }
  ajouterLigneCommande(): void {
    const productAlreadyExist = this.LignesCommande.find(lig => lig.description ==this.panier.description )
    if(productAlreadyExist){
      this.LignesCommande.forEach(lig=>{
        if(lig && lig.description ==this.panier.description){
       lig.count = lig.count + + this.panier.count
        }
      })

    }else {
    const LigneCmd:product  = {
      count:this.panier.count,
      category:this.panier.category,
      unitPrice:this.panier.unitPrice,
      description:this.panier.description,
      imported:this.panier.imported
    };

    this.LignesCommande.push(LigneCmd);


  } this.Calculate()}
  Calculate() : void {
this.CommandService.calculate(this.LignesCommande).subscribe(data=>
  this.result = data )

  }
}
