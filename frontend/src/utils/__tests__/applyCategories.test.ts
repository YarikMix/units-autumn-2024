import { Product } from '../../types';
import { applyCategories } from '../applyCategories';
describe('test apply category function', () => {

    const products: Product[] = [
        {
            id: 1,
            name: 'IPhone 14 Pro',
            description: 'Latest iphone, buy it now',
            price: 999,
            priceSymbol: '$',
            category: 'Электроника',
            imgUrl: '/iphone.png',
        },
        {
            id: 2,
            name: 'Костюм гуся',
            description: 'Запускаем гуся, работяги',
            price: 1000,
            priceSymbol: '₽',
            category: 'Одежда',
        },
        {
            id: 3,
            name: 'Настольная лампа',
            description: 'Говорят, что ее использовали в pixar',
            price: 699,
            category: 'Для дома',
            imgUrl: '/lamp.png',
        },
        {
            id: 4,
            name: 'Принтер',
            description: 'Незаменимая вещь для студента',
            price: 7000,
            category: 'Электроника',
        },
    ];

    const electronic = [products[0], products[3]];
    const clothes = [products[1]];
    const home = [products[2]];

    it('should return list of all products', () => {
        expect(applyCategories(products, [])).toEqual(products);
        expect(applyCategories(products, ['Электроника', 'Для дома', 'Одежда'])).toStrictEqual(products);
    });

    it('should return list of electronic products', () => {
        expect(applyCategories(products, ['Электроника'])).toStrictEqual(electronic);
    });

    it('should return list of clothes', () => {
        expect(applyCategories(products, ['Одежда'])).toStrictEqual(clothes);
    });

    it('should return list of home products and clothes', () => {
        expect(applyCategories(products, ['Одежда', 'Для дома'])).toStrictEqual([...clothes, ...home]);
    });
});