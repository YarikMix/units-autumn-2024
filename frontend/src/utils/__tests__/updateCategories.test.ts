import { updateCategories } from '../updateCategories';
describe('test update category function', () => {
    it('should toggle category in categories', () => {
        expect(updateCategories(['Для дома', 'Одежда'], 'Для дома')).toEqual([
            'Одежда',
        ]);
        expect(updateCategories(['Для дома', 'Одежда'], 'Электроника')).toEqual(
            ['Для дома', 'Одежда', 'Электроника']
        );
        expect(updateCategories([], 'Электроника')).toEqual(['Электроника']);
    });
});