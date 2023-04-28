import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs';

const TIME_DELAY = 2000;

@Injectable({
  providedIn: 'root'
})
export class AllertService {
  private _isShow = false;
  private _allertString = "";

  public get allertString() {
    return this._allertString;
  }
  public get isShow() {
    return this._isShow;
  }

  constructor() { }

  public showError(err:string) {
    this._isShow = true;
    this._allertString = err;
    setTimeout(()=>{
      this._isShow = false;
      this._allertString = "";
    },TIME_DELAY)
  }

}