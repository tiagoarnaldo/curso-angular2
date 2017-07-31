import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
     return  ['CursosService','Java', 'Ext Js', 'Angular'];
  }
}
