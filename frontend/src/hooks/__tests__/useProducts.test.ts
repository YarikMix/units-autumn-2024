import { useProducts } from '../useProducts';
import { renderHook } from '@testing-library/react';
describe('test useProducts hook', () => {
    it('should return products list', () => {
        const { result } = renderHook(() => useProducts());
        expect(result.current).toMatchSnapshot();
    });
});