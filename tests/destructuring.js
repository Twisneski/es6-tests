'use strict'
var expect = require('chai').expect;

describe('let', function() {
  it('can define a variable', function() {
    let x=9;
    expect(x).to.equal(9);
  });
  it('can be used in an equation', function() {
    let x=5, y=10, z=4;
    var sum=x+y+z;
    expect(sum).to.equal(19);
  });
});

//scotts example let-declaration
describe('let declaration', function () {
  let foo = 'bar';

  expect(foo).to.equal('bar');
});

it('restricts scope to the block', function (){
   let foo = 'bar';

   if(true) {
     let foo = 'baz';
   }

   expect(foo).to.equal('bar');
  });

  //scotts example of destructuring
  var expect = require('chai').expect;

  describe('destructuring', function (){
    describe('arrays', function () {
      it('can extract from arrays', function () {
        var [foo, bar] = ['baz', 'qux'];

        expect(foo).to.equal('baz');
        expect(bar).to.equal('qux');
      });

      it('can handle leading commas', function () {
        var [,,c] = ['apple', 'banana', 'carrot'];

        expect(b).to. equal('banana');
      });

      it('can handle nested arrays', function () {
        var [uno, dos, [tres, [cuatro]]] = [1.2 [3,[4]]];

        expect ([uno, dox, tres, cuatro]).to.eql([1,2,3,4]);
      });





