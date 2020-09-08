import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy  {

  private subscription: Subscription;
  message: any;
  private timer: Observable<any>;

  constructor(private alertService: AlertService) {
    this.subscription = alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }



  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  closeMessage(): void {
    this.alertService.clearAlertMessage();
  }
}
