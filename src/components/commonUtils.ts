import { IMovieItemData } from '../interfaces/types';

export const convertMinutesToHours = (value: number) => {
    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);
    return `${hours} hr ${minutes} mins`;
};

export const calculateLikesPercentage = (numberOfLikes: number, numberOfDislikes: number) => {
    const percentage = Math.floor((numberOfLikes / (numberOfLikes + numberOfDislikes)) * 100);
    return percentage;
};

export const getNowShowingMoviesList = (moviesList: IMovieItemData[]) => {
    const currentDateTime = Date.now();

    const filteredData = moviesList?.filter((movie) => {
        const releaseDateTime = Date.parse(movie?.release_date);

        if (releaseDateTime < currentDateTime) {
            return true;
        } else {
            return false;
        }
    });

    return filteredData;
};

export const getUpcomingMoviesList = (moviesList: IMovieItemData[]) => {
    const currentDateTime = Date.now();

    const filteredData = moviesList?.filter((movie) => {
        const releaseDateTime = Date.parse(movie?.release_date);

        if (releaseDateTime > currentDateTime) {
            return true;
        } else {
            return false;
        }
    });

    return filteredData;
};
