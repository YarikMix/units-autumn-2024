import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { render } from '@testing-library/react';

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
});