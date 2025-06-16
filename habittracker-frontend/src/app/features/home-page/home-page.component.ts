import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  public data!: string;

  private subscriptions: Subscription[] = [];
  constructor(
    private _authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this._authService.getData().subscribe((value) => {
      this.data = value
      console.log(this.data);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
