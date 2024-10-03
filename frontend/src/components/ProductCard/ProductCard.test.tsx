import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { render } from '@testing-library/react';

describe('ProductCard test', () => {
    const productProps: Product = {
        id: 0,
        name: 'Product name',
        description: 'This product is unbelievable',
        price: 999,
        priceSymbol: '$',
        category: 'Электроника',
        imgUrl: '/phone.png',
    };

    it('should render correctly', () => {
        const rendered = render(<ProductCard {...productProps} />);
        expect(rendered.asFragment()).toMatchSnapshot();
    });
});