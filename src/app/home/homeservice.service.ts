import { Injectable } from '@angular/core';

@Injectable()
export class HomeserviceService {

  constructor() { }

  getContent(){
    return 'Hello I am the new Guy on the block';
  }

}
