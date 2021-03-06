function Captcha(pattern, operator, leftOperand, rightOperand){
    this.generate = function() {
        let op = new opera(operator);
        let le = new left(pattern,leftOperand);
        let ri = new right(pattern,rightOperand);
        return le+' '+op+' '+ri;
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
    if(o===3){
      return '*';
    }
    if(o===4){
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
        if(l===2){
          return 'Two';
        }
        if(l===3){
          return 'Three';
        }
        if(l===4){
          return 'Four';
        }
        if(l===5){
          return 'Five';
        }
        if(l===6){
          return 'Six';
        }
        if(l===7){
          return 'Seven';
        }
        if(l===8){
          return 'Eight';
        }
        if(l===9){
          return 'Nine';
        }
      }
    }
}
function right(p,r){
    this.toString = function(){
      if(p===1){
        if(r===0){
          return 'Zero';
        }
        if(r===1){
          return 'One';
        }
        if(r===2){
          return 'Two';
        }
        if(r===3){
          return 'Three';
        }
        if(r===4){
          return 'Four';
        }
        if(r===5){
          return 'Five';
        }
        if(r===6){
          return 'Six';
        }
        if(r===7){
          return 'Seven';
        }
        if(r===8){
          return 'Eight';
        }
        if(r===9){
          return 'Nine';
        }
      }
      if(p===2){
          return r;
      }
    }
}
describe('Captcha App', function() {
  describe('Pattern is 1', function() {
    let pattern = 1;
    it('should return "5 + Six" when input is 1,1,5,6', function(){
       let app = new Captcha(pattern,1,5,6);
       expect(app.generate()).toEqual('5 + Six');
    })
    it('should return "2 - Five" when input is 1,2,2,5', function(){
       let app = new Captcha(pattern,2,2,5);
       expect(app.generate()).toEqual('2 - Five');
    })
    it('should return "7 * Two" when input is 1,3,7,2', function(){
       let app = new Captcha(pattern,3,7,2);
       expect(app.generate()).toEqual('7 * Two');
    })
    it('should return "9 / Three" when input is 1,4,9,3', function(){
       let app = new Captcha(pattern,4,9,3);
       expect(app.generate()).toEqual('9 / Three');
    })
    it('should return "6 + One" when input is 1,1,6,1', function(){
       let app = new Captcha(pattern,1,6,1);
       expect(app.generate()).toEqual('6 + One');
    })
    it('should return "4 - Nine" when input is 1,2,4,9', function(){
       let app = new Captcha(pattern,2,4,9);
       expect(app.generate()).toEqual('4 - Nine');
    })
    it('should return "3 * Eight" when input is 1,3,3,8', function(){
       let app = new Captcha(pattern,3,3,8);
       expect(app.generate()).toEqual('3 * Eight');
    })
    it('should return "8 / Four" when input is 1,4,8,4', function(){
       let app = new Captcha(pattern,4,8,4);
       expect(app.generate()).toEqual('8 / Four');
    })
    it('should return "1 + Nine" when input is 1,1,1,9', function(){
       let app = new Captcha(pattern,1,1,9);
       expect(app.generate()).toEqual('1 + Nine');
    })
    it('should return "5 - Five" when input is 1,2,5,5', function(){
       let app = new Captcha(pattern,2,5,5);
       expect(app.generate()).toEqual('5 - Five');
    })
  })
  describe('Pattern is 2', function() {
    let pattern = 2;
    it('should return "Six + 5" when input is 2,1,6,5', function() {
       let app = new Captcha(pattern,1,6,5);
       expect(app.generate()).toEqual('Six + 5');
    })
    it('should return "Five - 2" when input is 2,2,5,2', function() {
       let app = new Captcha(pattern,2,5,2);
       expect(app.generate()).toEqual('Five - 2');
    })
    it('should return "Two * 7" when input is 1,3,2,7', function(){
       let app = new Captcha(pattern,3,2,7);
       expect(app.generate()).toEqual('Two * 7');
    })
    it('should return "Three / 9" when input is 2,4,3,9', function(){
       let app = new Captcha(pattern,4,3,9);
       expect(app.generate()).toEqual('Three / 9');
    })
    it('should return "One + 6" when input is 2,1,1,6', function(){
       let app = new Captcha(pattern,1,1,6);
       expect(app.generate()).toEqual('One + 6');
    })
    it('should return "Nine - 4" when input is 2,2,9,4', function(){
       let app = new Captcha(pattern,2,9,4);
       expect(app.generate()).toEqual('Nine - 4');
    })
    it('should return "Eight * 3" when input is 2,3,8,3', function(){
       let app = new Captcha(pattern,3,8,3);
       expect(app.generate()).toEqual('Eight * 3');
    })
    it('should return "Four / 8" when input is 2,4,4,8', function(){
       let app = new Captcha(pattern,4,4,8);
       expect(app.generate()).toEqual('Four / 8');
    })
    it('should return "Two * 3" when input is 2,3,2,3', function(){
       let app = new Captcha(pattern,3,2,3);
       expect(app.generate()).toEqual('Two * 3');
    })
    it('should return "Nine / 9" when input is 2,4,9,9', function(){
       let app = new Captcha(pattern,4,9,9);
       expect(app.generate()).toEqual('Nine / 9');
    })
  })
})
