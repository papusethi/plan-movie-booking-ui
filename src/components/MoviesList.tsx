import React, { useEffect, useState } from 'react';
import { IMovieItemData } from '../interfaces/types';
import MovieCard from './commonComponents/MovieCard';
import TabsPanel, { TabListItem } from './commonComponents/TabsPanel';
import { getNowShowingMoviesList, getUpcomingMoviesList } from './commonUtils';
import { listMoviesMockData } from './constants/listMoviesMockData';
import './MoviesList.scss';

export const tabsList = [
    {
        _id: 0,
        label: 'Now Showing',
        value: 'Now Showing'
    },
    {
        _id: 1,
        label: 'Upcoming Movies',
        value: 'Upcoming Movies'
    }
];

// Component to render movie cards
const renderMovieCards = (moviesListData: IMovieItemData[]) => {
    if (Array.isArray(moviesListData) && moviesListData?.length) {
        const view = moviesListData?.map((movieItem) => <MovieCard movieItemData={movieItem} />);
        return <div className='moviesList__container'>{view}</div>;
    } else {
        return (
            <div className='moviesList__container'>
                <h1 className='moviesList__empty'>No movies to display</h1>
            </div>
        );
    }
};

const MoviesList: React.FC = () => {
    const [moviesListData, setMoviesListData] = useState<IMovieItemData[]>([]);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [activeTabContent, setActiveTabContent] = useState<React.ReactNode>(<></>);

    useEffect(() => {
        setMoviesListData(listMoviesMockData);
    }, []);

    useEffect(() => {
        const activeTabValue = tabsList?.[activeTabIndex]?.value;

        switch (activeTabValue) {
            case 'Now Showing': {
                const resultMoviesList = getNowShowingMoviesList(moviesListData);
                const content = renderMovieCards(resultMoviesList);
                setActiveTabContent(content);
                break;
            }

            case 'Upcoming Movies': {
                const resultMoviesList = getUpcomingMoviesList(moviesListData);
                const content = renderMovieCards(resultMoviesList);
                setActiveTabContent(content);
                break;
            }

            default: {
                const content = renderMovieCards([]);
                setActiveTabContent(content);
            }
        }
    }, [activeTabIndex, moviesListData]);

    const handleOnTabChange = (value: TabListItem) => {
        const newTabIndex = value?._id;
        setActiveTabIndex(newTabIndex);
    };

    return (
        <div className='moviesList__wrapper'>
            <TabsPanel
                tabsList={tabsList}
                activeTabIndex={activeTabIndex}
                activeTabConent={activeTabContent}
                handleOnTabChange={handleOnTabChange}
            />
        </div>
    );
};

export default MoviesList;
