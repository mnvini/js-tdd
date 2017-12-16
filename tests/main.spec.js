describe('Main', function() {
  //roda uma vez antes do bloco
  before(function() {
    console.log('before');
  });

  //roda uma vez epois do bloco
  after(function() {
    console.log('after');
  });

  //roda todas as vezes ANTES DE CADA bloco
  beforeEach(function() {
    console.log('beforeEach');
  });

  //roda todas as veses DEPOIS DE CADA bloco
  afterEach(function() {
    console.log('afterEach');
  });

  it('teste 1', function() {
    console.log('teste 1');
    return true;
  });

  it('teste 2', function() {
    console.log('teste 2');
    return true;
  });
  // describe('Method A', function() {
  //   context('Case 1', function() {
  //     //usar it.skip pra quando quiser pular um teste
  //     it.skip('should happen blablabla', function() {
  //       throw new Error('error');
  //     });
  //   });
  //   //usa context.only() prarodar somente um test
  //   context.only('Case 2', function() {
  //     it('should happen mimimi', function() {
  //       return true;
  //     });
  //   });
  // });
});
