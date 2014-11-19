var should = require('should')
    , parse  = require('../index');


  function parsed(func) {
    var str = func.toString();
    return parse(str.slice(
      str.indexOf('{') + 1,
      str.lastIndexOf('}')
    ).trim());
  }

describe('Parser', function() {
    it('parse descriptions with dollar ($) signs', function() {
        
        (parsed(function(){
          /**
           * Description first line
           *
           * $ Description second line
           */
          var a;
        })[0].description)
          .should.equal('Description first line\r\n\r\n$ Description second line');
        });
});
