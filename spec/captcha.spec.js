function opera(o){
  this.toString = function(){
    if(o===1){
      return '+';
    }
    else if(o===2){
      return '-';
    }
    if(o==='3'){
      return '*';
    }
    if(o==='4'){
      return '/';
    }
  }
}
function left(p,l){
    this.toString = function(){
      if(p===1){
          return l;
      }
      if(p===2){
        if(l===0){
          return 'Zero';
        }
        if(l===1){
          return 'One';
        }
        if(l==='2'){
          return 'Two';
        }
        if(l==='3'){
          return 'Three';
        }
        if(l==='4'){
          return 'Four';
        }
        if(l==='5'){
          return 'Five';
        }
        if(l==='6'){
          return 'Six';
        }
        if(l==='7'){
          return 'Seven';
        }
        if(l==='8'){
          return 'Eight';
        }
        if(l==='9'){
          return 'Nine';
        }
      }
    }
}
function right(p,r){
    this.toString = function(){
      if(p===1){
        if(r==='0'){
          return 'Zero';
        }
        if(r==='1'){
          return 'One';
        }
        if(r==='2'){
          return 'Two';
        }
        if(r==='3'){
          return 'Three';
        }
        if(r==='4'){
          return 'Four';
        }
        if(r==='5'){
          return 'Five';
        }
        if(r==='6'){
          return 'Six';
        }
        if(r==='7'){
          return 'Seven';
        }
        if(r==='8'){
          return 'Eight';
        }
        if(r==='9'){
          return 'Nine';
        }
      }
      if(p===2){
          return r;
      }
    }
}
