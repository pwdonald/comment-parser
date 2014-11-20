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
    it('parse descriptions with dollar ($) signs', function () {        
        (parsed(function(){
            /**
             * @name IAppStatic
             * @memberof plat
             * @kind interface
             * 
             * @description
             * The external interface for the '$AppStatic' injectable.
             */
          var a;
        })[0]['tags'][3].description)
          .should.equal('The external interface for the \'$AppStatic\' injectable.');
        });
});
