import React from 'react';
import './FilterByCategory.scss';

export const filterOptions = {
    categories: [
        {
            categoryName: 'Date',
            options: ['Last Week', 'Last Month', 'Last Year']
        },
        {
            categoryName: 'Language',
            options: ['English', 'Hindi', 'Tamil', 'Telugu', 'Marathi', 'Malayalam', 'Kannada', 'Punjabi', 'Gujurati', 'Bengali', 'Odia']
        },
        {
            categoryName: 'Genere',
            options: ['Action', 'Animation', 'Biography', 'Comedy', 'Crime', 'Drama', 'Fantasy', 'Horror', 'Romantic', 'Sci-fi', 'Thriller']
        }
    ]
};

const FilterByCategory: React.FC = () => {
    return (
        <div className='filter__wrapper'>
            <div className='filter__header'>
                <h3 className='filter__header-title'>Filters</h3>
                <button className='filter__clear-all-btn'>Clear All</button>
            </div>

            <div className='category__wrapper'>
                {filterOptions?.categories?.map((category) => (
                    <div className='category__container'>
                        <input
                            type='checkbox'
                            className='category__label-checkbox'
                            id={`category-label-name-${category?.categoryName?.split(' ')[0]}`}
                        />
                        <label className='category__label-name' htmlFor={`category-label-name-${category?.categoryName?.split(' ')[0]}`}>
                            {category?.categoryName}
                        </label>

                        <div className='category__list'>
                            {category?.options?.map((optionItem, itemIndex) => (
                                <div className='category__item'>
                                    <input
                                        type='checkbox'
                                        name=''
                                        id={`opt-name-${category?.categoryName?.split(' ')[0]}-${optionItem?.split(' ')[0]}-$${itemIndex}`}
                                    />
                                    <label
                                        htmlFor={`opt-name-${category?.categoryName?.split(' ')[0]}-${
                                            optionItem?.split(' ')[0]
                                        }-$${itemIndex}`}
                                        className='category__item-name'
                                    >
                                        {optionItem}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterByCategory;
