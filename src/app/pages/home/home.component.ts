import { Component, OnInit} from '@angular/core';
import 'ol/ol.css'
import {Map,View} from 'ol';
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }


  ngOnInit(): void {
    this.getMaps()
  }

 getMaps() {
   const map = new Map({
    
    target:'map',
     layers: [
       new TileLayer({
         source:new OSM()
       })
     ],
     view: new View({
       center: [0,0],
       zoom:3,
        
     })
     
   })

 }
  



}
