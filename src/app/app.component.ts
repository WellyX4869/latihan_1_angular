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

  ubah(){
    this.status = 1;
  }

  hitung(a, b){
    this.hasil = Math.pow(a,b);
    
    if(this.hasil % 2 == 0){
      this.loopGenap = Math.pow(a,b) - b+1;
      for(var i = 0; i<this.loopGenap; i++){
        for(var j = b; b<this.hasil; j++){
          this.hasilGenap += '*';
        }
        this.hasilGenap+= '\n';
      }
    }else{

    }
    return this.hasil;
  }

  clear(){
    this.a = 0;
    this.b = 0;
    this.status = 0;
    this.loopGenap = 0;
  }
}
