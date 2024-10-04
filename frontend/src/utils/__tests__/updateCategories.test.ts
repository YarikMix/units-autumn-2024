import { updateCategories } from '../updateCategories';
describe('test update category function', () => {

    const electronic = 'Электроника';
    const clothes = 'Одежда';
    const home = 'Для дома';

    it('should return removed categories', () => {
        expect(updateCategories([home, clothes], home)).toEqual([
            clothes
        ]);
    });

    it('should return added category', () => {
        expect(updateCategories([], electronic)).toEqual([electronic]);

        expect(updateCategories([home, clothes], electronic)).toEqual(
            [home, clothes, electronic]
        );
    });
});