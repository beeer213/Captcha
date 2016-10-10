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
