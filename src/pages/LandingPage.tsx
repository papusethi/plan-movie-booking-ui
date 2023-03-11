import React from 'react';
import Header from '../components/commonComponents/Header';
import FilterByCategory from '../components/FilterByCategory';
import MoviesList from '../components/MoviesList';
import './LandingPage.scss';

const LandingPage: React.FC = () => {
    return (
        <div>
            <Header />
            <div className='filter-cards__container'>
                {/* Filter by Categories View */}
                <FilterByCategory />

                {/* Movies List View */}
                <MoviesList />
            </div>
        </div>
    );
};

export default LandingPage;
