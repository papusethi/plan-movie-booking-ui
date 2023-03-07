import React, { useEffect, useState } from 'react';
import Header from '../components/commonComponents/Header';
import MovieCard from '../components/commonComponents/MovieCard';
import { listMoviesMockData } from '../components/constants/listMoviesMockData';
import { IMovieItemData } from '../interfaces/types';
import './LandingPage.css';

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

    return (
        <div>
            <Header />

            {/* Movies List View */}
            <div className='moviesList__container'>{renderMovieCards(moviesListData)}</div>
        </div>
    );
};

export default LandingPage;
