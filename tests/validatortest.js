import { expect } from 'chai';
import { isXSS, isSQLi } from '../src/validator.js';

describe('Input Validation', () => {
  describe('XSS Detection', () => {
    it('should detect <script> tag', () => {
      expect(isXSS('<script>alert(1)</script>')).to.be.true;
    });

    it('should allow normal input', () => {
      expect(isXSS('hello world')).to.be.false;
    });
  });

  describe('SQL Injection Detection', () => {
    it("should detect ' OR 1=1--", () => {
      expect(isSQLi("' OR 1=1--")).to.be.true;
    });

    it('should allow safe input', () => {
      expect(isSQLi('pineapple juice')).to.be.false;
    });
  });
});
