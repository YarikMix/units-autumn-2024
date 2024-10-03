import { useCurrentTime } from '../useCurrentTime';
import { act, renderHook } from '@testing-library/react';
describe('Test useCurrentTime hook', () => {
    beforeEach(() => {
        jest.useFakeTimers().setSystemTime(new Date('2024-10-03 00:00:00'));
    });
    it('should return current time', () => {
        const { result } = renderHook(() => useCurrentTime());
        expect(result.current).toEqual('00:00:00');
        act(() => jest.advanceTimersByTime(1000));
        expect(result.current).toEqual('00:00:01');
    });
});