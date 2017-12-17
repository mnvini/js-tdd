import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';
describe('Calc', () => {
  describe('Smoke Test', () => {
    it('shouls exists the method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('shouls exists the method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('shouls exists the method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('shouls exists the method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('shold return -2 when sub(6,8)', () => {
      expect(sub(4, 2)).to.be.equal(2);
    });
  });

  describe('Mult', () => {
    it('should return 4 when mult(2,2)', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 2 when div(4,2)', () => {
      expect(div(4, 2)).to.be.equal(2);
    });
  });

  describe('Div', () => {
    it('should return `0 is not divisible`', () => {
      expect(div(3, 0)).to.be.equal('0 is not divisible');
    });
  });
});
