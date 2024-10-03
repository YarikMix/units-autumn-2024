import React from 'react';
import { Product } from '../../types';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { MainPage } from './MainPage';
describe('MainPage test', () => {
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

    beforeEach(() => {
        jest.useFakeTimers().setSystemTime(new Date('2024-10-03 00:00:00'));
    });

    it('should render correctly', () => {
        const rendered = render(<MainPage />);
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('should update time', () => {
        render(<MainPage />);
        expect(screen.queryByText('00:00:00')).not.toBeNull();
        act(() => jest.advanceTimersByTime(1000));
        expect(screen.queryByText('00:00:01')).not.toBeNull();
    });

    it('should filter products when category clicked', () => {
        render(<MainPage />);
        products.forEach(({ name }) =>
            expect(screen.queryByText(name)).not.toBeNull()
        );
        fireEvent.click(screen.getAllByText('Одежда')[0]);
        products.forEach(({ name, category }) => {
            if (category == 'Одежда') {
                expect(screen.queryByText(name)).not.toBeNull();
            } else {
                expect(screen.queryByText(name)).toBeNull();
            }
        });
    });
});