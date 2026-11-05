import { describe, it, expect } from '@jest/globals';
import { layoutEpochLine, epochZoneHeight } from '../ticker-renderer.js';

describe('layoutEpochLine', () => {
   it('places the label just left of a fully visible line', () => {
      expect(layoutEpochLine(300, 300, 700, 70)).toEqual({ labelX: 226, lineStart: 300 });
   });

   it('pins the label and starts the line after it when the epoch starts off-screen', () => {
      expect(layoutEpochLine(-200, 0, 600, 70)).toEqual({ labelX: 6, lineStart: 80 });
   });

   it('pins the label when the epoch starts too close to the left edge', () => {
      expect(layoutEpochLine(20, 20, 600, 70)).toEqual({ labelX: 6, lineStart: 80 });
   });

   it('drops the label when too little line would remain after it', () => {
      expect(layoutEpochLine(-200, 0, 85, 70)).toEqual({ labelX: null, lineStart: 0 });
   });

   it('draws the line alone when the label has not been measured', () => {
      expect(layoutEpochLine(300, 300, 700, 0)).toEqual({ labelX: null, lineStart: 300 });
   });
});

describe('epochZoneHeight', () => {
   it('is 14px per epoch', () => {
      expect(epochZoneHeight(0)).toBe(0);
      expect(epochZoneHeight(3)).toBe(42);
   });
});
