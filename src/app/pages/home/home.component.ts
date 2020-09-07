import { Component, OnInit} from '@angular/core';
import 'ol/ol.css';
import {Map, View, Overlay} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Layer from 'ol/layer/Layer';
import { toStringHDMS } from 'ol/coordinate';
import { toLonLat, fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private authService: AuthService, private route: Router ) { }


  ngOnInit(): void {
    this.getMaps();
  }

 getMaps(): void {

  const container = document.getElementById('popup');
  const content = document.getElementById('popup-content');
  const closer = document.getElementById('popup-closer');

  const overlay = new Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
      duration: 250
    }
  });

  const map = new Map({

    target: 'map',
     layers: [
       new TileLayer({
         source: new OSM()
       })
     ],
     overlays: [overlay],
     view: new View({
       center: fromLonLat([37.41, 8.82]),
       zoom: 3,
       maxZoom: 10
     })
   });
  //  map.on('singleclick',function(evt) {
  //    const coordinate = evt.coordinate;
  //     const hdms = toStringHDMS(toLonLat(coordinate));
  //   content.innerHTML = '<p>Current coordinates are :</p> <code>'+ hdms + '</code>';  
  // overlay.setPosition(coordinate); })
 }

}