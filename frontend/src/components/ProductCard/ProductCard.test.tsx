import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { render } from '@testing-library/react';
import * as getPriceUtil from '../../utils/getPrice';

describe('ProductCard test', () => {
    const productProps: Product = {
        id: 123,
        name: 'Product name',
        description: 'Product description',
        price: 9999,
        priceSymbol: '$',
        category: 'Электроника',
        imgUrl: '/phone.png',
    };

    it('should render correctly', () => {
        const rendered = render(<ProductCard {...productProps} />);
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('should call once getPrice util', () => {
        const mockGetPrice = jest.spyOn(getPriceUtil, 'getPrice');
        expect(mockGetPrice).not.toBeCalled();
        render(<ProductCard {...productProps} />);
        expect(mockGetPrice).toBeCalledTimes(1);
    });

    it('should not render img', () => {
        const rendered = render(
            <ProductCard
                id={1}
                name={'Product name'}
                description={'Product description'}
                price={555}
                category={'Для дома'}
            />
        );

        expect(rendered.queryByRole('img')).toBeNull();
    });
});