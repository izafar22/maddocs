import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor() { }

  getData(){
    return (3==3) || "cow";
  }

}
