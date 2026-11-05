import { describe, it, expect, jest, beforeEach, afterEach } from '@jest/globals';
import { resolveConfig } from '../config.js';

describe('resolveConfig epochStyle', () => {
   let warnSpy;

   beforeEach(() => {
      warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
   });

   afterEach(() => {
      warnSpy.mockRestore();
   });

   it("defaults to 'bar'", () => {
      expect(resolveConfig({}).epochStyle).toBe('bar');
      expect(resolveConfig(undefined).epochStyle).toBe('bar');
   });

   it("accepts 'line'", () => {
      expect(resolveConfig({ epochStyle: 'line' }).epochStyle).toBe('line');
      expect(warnSpy).not.toHaveBeenCalled();
   });

   it("warns and falls back to 'bar' on an invalid value", () => {
      expect(resolveConfig({ epochStyle: 'dotted' }).epochStyle).toBe('bar');
      expect(warnSpy).toHaveBeenCalled();
   });

   it('accepts epochs without a color', () => {
      const config = resolveConfig({ epochs: [{ id: 'x', label: 'X', start: '1900', end: '1950' }] });
      expect(config.epochs).toHaveLength(1);
   });
});
