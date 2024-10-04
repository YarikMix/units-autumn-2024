import React from 'react';
import { Product } from '../../types';
import { render, screen, fireEvent } from '@testing-library/react';
import { MainPage } from './MainPage';
import {useCurrentTime} from "../../hooks";
import * as currentTimeHook from "../../hooks/useCurrentTime"
import * as updateCategoriesModule from "../../utils/updateCategories"
import * as applyCategoriesModule from "../../utils/applyCategories"

const mockCurrentTime = jest.spyOn(currentTimeHook, 'useCurrentTime');
mockCurrentTime.mockReturnValue('12:00:00')

const mockUC = jest.spyOn(updateCategoriesModule, 'updateCategories');
const mockAC = jest.spyOn(applyCategoriesModule, 'applyCategories');

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

    it('should render correctly', () => {
        const rendered = render(<MainPage />);
        expect(rendered.asFragment()).toMatchSnapshot();
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