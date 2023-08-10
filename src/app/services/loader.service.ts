import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading: boolean = false;

  constructor() { }

  show(): void {
    this.isLoading = true;
  }

  hide(): void {
    this.isLoading = false;
  }

  get loading(): boolean {
    return this.isLoading;
  }
}
