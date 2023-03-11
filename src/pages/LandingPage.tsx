import React, { useEffect, useState } from 'react';
import Header from '../components/commonComponents/Header';
import MovieCard from '../components/commonComponents/MovieCard';
import { listMoviesMockData } from '../components/constants/listMoviesMockData';
import FilterByCategory from '../components/FilterByCategory';
import { IMovieItemData } from '../interfaces/types';
import './LandingPage.scss';

// Component to render movie cards
const renderMovieCards = (moviesListData: IMovieItemData[]) => {
    if (Array.isArray(moviesListData) && moviesListData?.length) {
        const view = moviesListData?.map((movieItem) => <MovieCard movieItemData={movieItem} />);
        return view;
    } else {
        return (
            <div className='moviesList__empty'>
                <h1>No movies to display</h1>
            </div>
        );
    }
};

const LandingPage: React.FC = () => {
    const [moviesListData, setMoviesListData] = useState<IMovieItemData[]>([]);

    useEffect(() => {
        setMoviesListData(listMoviesMockData);
    }, []);

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div>
            <Header />
            <div className='filter-cards__container'>
                <FilterByCategory />
                {/* Movies List View */}
                <div className='moviesList__wrapper'>
                    <div className='moviesList__tabs'>
                        <button className={activeTabIndex === 0 ? 'btn-active' : ''}>Now Showing</button>
                        <button>Upcoming Movies</button>
                    </div>
                    <div className='moviesList__container'>{renderMovieCards(moviesListData)}</div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
