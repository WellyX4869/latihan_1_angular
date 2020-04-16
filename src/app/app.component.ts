import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Latihan 1 Angular';
  a = 0;
  b = 0;
  status = 0;
  hasil = 0;
  loopGenap = 0;
  hasilGenap = '';
  hasilGanjil = [];
  pola = [];
  ubah(){
    this.status = 1;
  }

  hitung(a, b){
    this.hasil = Math.pow(a,b);
    return Math.pow(a,b);
  }

  clear(){
    this.a = 0;
    this.b = 0;
  }
}
