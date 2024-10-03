import { useProducts } from '../useProducts';
import { renderHook } from '@testing-library/react';
describe('test useProducts hook', () => {
    it('should return products list', () => {
        const { result } = renderHook(() => useProducts());
        expect(result.current.length).toBeGreaterThan(0);
    });
    it('should return the same product list every time', () => {
        const { result, rerender } = renderHook(() => useProducts());
        const tmp = result.current;
        rerender();
        expect(result.current).toEqual(tmp);
    });
});