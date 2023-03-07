import React from 'react';
import { IMovieItemData } from '../../interfaces/types';
import LikeIcon from '../assets/svg/liked.svg';
import ClockIcon from '../assets/svg/time.svg';
import { calculateLikesPercentage, convertMinutesToHours } from '../commonUtils';
import './MovieCard.css';

export interface MovieCardProps {
    movieItemData: IMovieItemData;
}

const MovieCard: React.FC<MovieCardProps> = (props) => {
    const { movieItemData } = props;

    const handleOnClickMovieCard = (movieItemData: IMovieItemData) => {
        console.log('clicked movieItemData', movieItemData);
        alert(movieItemData?.name);
    };

    return (
        <div
            className='card__wrapper'
            onClick={() => {
                handleOnClickMovieCard(movieItemData);
            }}
        >
            <div className='card__header'>
                <div className='card__img'>
                    <img src={movieItemData?.poster_url} alt='Movie Poster' />
                </div>
            </div>

            <div className='card__footer'>
                <div className='card__info'>
                    <div className='card__row-1'>
                        <h1 className='movie-name'>{movieItemData?.name}</h1>
                        <p className='movie-type'>U/A</p>
                    </div>

                    <div className='card__row-2'>
                        <div className='movie-genere'>
                            {movieItemData?.language?.includes('English') && <span className='movie-language'>EN</span>}
                            {movieItemData?.language?.includes('Telegu') && <span className='movie-language'>TL</span>}

                            {movieItemData?.genre}
                        </div>
                        <div className='movie-duration'>
                            <img src={ClockIcon} alt='Duration' />
                            <p>{convertMinutesToHours(movieItemData?.duration)}</p>
                        </div>
                    </div>
                </div>

                <div className='card__likes'>
                    <div className='like-icon'>
                        <img src={LikeIcon} alt='Like' />
                    </div>
                    <p className='movie-like-percent'>
                        {calculateLikesPercentage(movieItemData?.like_count, movieItemData?.dislike_count)}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
