import { Component, OnInit } from '@angular/core';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import Style from 'ol/style/Style';

@Component({
  selector: 'app-baselayer',
  templateUrl: './baselayer.component.html',
  styleUrls: ['./baselayer.component.scss']
})
export class BaselayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


}
