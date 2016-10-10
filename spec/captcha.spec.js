function Captcha(pattern, operator, leftOperand, rightOperand){
    this.generate = function() {
        let op = new opera(operator);
    }
  }
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
