import { getField, isFalsyField } from '../selectors';

describe('selectors', () => {
  describe('getField', () => {
    it('should return field value', () => {
      const field = 'someValue';
      const state = { field };
      const result = getField(state);

      expect(result).toEqual(field);
    });
  });

  describe('isFalsyField', () => {
    it('should use correct sub selectors', () => {
      expect(isFalsyField.dependencies).toEqual([
        getField,
      ]);
    });

    it('should return true if field is null', () => {
      const field = null;
      const result = isFalsyField.resultFunc(field);

      expect(result).toBe(true);
    });

    it('should return true if field is undefined', () => {
      const field = undefined;
      const result = isFalsyField.resultFunc(field);

      expect(result).toBe(true);
    });

    it('should return true if field is empty string', () => {
      const field = '';
      const result = isFalsyField.resultFunc(field);

      expect(result).toBe(true);
    });

    it('should return false if field is not empty string', () => {
      const field = 'someValue';
      const result = isFalsyField.resultFunc(field);

      expect(result).toBe(false);
    });

    it('should return false if field is object', () => {
      const field = {};
      const result = isFalsyField.resultFunc(field);

      expect(result).toBe(false);
    });

    // and etc...
  });
});
