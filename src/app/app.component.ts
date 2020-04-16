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
  hasilGanjil = [];
  pola = [];

  hitung(a, b){
    this.hasil = Math.pow(a,b);
    this.status = 1;
    this.pola = [];
    var str="";
    if(this.hasil%2 == 0){
      this.pola.push("POLA B");
      for(var i=b;i<=(this.hasil);i++){
        for(var j=0;j<i;j++){
          str += "*"
        }
        this.pola.push(str)
        str = "";
      }
    }else{
      this.pola.push("POLA A");
      for(var i=b; i>=0; i--){
        for(var j = 0; j<i; j++){
          str+='*';
        }
        this.pola.push(str)
        str='';
      }
      var temp = [];
      var i;
      for(i=0; i<a; i++){
        for(var j = 0; j<=i; j++){
          str+='O';
        }
        temp.push(str);
        str = '';
      }
      for(i = 0; i<temp.length; i++){
        this.pola[i+1]+=temp[i];
      }
    }
    return this.hasil;
  }

  ubah(){
    this.status = 1;
    this.hitung(this.a,this.b);
  }

  clear(){
    this.a = 0;
    this.status = 0;
    this.b = 0;
  }
}
