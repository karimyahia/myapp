import { Component, OnInit } from '@angular/core';
import {Good} from '../../interfaces/good.interce';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  goods: Good[] = []
  constructor(private gs: GoodsService) { }

  ngOnInit() {
    this.gs.getAllGoods().subscribe(data => this.goods =data)
  }
  addToCart(index){
    console.log('added', this.goods[index]);
  }
}
